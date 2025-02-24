import { InjectionToken, Injectable, Inject, Optional, PLATFORM_ID, NgZone, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { asyncScheduler, Observable, from, of } from 'rxjs';
import { map, scan, filter, observeOn } from 'rxjs/operators';
import { ɵAngularFireSchedulers, ɵkeepUnstableUntilFirstFactory, ɵfirebaseAppFactory, FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire';
import { isPlatformServer } from '@angular/common';
import 'firebase/firestore';
import firebase from 'firebase/app';

/**
 * @fileoverview added by tsickle
 * Generated from: observable/fromRef.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, R
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function _fromRef(ref, scheduler = asyncScheduler) {
    return new Observable((/**
     * @param {?} subscriber
     * @return {?}
     */
    subscriber => {
        /** @type {?} */
        let unsubscribe;
        if (scheduler != null) {
            scheduler.schedule((/**
             * @return {?}
             */
            () => {
                unsubscribe = ref.onSnapshot(subscriber);
            }));
        }
        else {
            unsubscribe = ref.onSnapshot(subscriber);
        }
        return (/**
         * @return {?}
         */
        () => {
            if (unsubscribe != null) {
                unsubscribe();
            }
        });
    }));
}
/**
 * @template R
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromRef(ref, scheduler) {
    return _fromRef(ref, scheduler);
}
/**
 * @template T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromDocRef(ref, scheduler) {
    return fromRef(ref, scheduler)
        .pipe(map((/**
     * @param {?} payload
     * @return {?}
     */
    payload => ({ payload, type: 'value' }))));
}
/**
 * @template T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromCollectionRef(ref, scheduler) {
    return fromRef(ref, scheduler).pipe(map((/**
     * @param {?} payload
     * @return {?}
     */
    payload => ({ payload, type: 'query' }))));
}

/**
 * @fileoverview added by tsickle
 * Generated from: collection/changes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Return a stream of document changes on a query. These results are not in sort order but in
 * order of occurence.
 * @template T
 * @param {?} query
 * @param {?=} scheduler
 * @return {?}
 */
function docChanges(query, scheduler) {
    return fromCollectionRef(query, scheduler)
        .pipe(map((/**
     * @param {?} action
     * @return {?}
     */
    action => action.payload.docChanges()
        .map((/**
     * @param {?} change
     * @return {?}
     */
    change => ((/** @type {?} */ ({ type: change.type, payload: change }))))))));
}
/**
 * Return a stream of document changes on a query. These results are in sort order.
 * @template T
 * @param {?} query
 * @param {?} events
 * @param {?=} scheduler
 * @return {?}
 */
function sortedChanges(query, events, scheduler) {
    return fromCollectionRef(query, scheduler)
        .pipe(map((/**
     * @param {?} changes
     * @return {?}
     */
    changes => changes.payload.docChanges())), scan((/**
     * @param {?} current
     * @param {?} changes
     * @return {?}
     */
    (current, changes) => combineChanges(current, changes, events)), []), map((/**
     * @param {?} changes
     * @return {?}
     */
    changes => changes.map((/**
     * @param {?} c
     * @return {?}
     */
    c => ((/** @type {?} */ ({ type: c.type, payload: c }))))))));
}
/**
 * Combines the total result set from the current set of changes from an incoming set
 * of changes.
 * @template T
 * @param {?} current
 * @param {?} changes
 * @param {?} events
 * @return {?}
 */
function combineChanges(current, changes, events) {
    changes.forEach((/**
     * @param {?} change
     * @return {?}
     */
    change => {
        // skip unwanted change types
        if (events.indexOf(change.type) > -1) {
            current = combineChange(current, change);
        }
    }));
    return current;
}
/**
 * Creates a new sorted array from a new change.
 * @template T
 * @param {?} combined
 * @param {?} change
 * @return {?}
 */
function combineChange(combined, change) {
    switch (change.type) {
        case 'added':
            if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {
                // Not sure why the duplicates are getting fired
            }
            else {
                combined.splice(change.newIndex, 0, change);
            }
            break;
        case 'modified':
            if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                // When an item changes position we first remove it
                // and then add it's new position
                if (change.oldIndex !== change.newIndex) {
                    combined.splice(change.oldIndex, 1);
                    combined.splice(change.newIndex, 0, change);
                }
                else {
                    combined.splice(change.newIndex, 1, change);
                }
            }
            break;
        case 'removed':
            if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                combined.splice(change.oldIndex, 1);
            }
            break;
    }
    return combined;
}

