import { InjectionToken, Injectable, Inject, Optional, PLATFORM_ID, NgZone, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { asyncScheduler, Observable, of, merge } from 'rxjs';
import { map, share, switchMap, scan, distinctUntilChanged, withLatestFrom, skipWhile } from 'rxjs/operators';
import { ɵAngularFireSchedulers, ɵkeepUnstableUntilFirstFactory, ɵfirebaseAppFactory, FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire';
import 'firebase/database';
import { registerDatabase } from '@firebase/database';
import firebase from 'firebase/app';

/**
 * @fileoverview added by tsickle
 * Generated from: utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
import * as ɵngcc0 from '@angular/core';
function isString(value) {
    return typeof value === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */
function isFirebaseDataSnapshot(value) {
    return typeof value.exportVal === 'function';
}
/**
 * @param {?} obj
 * @return {?}
 */
function isNil(obj) {
    return obj === undefined || obj === null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isFirebaseRef(value) {
    return typeof value.set === 'function';
}
/**
 * Returns a database reference given a Firebase App and an
 * absolute or relative path.
 * @param {?} database - Firebase Database
 * @param {?} pathRef - Database path, relative or absolute
 * @return {?}
 */
function getRef(database, pathRef) {
    // if a db ref was passed in, just return it
    return isFirebaseRef(pathRef) ? (/** @type {?} */ (pathRef))
        : database.ref((/** @type {?} */ (pathRef)));
}
/**
 * @param {?} item
 * @param {?} cases
 * @return {?}
 */
function checkOperationCases(item, cases) {
    if (isString(item)) {
        return cases.stringCase();
    }
    else if (isFirebaseRef(item)) {
        return cases.firebaseCase();
    }
    else if (isFirebaseDataSnapshot(item)) {
        return cases.snapshotCase();
    }
    throw new Error(`Expects a string, snapshot, or reference. Got: ${typeof item}`);
}

/**
 * @fileoverview added by tsickle
 * Generated from: observable/fromRef.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function SnapshotPrevKey() { }
if (false) {
    /** @type {?} */
    SnapshotPrevKey.prototype.snapshot;
    /** @type {?} */
    SnapshotPrevKey.prototype.prevKey;
}
/**
 * Create an observable from a Database Reference or Database Query.
 * @template T
 * @param {?} ref Database Reference
 * @param {?} event Listen event type ('value', 'added', 'changed', 'removed', 'moved')
 * @param {?=} listenType 'on' or 'once'
 * @param {?=} scheduler - Rxjs scheduler
 * @return {?}
 */
function fromRef(ref, event, listenType = 'on', scheduler = asyncScheduler) {
    return new Observable((/**
     * @param {?} subscriber
     * @return {?}
     */
    subscriber => {
        /** @type {?} */
        let fn = null;
        fn = ref[listenType](event, (/**
         * @param {?} snapshot
         * @param {?} prevKey
         * @return {?}
         */
        (snapshot, prevKey) => {
            scheduler.schedule((/**
             * @return {?}
             */
            () => {
                subscriber.next({ snapshot, prevKey });
            }));
            if (listenType === 'once') {
                scheduler.schedule((/**
                 * @return {?}
                 */
                () => subscriber.complete()));
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        err => {
            scheduler.schedule((/**
             * @return {?}
             */
            () => subscriber.error(err)));
        }));
        if (listenType === 'on') {
            return {
                /**
                 * @return {?}
                 */
                unsubscribe() {
                    if (fn != null) {
                        ref.off(event, fn);
                    }
                }
            };
        }
        else {
            return {
                /**
                 * @return {?}
                 */
                unsubscribe() {
                }
            };
        }
    })).pipe(map((/**
     * @param {?} payload
     * @return {?}
     */
    payload => {
        const { snapshot, prevKey } = payload;
        /** @type {?} */
        let key = null;
        if (snapshot.exists()) {
            key = snapshot.key;
        }
        return { type: event, payload: snapshot, prevKey, key };
    })), share());
}

/**
 * @fileoverview added by tsickle
 * Generated from: list/changes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} ref
 * @param {?} events
 * @param {?=} scheduler
 * @return {?}
 */
function listChanges(ref, events, scheduler) {
    return fromRef(ref, 'value', 'once', scheduler).pipe(switchMap((/**
     * @param {?} snapshotAction
     * @return {?}
     */
    snapshotAction => {
        /** @type {?} */
        const childEvent$ = [of(snapshotAction)];
        events.forEach((/**
         * @param {?} event
         * @return {?}
         */
        event => childEvent$.push(fromRef(ref, event, 'on', scheduler))));
        return merge(...childEvent$).pipe(scan(buildView, []));
    })), distinctUntilChanged());
}
/**
 * @template T
 * @param {?} changes
 * @param {?} key
 * @return {?}
 */
function positionFor(changes, key) {
    /** @type {?} */
    const len = changes.length;
    for (let i = 0; i < len; i++) {
        if (changes[i].payload.key === key) {
            return i;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} changes
 * @param {?=} prevKey
 * @return {?}
 */
function positionAfter(changes, prevKey) {
    if (isNil(prevKey)) {
        return 0;
    }
    else {
        /** @type {?} */
        const i = positionFor(changes, prevKey);
        if (i === -1) {
            return changes.length;
        }
        else {
            return i + 1;
        }
    }
}
/**
 * @param {?} current
 * @param {?} action
 * @return {?}
 */
function buildView(current, action) {
    const { payload, prevKey, key } = action;
    /** @type {?} */
    const currentKeyPosition = positionFor(current, key);
    /** @type {?} */
    const afterPreviousKeyPosition = positionAfter(current, prevKey);
    switch (action.type) {
        case 'value':
            if (action.payload && action.payload.exists()) {
                /** @type {?} */
                let prevKey = null;
                action.payload.forEach((/**
                 * @param {?} payload
                 * @return {?}
                 */
                payload => {
                    /** @type {?} */
                    const action = { payload, type: 'value', prevKey, key: payload.key };
                    prevKey = payload.key;
                    current = [...current, action];
                    return false;
                }));
            }
            return current;
        case 'child_added':
            if (currentKeyPosition > -1) {
                // check that the previouskey is what we expect, else reorder
                /** @type {?} */
                const previous = current[currentKeyPosition - 1];
                if ((previous && previous.key || null) !== prevKey) {
                    current = current.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.payload.key !== payload.key));
                    current.splice(afterPreviousKeyPosition, 0, action);
                }
            }
            else if (prevKey == null) {
                return [action, ...current];
            }
            else {
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, action);
            }
            return current;
        case 'child_removed':
            return current.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.payload.key !== payload.key));
        case 'child_changed':
            return current.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.payload.key === key ? action : x));
        case 'child_moved':
            if (currentKeyPosition > -1) {
                /** @type {?} */
                const data = current.splice(currentKeyPosition, 1)[0];
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, data);
                return current;
            }
            return current;
        // default will also remove null results
        default:
            return current;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: list/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} events
 * @return {?}
 */