/**
 * @fileoverview added by tsickle
 * Generated from: collection/collection.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} events
 * @return {?}
 */
function validateEventsArray(events) {
    if (!events || events.length === 0) {
        events = ['added', 'removed', 'modified'];
    }
    return events;
}
/**
 * AngularFirestoreCollection service
 *
 * This class creates a reference to a Firestore Collection. A reference and a query are provided in
 * in the constructor. The query can be the unqueried reference if no query is desired.The class
 * is generic which gives you type safety for data update methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const collectionRef = firebase.firestore.collection('stocks');
 * const query = collectionRef.where('price', '>', '0.01');
 * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
 *
 * // NOTE!: the updates are performed on the reference not the query
 * await fakeStock.add({ name: 'FAKE', price: 0.01 });
 *
 * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
 * fakeStock.valueChanges().subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreCollection {
    /**
     * The constructor takes in a CollectionReference and Query to provide wrapper methods
     * for data operations and data streaming.
     *
     * Note: Data operation methods are done on the reference not the query. This means
     * when you update data it is not updating data to the window of your query unless
     * the data fits the criteria of the query. See the AssociatedRefence type for details
     * on this implication.
     * @param {?} ref
     * @param {?} query
     * @param {?} afs
     */
    constructor(ref, query, afs) {
        this.ref = ref;
        this.query = query;
        this.afs = afs;
    }
    /**
     * Listen to the latest change in the stream. This method returns changes
     * as they occur and they are not sorted by query order. This allows you to construct
     * your own data structure.
     * @param {?=} events
     * @return {?}
     */
    stateChanges(events) {
        if (!events || events.length === 0) {
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
        }
        return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(map((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.filter((/**
         * @param {?} change
         * @return {?}
         */
        change => events.indexOf(change.type) > -1)))), filter((/**
         * @param {?} changes
         * @return {?}
         */
        changes => changes.length > 0)), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Create a stream of changes as they occur it time. This method is similar to stateChanges()
     * but it collects each event in an array over time.
     * @param {?=} events
     * @return {?}
     */
    auditTrail(events) {
        return this.stateChanges(events).pipe(scan((/**
         * @param {?} current
         * @param {?} action
         * @return {?}
         */
        (current, action) => [...current, ...action]), []));
    }
    /**
     * Create a stream of synchronized changes. This method keeps the local array in sorted
     * query order.
     * @param {?=} events
     * @return {?}
     */
    snapshotChanges(events) {
        /** @type {?} */
        const validatedEvents = validateEventsArray(events);
        /** @type {?} */
        const scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
        return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * @template K
     * @param {?=} options
     * @return {?}
     */
    valueChanges(options = {}) {
        return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular)
            .pipe(map((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.payload.docs.map((/**
         * @param {?} a
         * @return {?}
         */
        a => {
            if (options.idField) {
                return (/** @type {?} */ (Object.assign(Object.assign({}, (/** @type {?} */ (a.data()))), { [options.idField]: a.id })));
            }
            else {
                return a.data();
            }
        })))), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Retrieve the results of the query once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return from(this.query.get(options)).pipe(observeOn(this.afs.schedulers.insideAngular));
    }
    /**
     * Add data to a collection reference.
     *
     * Note: Data operation methods are done on the reference not the query. This means
     * when you update data it is not updating data to the window of your query unless
     * the data fits the criteria of the query.
     * @param {?} data
     * @return {?}
     */
    add(data) {
        return this.ref.add(data);
    }
    /**
     * Create a reference to a single document in a collection.
     * @template T
     * @param {?=} path
     * @return {?}
     */
    doc(path) {
        return new AngularFirestoreDocument(this.ref.doc(path), this.afs);
    }
}
if (false) {
    /** @type {?} */
    AngularFirestoreCollection.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    AngularFirestoreCollection.prototype.query;
    /**
     * @type {?}
     * @private
     */
    AngularFirestoreCollection.prototype.afs;
}

/**
 * @fileoverview added by tsickle
 * Generated from: document/document.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * AngularFirestoreDocument service
 *
 * This class creates a reference to a Firestore Document. A reference is provided in
 * in the constructor. The class is generic which gives you type safety for data update
 * methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
 * await fakeStock.set({ name: 'FAKE', price: 0.01 });
 * fakeStock.valueChanges().map(snap => {
 *   if(snap.exists) return snap.data();
 *   return null;
 * }).subscribe(value => console.log(value));
 * // OR! Transform using Observable.from() and the data is unwrapped for you
 * Observable.from(fakeStock).subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreDocument {
    /**
     * The contstuctor takes in a DocumentReference to provide wrapper methods
     * for data operations, data streaming, and Symbol.observable.
     * @param {?} ref
     * @param {?} afs
     */
    constructor(ref, afs) {
        this.ref = ref;
        this.afs = afs;
    }
    /**
     * Create or overwrite a single document.
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    set(data, options) {
        return this.ref.set(data, options);
    }
    /**
     * Update some fields of a document without overwriting the entire document.
     * @param {?} data
     * @return {?}
     */
    update(data) {
        return this.ref.update(data);
    }
    /**
     * Delete a document.
     * @return {?}
     */
    delete() {
        return this.ref.delete();
    }
    /**
     * Create a reference to a sub-collection given a path and an optional query
     * function.
     * @template R
     * @param {?} path
     * @param {?=} queryFn
     * @return {?}
     */
    collection(path, queryFn) {
        /** @type {?} */
        const collectionRef = this.ref.collection(path);
        const { ref, query } = associateQuery(collectionRef, queryFn);
        return new AngularFirestoreCollection(ref, query, this.afs);
    }
    /**
     * Listen to snapshot updates from the document.
     * @return {?}
     */
    snapshotChanges() {
        /** @type {?} */
        const scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
        return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * Listen to unwrapped snapshot updates from the document.
     * @return {?}
     */
    valueChanges() {
        return this.snapshotChanges().pipe(map((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            return action.payload.data();
        })));
    }
    /**
     * Retrieve the document once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return from(this.ref.get(options)).pipe(observeOn(this.afs.schedulers.insideAngular));
    }
}
if (false) {
    /** @type {?} */
    AngularFirestoreDocument.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    AngularFirestoreDocument.prototype.afs;
}

/**
 * @fileoverview added by tsickle
 * Generated from: collection-group/collection-group.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * AngularFirestoreCollectionGroup service
 *
 * This class holds a reference to a Firestore Collection Group Query.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const collectionGroup = firebase.firestore.collectionGroup('stocks');
 * const query = collectionRef.where('price', '>', '0.01');
 * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
 *
 * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
 * fakeStock.valueChanges().subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreCollectionGroup {
    /**
     * The constructor takes in a CollectionGroupQuery to provide wrapper methods
     * for data operations and data streaming.
     * @param {?} query
     * @param {?} afs
     */
    constructor(query, afs) {
        this.query = query;
        this.afs = afs;
    }
    /**
     * Listen to the latest change in the stream. This method returns changes
     * as they occur and they are not sorted by query order. This allows you to construct
     * your own data structure.
     * @param {?=} events
     * @return {?}
     */
    stateChanges(events) {
        if (!events || events.length === 0) {
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
        }
        return docChanges(this.query, this.afs.schedulers.outsideAngular)
            .pipe(map((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.filter((/**
         * @param {?} change
         * @return {?}
         */
        change => events.indexOf(change.type) > -1)))), filter((/**
         * @param {?} changes
         * @return {?}
         */
        changes => changes.length > 0)), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Create a stream of changes as they occur it time. This method is similar to stateChanges()
     * but it collects each event in an array over time.
     * @param {?=} events
     * @return {?}
     */
    auditTrail(events) {
        return this.stateChanges(events).pipe(scan((/**
         * @param {?} current
         * @param {?} action
         * @return {?}
         */
        (current, action) => [...current, ...action]), []));
    }
    /**
     * Create a stream of synchronized changes. This method keeps the local array in sorted
     * query order.
     * @param {?=} events
     * @return {?}
     */
    snapshotChanges(events) {
        /** @type {?} */
        const validatedEvents = validateEventsArray(events);
        /** @type {?} */
        const scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
        return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * Listen to all documents in the collection and its possible query as an Observable.
     * @return {?}
     */
    valueChanges() {
        /** @type {?} */
        const fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
        return fromCollectionRefScheduled$
            .pipe(map((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.payload.docs.map((/**
         * @param {?} a
         * @return {?}
         */
        a => a.data())))), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Retrieve the results of the query once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return from(this.query.get(options)).pipe(observeOn(this.afs.schedulers.insideAngular));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularFirestoreCollectionGroup.prototype.query;
    /**
     * @type {?}
     * @private
     */
    AngularFirestoreCollectionGroup.prototype.afs;
}

/**
 * @fileoverview added by tsickle
 * Generated from: firestore.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const atFirestore = require('@firebase/firestore');
/**
 * The value of this token determines whether or not the firestore will have persistance enabled
 * @type {?}
 */
const ENABLE_PERSISTENCE = new InjectionToken('angularfire2.enableFirestorePersistence');
/** @type {?} */
const PERSISTENCE_SETTINGS = new InjectionToken('angularfire2.firestore.persistenceSettings');
/** @type {?} */
const SETTINGS = new InjectionToken('angularfire2.firestore.settings');
/**
 * A utility methods for associating a collection reference with
 * a query.
 *
 * @param {?} collectionRef - A collection reference to query
 * @param {?=} queryFn - The callback to create a query
 *
 * Example:
 * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
 *  return ref.where('age', '<', 200);
 * });
 * @return {?}
 */
function associateQuery(collectionRef, queryFn = (/**
 * @param {?} ref
 * @return {?}
 */
ref => ref)) {
    /** @type {?} */
    const query = queryFn(collectionRef);
    /** @type {?} */
    const ref = collectionRef;
    return { query, ref };
}
/**
 * AngularFirestore Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for creating Collection and Reference services. These services can
 * then be used to do data updates and observable streams of the data.
 *
 * Example:
 *
 * import { Component } from '\@angular/core';
 * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '\@angular/fire/firestore';
 * import { Observable } from 'rxjs/Observable';
 * import { from } from 'rxjs/observable';
 *
 * \@Component({
 *   selector: 'app-my-component',
 *   template: `
 *    <h2>Items for {{ (profile | async)?.name }}
 *    <ul>
 *       <li *ngFor="let item of items | async">{{ item.name }}</li>
 *    </ul>
 *    <div class="control-input">
 *       <input type="text" #itemname />
 *       <button (click)="addItem(itemname.value)">Add Item</button>
 *    </div>
 *   `
 * })
 * export class MyComponent implements OnInit {
 *
 *   // services for data operations and data streaming
 *   private readonly itemsRef: AngularFirestoreCollection<Item>;
 *   private readonly profileRef: AngularFirestoreDocument<Profile>;
 *
 *   // observables for template
 *   items: Observable<Item[]>;
 *   profile: Observable<Profile>;
 *
 *   // inject main service
 *   constructor(private readonly afs: AngularFirestore) {}
 *
 *   ngOnInit() {
 *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
 *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
 *     // this.items = from(this.itemsRef); // you can also do this with no mapping
 *
 *     this.profileRef = afs.doc('users/davideast');
 *     this.profile = this.profileRef.valueChanges();
 *   }
 *
 *   addItem(name: string) {
 *     const user = 'davideast';
 *     this.itemsRef.add({ name, user });
 *   }
 * }
 */
class AngularFirestore {
    /**
     * Each Feature of AngularFire has a FirebaseApp injected. This way we
     * don't rely on the main Firebase App instance and we can create named
     * apps and use multiple apps.
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} shouldEnablePersistence
     * @param {?} settings
     * @param {?} platformId
     * @param {?} zone
     * @param {?} persistenceSettings
     */
    constructor(options, nameOrConfig, shouldEnablePersistence, settings, 
    // tslint:disable-next-line:ban-types
    platformId, zone, persistenceSettings) {
        this.schedulers = new ɵAngularFireSchedulers(zone);
        this.keepUnstableUntilFirst = ɵkeepUnstableUntilFirstFactory(this.schedulers);
        this.firestore = zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const app = ɵfirebaseAppFactory(options, zone, nameOrConfig);
            // INVESTIGATE this seems to be required because in the browser build registerFirestore is an Object?
            //             seems like we're fighting ngcc. In the server firestore() isn't available, so I have to register
            //             in the browser registerFirestore is not a function... maybe this is an underlying firebase-js-sdk issue
            if ('registerFirestore' in atFirestore) {
                ((/** @type {?} */ (atFirestore))).registerFirestore((/** @type {?} */ (firebase)));
            }
            /** @type {?} */
            const firestore = app.firestore();
            if (settings) {
                firestore.settings(settings);
            }
            return firestore;
        }));
        if (shouldEnablePersistence && !isPlatformServer(platformId)) {
            // We need to try/catch here because not all enablePersistence() failures are caught
            // https://github.com/firebase/firebase-js-sdk/issues/608
            /** @type {?} */
            const enablePersistence = (/**
             * @return {?}
             */
            () => {
                try {
                    return from(this.firestore.enablePersistence(persistenceSettings || undefined).then((/**
                     * @return {?}
                     */
                    () => true), (/**
                     * @return {?}
                     */
                    () => false)));
                }
                catch (e) {
                    return of(false);
                }
            });
            this.persistenceEnabled$ = zone.runOutsideAngular(enablePersistence);
        }
        else {
            this.persistenceEnabled$ = of(false);
        }
    }
    /**
     * @template T
     * @param {?} pathOrRef
     * @param {?=} queryFn
     * @return {?}
     */
    collection(pathOrRef, queryFn) {
        /** @type {?} */
        let collectionRef;
        if (typeof pathOrRef === 'string') {
            collectionRef = this.firestore.collection(pathOrRef);
        }
        else {
            collectionRef = pathOrRef;
        }
        const { ref, query } = associateQuery(collectionRef, queryFn);
        /** @type {?} */
        const refInZone = this.schedulers.ngZone.run((/**
         * @return {?}
         */
        () => ref));
        return new AngularFirestoreCollection(refInZone, query, this);
    }
    /**
     * Create a reference to a Firestore Collection Group based on a collectionId
     * and an optional query function to narrow the result
     * set.
     * @template T
     * @param {?} collectionId
     * @param {?=} queryGroupFn
     * @return {?}
     */
    collectionGroup(collectionId, queryGroupFn) {
        /** @type {?} */
        const queryFn = queryGroupFn || ((/**
         * @param {?} ref
         * @return {?}
         */
        ref => ref));
        /** @type {?} */
        const collectionGroup = this.firestore.collectionGroup(collectionId);
        return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
    }
    /**
     * @template T
     * @param {?} pathOrRef
     * @return {?}
     */
    doc(pathOrRef) {
        /** @type {?} */
        let ref;
        if (typeof pathOrRef === 'string') {
            ref = this.firestore.doc(pathOrRef);
        }
        else {
            ref = pathOrRef;
        }
        /** @type {?} */
        const refInZone = this.schedulers.ngZone.run((/**
         * @return {?}
         */
        () => ref));
        return new AngularFirestoreDocument(refInZone, this);
    }
    /**
     * Returns a generated Firestore Document Id.
     * @return {?}
     */
    createId() {
        return this.firestore.collection('_').doc().id;
    }
}
AngularFirestore.decorators = [
    { type: Injectable, args: [{
                providedIn: 'any'
            },] }
];
/** @nocollapse */
AngularFirestore.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [FIREBASE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FIREBASE_APP_NAME,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ENABLE_PERSISTENCE,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SETTINGS,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PERSISTENCE_SETTINGS,] }] }
];
/** @nocollapse */ AngularFirestore.ɵprov = ɵɵdefineInjectable({ factory: function AngularFirestore_Factory() { return new AngularFirestore(ɵɵinject(FIREBASE_OPTIONS), ɵɵinject(FIREBASE_APP_NAME, 8), ɵɵinject(ENABLE_PERSISTENCE, 8), ɵɵinject(SETTINGS, 8), ɵɵinject(PLATFORM_ID), ɵɵinject(NgZone), ɵɵinject(PERSISTENCE_SETTINGS, 8)); }, token: AngularFirestore, providedIn: "any" });
if (false) {
    /** @type {?} */
    AngularFirestore.prototype.firestore;
    /** @type {?} */
    AngularFirestore.prototype.persistenceEnabled$;
    /** @type {?} */
    AngularFirestore.prototype.schedulers;
    /** @type {?} */
    AngularFirestore.prototype.keepUnstableUntilFirst;
}