function validateEventsArray(events) {
    if (isNil(events) || events.length === 0) {
        events = ['child_added', 'child_removed', 'child_changed', 'child_moved'];
    }
    return events;
}

/**
 * @fileoverview added by tsickle
 * Generated from: list/snapshot-changes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} query
 * @param {?=} events
 * @param {?=} scheduler
 * @return {?}
 */
function snapshotChanges(query, events, scheduler) {
    events = validateEventsArray(events);
    return listChanges(query, events, scheduler);
}

/**
 * @fileoverview added by tsickle
 * Generated from: list/state-changes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} query
 * @param {?=} events
 * @param {?=} scheduler
 * @return {?}
 */
function stateChanges(query, events, scheduler) {
    events = validateEventsArray(events);
    /** @type {?} */
    const childEvent$ = events.map((/**
     * @param {?} event
     * @return {?}
     */
    event => fromRef(query, event, 'on', scheduler)));
    return merge(...childEvent$);
}

/**
 * @fileoverview added by tsickle
 * Generated from: list/audit-trail.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} query
 * @param {?=} events
 * @param {?=} scheduler
 * @return {?}
 */
function auditTrail(query, events, scheduler) {
    /** @type {?} */
    const auditTrail$ = stateChanges(query, events)
        .pipe(scan((/**
     * @param {?} current
     * @param {?} action
     * @return {?}
     */
    (current, action) => [...current, action]), []));
    return waitForLoaded(query, auditTrail$, scheduler);
}
/**
 * @record
 */
function LoadedMetadata() { }
if (false) {
    /** @type {?} */
    LoadedMetadata.prototype.data;
    /** @type {?} */
    LoadedMetadata.prototype.lastKeyToLoad;
}
/**
 * @template T
 * @param {?} query
 * @param {?=} scheduler
 * @return {?}
 */
function loadedData(query, scheduler) {
    // Create an observable of loaded values to retrieve the
    // known dataset. This will allow us to know what key to
    // emit the "whole" array at when listening for child events.
    return fromRef(query, 'value', 'on', scheduler)
        .pipe(map((/**
     * @param {?} data
     * @return {?}
     */
    data => {
        // Store the last key in the data set
        /** @type {?} */
        let lastKeyToLoad;
        // Loop through loaded dataset to find the last key
        data.payload.forEach((/**
         * @param {?} child
         * @return {?}
         */
        child => {
            lastKeyToLoad = child.key;
            return false;
        }));
        // return data set and the current last key loaded
        return { data, lastKeyToLoad };
    })));
}
/**
 * @template T
 * @param {?} query
 * @param {?} action$
 * @param {?=} scheduler
 * @return {?}
 */