/**
 * @fileoverview added by tsickle
 * Generated from: firestore.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFirestoreModule {
    /**
     * Attempt to enable persistent storage, if possible
     * @param {?=} persistenceSettings
     * @return {?}
     */
    static enablePersistence(persistenceSettings) {
        return {
            ngModule: AngularFirestoreModule,
            providers: [
                { provide: ENABLE_PERSISTENCE, useValue: true },
                { provide: PERSISTENCE_SETTINGS, useValue: persistenceSettings },
            ]
        };
    }
}
AngularFirestoreModule.decorators = [
    { type: NgModule, args: [{
                providers: [AngularFirestore]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DocumentSnapshotExists() { }
if (false) {
    /** @type {?} */
    DocumentSnapshotExists.prototype.exists;
    /**
     * @param {?=} options
     * @return {?}
     */
    DocumentSnapshotExists.prototype.data = function (options) { };
}
/**
 * @record
 */
function DocumentSnapshotDoesNotExist() { }
if (false) {
    /** @type {?} */
    DocumentSnapshotDoesNotExist.prototype.exists;
    /**
     * @param {?=} options
     * @return {?}
     */
    DocumentSnapshotDoesNotExist.prototype.data = function (options) { };
    /**
     * @param {?} fieldPath
     * @param {?=} options
     * @return {?}
     */
    DocumentSnapshotDoesNotExist.prototype.get = function (fieldPath, options) { };
}
/**
 * @record
 * @template T
 */
function QueryDocumentSnapshot() { }
if (false) {
    /**
     * @param {?=} options
     * @return {?}
     */
    QueryDocumentSnapshot.prototype.data = function (options) { };
}
/**
 * @record
 * @template T
 */
function QuerySnapshot() { }
if (false) {
    /** @type {?} */
    QuerySnapshot.prototype.docs;
}
/**
 * @record
 * @template T
 */
function DocumentChange() { }
if (false) {
    /** @type {?} */
    DocumentChange.prototype.doc;
}
/**
 * @record
 * @template T
 */
function DocumentChangeAction() { }
if (false) {
    /** @type {?} */
    DocumentChangeAction.prototype.type;
    /** @type {?} */
    DocumentChangeAction.prototype.payload;
}
/**
 * @record
 * @template T
 */
function Action() { }
if (false) {
    /** @type {?} */
    Action.prototype.type;
    /** @type {?} */
    Action.prototype.payload;
}
/**
 * @record
 * @template T
 */
function Reference() { }
if (false) {
    /** @type {?} */
    Reference.prototype.onSnapshot;
}
/**
 * A structure that provides an association between a reference
 * and a query on that reference. Note: Performing operations
 * on the reference can lead to confusing results with complicated
 * queries.
 *
 * Example:
 *
 * const query = ref.where('type', '==', 'Book').
 *                  .where('price', '>' 18.00)
 *                  .where('price', '<' 100.00)
 *                  .where('category', '==', 'Fiction')
 *                  .where('publisher', '==', 'BigPublisher')
 *
 * // This addition would not be a result of the query above
 * ref.add({
 *  type: 'Magazine',
 *  price: 4.99,
 *  category: 'Sports',
 *  publisher: 'SportsPublisher'
 * });
 * @record
 */
function AssociatedReference() { }
if (false) {
    /** @type {?} */
    AssociatedReference.prototype.ref;
    /** @type {?} */
    AssociatedReference.prototype.query;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire-firestore.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument, AngularFirestoreModule, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, associateQuery, combineChange, combineChanges, docChanges, fromCollectionRef, fromDocRef, fromRef, sortedChanges, validateEventsArray };
//# sourceMappingURL=angular-fire-firestore.js.map