function waitForLoaded(query, action$, scheduler) {
    /** @type {?} */
    const loaded$ = loadedData(query, scheduler);
    return loaded$
        .pipe(withLatestFrom(action$), 
    // Get the latest values from the "loaded" and "child" datasets
    // We can use both datasets to form an array of the latest values.
    map((/**
     * @param {?} __0
     * @return {?}
     */
    ([loaded, actions]) => {
        // Store the last key in the data set
        /** @type {?} */
        const lastKeyToLoad = loaded.lastKeyToLoad;
        // Store all child keys loaded at this point
        /** @type {?} */
        const loadedKeys = actions.map((/**
         * @param {?} snap
         * @return {?}
         */
        snap => snap.key));
        return { actions, lastKeyToLoad, loadedKeys };
    })), 
    // This is the magical part, only emit when the last load key
    // in the dataset has been loaded by a child event. At this point
    // we can assume the dataset is "whole".
    skipWhile((/**
     * @param {?} meta
     * @return {?}
     */
    meta => meta.loadedKeys.indexOf(meta.lastKeyToLoad) === -1)), 
    // Pluck off the meta data because the user only cares
    // to iterate through the snapshots
    map((/**
     * @param {?} meta
     * @return {?}
     */
    meta => meta.actions)));
}

/**
 * @fileoverview added by tsickle
 * Generated from: list/data-operation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} ref
 * @param {?} operation
 * @return {?}
 */
function createDataOperationMethod(ref, operation) {
    return (/**
     * @template T
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    function dataOperation(item, value) {
        return checkOperationCases(item, {
            stringCase: (/**
             * @return {?}
             */
            () => ref.child((/** @type {?} */ (item)))[operation](value)),
            firebaseCase: (/**
             * @return {?}
             */
            () => ((/** @type {?} */ (item)))[operation](value)),
            snapshotCase: (/**
             * @return {?}
             */
            () => ((/** @type {?} */ (item))).ref[operation](value))
        });
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: list/remove.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(davideast): Find out why TS thinks this returns firebase.Primise
// instead of Promise.
/**
 * @template T
 * @param {?} ref
 * @return {?}
 */
function createRemoveMethod(ref) {
    return (/**
     * @param {?=} item
     * @return {?}
     */
    function remove(item) {
        if (!item) {
            return ref.remove();
        }
        return checkOperationCases(item, {
            stringCase: (/**
             * @return {?}
             */
            () => ref.child((/** @type {?} */ (item))).remove()),
            firebaseCase: (/**
             * @return {?}
             */
            () => ((/** @type {?} */ (item))).remove()),
            snapshotCase: (/**
             * @return {?}
             */
            () => ((/** @type {?} */ (item))).ref.remove())
        });
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: list/create-reference.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} query
 * @param {?} afDatabase
 * @return {?}
 */
function createListReference(query, afDatabase) {
    /** @type {?} */
    const outsideAngularScheduler = afDatabase.schedulers.outsideAngular;
    /** @type {?} */
    const refInZone = afDatabase.schedulers.ngZone.run((/**
     * @return {?}
     */
    () => query.ref));
    return {
        query,
        update: createDataOperationMethod(refInZone, 'update'),
        set: createDataOperationMethod(refInZone, 'set'),
        push: (/**
         * @param {?} data
         * @return {?}
         */
        (data) => refInZone.push(data)),
        remove: createRemoveMethod(refInZone),
        /**
         * @param {?=} events
         * @return {?}
         */
        snapshotChanges(events) {
            return snapshotChanges(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
        },
        /**
         * @param {?=} events
         * @return {?}
         */
        stateChanges(events) {
            return stateChanges(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
        },
        /**
         * @param {?=} events
         * @return {?}
         */
        auditTrail(events) {
            return auditTrail(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
        },
        /**
         * @param {?=} events
         * @return {?}
         */
        valueChanges(events) {
            /** @type {?} */
            const snapshotChanges$ = snapshotChanges(query, events, outsideAngularScheduler);
            return snapshotChanges$.pipe(map((/**
             * @param {?} actions
             * @return {?}
             */
            actions => actions.map((/**
             * @param {?} a
             * @return {?}
             */
            a => (/** @type {?} */ (a.payload.val())))))), afDatabase.keepUnstableUntilFirst);
        }
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: object/snapshot-changes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} query
 * @param {?=} scheduler
 * @return {?}
 */
function createObjectSnapshotChanges(query, scheduler) {
    return (/**
     * @return {?}
     */
    function snapshotChanges() {
        return fromRef(query, 'value', 'on', scheduler);
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: object/create-reference.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} query
 * @param {?} afDatabase
 * @return {?}
 */
function createObjectReference(query, afDatabase) {
    return {
        query,
        /**
         * @template T
         * @return {?}
         */
        snapshotChanges() {
            return createObjectSnapshotChanges(query, afDatabase.schedulers.outsideAngular)().pipe(afDatabase.keepUnstableUntilFirst);
        },
        /**
         * @param {?} data
         * @return {?}
         */
        update(data) { return (/** @type {?} */ (query.ref.update((/** @type {?} */ (data))))); },
        /**
         * @param {?} data
         * @return {?}
         */
        set(data) { return (/** @type {?} */ (query.ref.set(data))); },
        /**
         * @return {?}
         */
        remove() { return (/** @type {?} */ (query.ref.remove())); },
        /**
         * @template T
         * @return {?}
         */
        valueChanges() {
            /** @type {?} */
            const snapshotChanges$ = createObjectSnapshotChanges(query, afDatabase.schedulers.outsideAngular)();
            return snapshotChanges$.pipe(afDatabase.keepUnstableUntilFirst, map((/**
             * @param {?} action
             * @return {?}
             */
            action => action.payload.exists() ? (/** @type {?} */ (action.payload.val())) : null)));
        },
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: database.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const URL = new InjectionToken('angularfire2.realtimeDatabaseURL');
class AngularFireDatabase {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} databaseURL
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(options, nameOrConfig, databaseURL, 
    // tslint:disable-next-line:ban-types
    platformId, zone) {
        this.schedulers = new ɵAngularFireSchedulers(zone);
        this.keepUnstableUntilFirst = ɵkeepUnstableUntilFirstFactory(this.schedulers);
        this.database = zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const app = ɵfirebaseAppFactory(options, zone, nameOrConfig);
            if (registerDatabase) {
                registerDatabase((/** @type {?} */ (firebase)));
            }
            return app.database(databaseURL || undefined);
        }));
    }
    /**
     * @template T
     * @param {?} pathOrRef
     * @param {?=} queryFn
     * @return {?}
     */
    list(pathOrRef, queryFn) {
        /** @type {?} */
        const ref = getRef(this.database, pathOrRef);
        /** @type {?} */
        let query = ref;
        if (queryFn) {
            query = queryFn(ref);
        }
        return createListReference(query, this);
    }
    /**
     * @template T
     * @param {?} pathOrRef
     * @return {?}
     */
    object(pathOrRef) {
        /** @type {?} */
        const ref = getRef(this.database, pathOrRef);
        return createObjectReference(ref, this);
    }
    /**
     * @return {?}
     */
    createPushId() {
        return this.database.ref().push().key;
    }
}
AngularFireDatabase.ɵfac = function AngularFireDatabase_Factory(t) { return new (t || AngularFireDatabase)(ɵngcc0.ɵɵinject(FIREBASE_OPTIONS), ɵngcc0.ɵɵinject(FIREBASE_APP_NAME, 8), ɵngcc0.ɵɵinject(URL, 8), ɵngcc0.ɵɵinject(PLATFORM_ID), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
/** @nocollapse */
AngularFireDatabase.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [FIREBASE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FIREBASE_APP_NAME,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [URL,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
/** @nocollapse */ AngularFireDatabase.ɵprov = ɵɵdefineInjectable({ factory: function AngularFireDatabase_Factory() { return new AngularFireDatabase(ɵɵinject(FIREBASE_OPTIONS), ɵɵinject(FIREBASE_APP_NAME, 8), ɵɵinject(URL, 8), ɵɵinject(PLATFORM_ID), ɵɵinject(NgZone)); }, token: AngularFireDatabase, providedIn: "any" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireDatabase, [{
        type: Injectable,
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [FIREBASE_OPTIONS]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [FIREBASE_APP_NAME]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [URL]
            }] }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc0.NgZone }]; }, null); })();
if (false) {
    /** @type {?} */
    AngularFireDatabase.prototype.database;
    /** @type {?} */
    AngularFireDatabase.prototype.schedulers;
    /** @type {?} */
    AngularFireDatabase.prototype.keepUnstableUntilFirst;
}

/**
 * @fileoverview added by tsickle
 * Generated from: database.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireDatabaseModule {
}
AngularFireDatabaseModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AngularFireDatabaseModule });
AngularFireDatabaseModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AngularFireDatabaseModule_Factory(t) { return new (t || AngularFireDatabaseModule)(); }, providers: [AngularFireDatabase] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireDatabaseModule, [{
        type: NgModule,
        args: [{
                providers: [AngularFireDatabase]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire-database.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularFireDatabase, AngularFireDatabaseModule, URL, auditTrail, createListReference, fromRef, listChanges, snapshotChanges, stateChanges };

//# sourceMappingURL=angular-fire-database.js.map