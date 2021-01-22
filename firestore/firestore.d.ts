import { InjectionToken, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AssociatedReference, CollectionReference, DocumentReference, PersistenceSettings, QueryFn, QueryGroupFn, Settings } from './interfaces';
import { AngularFirestoreDocument } from './document/document';
import { AngularFirestoreCollection } from './collection/collection';
import { AngularFirestoreCollectionGroup } from './collection-group/collection-group';
import { FirebaseAppConfig, FirebaseOptions, ɵAngularFireSchedulers } from '@angular/fire';
import 'firebase/firestore';
import firebase from 'firebase/app';
/**
 * The value of this token determines whether or not the firestore will have persistance enabled
 */
import * as ɵngcc0 from '@angular/core';
export declare const ENABLE_PERSISTENCE: InjectionToken<boolean>;
export declare const PERSISTENCE_SETTINGS: InjectionToken<firebase.firestore.PersistenceSettings>;
export declare const SETTINGS: InjectionToken<firebase.firestore.Settings>;
/**
 * A utility methods for associating a collection reference with
 * a query.
 *
 * @param collectionRef - A collection reference to query
 * @param queryFn - The callback to create a query
 *
 * Example:
 * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
 *  return ref.where('age', '<', 200);
 * });
 */
export declare function associateQuery(collectionRef: CollectionReference, queryFn?: (ref: any) => any): AssociatedReference;
/**
 * AngularFirestore Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for creating Collection and Reference services. These services can
 * then be used to do data updates and observable streams of the data.
 *
 * Example:
 *
 * import { Component } from '@angular/core';
 * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
 * import { Observable } from 'rxjs/Observable';
 * import { from } from 'rxjs/observable';
 *
 * @Component({
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
export declare class AngularFirestore {
    readonly firestore: firebase.firestore.Firestore;
    readonly persistenceEnabled$: Observable<boolean>;
    readonly schedulers: ɵAngularFireSchedulers;
    readonly keepUnstableUntilFirst: <T>(obs: Observable<T>) => Observable<T>;
    /**
     * Each Feature of AngularFire has a FirebaseApp injected. This way we
     * don't rely on the main Firebase App instance and we can create named
     * apps and use multiple apps.
     */
    constructor(options: FirebaseOptions, nameOrConfig: string | FirebaseAppConfig | null | undefined, shouldEnablePersistence: boolean | null, settings: Settings | null, platformId: Object, zone: NgZone, persistenceSettings: PersistenceSettings | null);
    /**
     * Create a reference to a Firestore Collection based on a path or
     * CollectionReference and an optional query function to narrow the result
     * set.
     */
    collection<T>(path: string, queryFn?: QueryFn): AngularFirestoreCollection<T>;
    collection<T>(ref: CollectionReference, queryFn?: QueryFn): AngularFirestoreCollection<T>;
    /**
     * Create a reference to a Firestore Collection Group based on a collectionId
     * and an optional query function to narrow the result
     * set.
     */
    collectionGroup<T>(collectionId: string, queryGroupFn?: QueryGroupFn): AngularFirestoreCollectionGroup<T>;
    /**
     * Create a reference to a Firestore Document based on a path or
     * DocumentReference. Note that documents are not queryable because they are
     * simply objects. However, documents have sub-collections that return a
     * Collection reference and can be queried.
     */
    doc<T>(path: string): AngularFirestoreDocument<T>;
    doc<T>(ref: DocumentReference): AngularFirestoreDocument<T>;
    /**
     * Returns a generated Firestore Document Id.
     */
    createId(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularFirestore, [null, { optional: true; }, { optional: true; }, { optional: true; }, null, null, { optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZXN0b3JlLmQudHMiLCJzb3VyY2VzIjpbImZpcmVzdG9yZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJHQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFzc29jaWF0ZWRSZWZlcmVuY2UsIENvbGxlY3Rpb25SZWZlcmVuY2UsIERvY3VtZW50UmVmZXJlbmNlLCBQZXJzaXN0ZW5jZVNldHRpbmdzLCBRdWVyeUZuLCBRdWVyeUdyb3VwRm4sIFNldHRpbmdzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmVEb2N1bWVudCB9IGZyb20gJy4vZG9jdW1lbnQvZG9jdW1lbnQnO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZUNvbGxlY3Rpb24gfSBmcm9tICcuL2NvbGxlY3Rpb24vY29sbGVjdGlvbic7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlQ29sbGVjdGlvbkdyb3VwIH0gZnJvbSAnLi9jb2xsZWN0aW9uLWdyb3VwL2NvbGxlY3Rpb24tZ3JvdXAnO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHBDb25maWcsIEZpcmViYXNlT3B0aW9ucywgybVBbmd1bGFyRmlyZVNjaGVkdWxlcnMgfSBmcm9tICdAYW5ndWxhci9maXJlJztcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuLyoqXG4gKiBUaGUgdmFsdWUgb2YgdGhpcyB0b2tlbiBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBmaXJlc3RvcmUgd2lsbCBoYXZlIHBlcnNpc3RhbmNlIGVuYWJsZWRcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgRU5BQkxFX1BFUlNJU1RFTkNFOiBJbmplY3Rpb25Ub2tlbjxib29sZWFuPjtcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IFBFUlNJU1RFTkNFX1NFVFRJTkdTOiBJbmplY3Rpb25Ub2tlbjxmaXJlYmFzZS5maXJlc3RvcmUuUGVyc2lzdGVuY2VTZXR0aW5ncz47XG5leHBvcnQgZGVjbGFyZSBjb25zdCBTRVRUSU5HUzogSW5qZWN0aW9uVG9rZW48ZmlyZWJhc2UuZmlyZXN0b3JlLlNldHRpbmdzPjtcbi8qKlxuICogQSB1dGlsaXR5IG1ldGhvZHMgZm9yIGFzc29jaWF0aW5nIGEgY29sbGVjdGlvbiByZWZlcmVuY2Ugd2l0aFxuICogYSBxdWVyeS5cbiAqXG4gKiBAcGFyYW0gY29sbGVjdGlvblJlZiAtIEEgY29sbGVjdGlvbiByZWZlcmVuY2UgdG8gcXVlcnlcbiAqIEBwYXJhbSBxdWVyeUZuIC0gVGhlIGNhbGxiYWNrIHRvIGNyZWF0ZSBhIHF1ZXJ5XG4gKlxuICogRXhhbXBsZTpcbiAqIGNvbnN0IHsgcXVlcnksIHJlZiB9ID0gYXNzb2NpYXRlUXVlcnkoZG9jUmVmLmNvbGxlY3Rpb24oJ2l0ZW1zJyksIHJlZiA9PiB7XG4gKiAgcmV0dXJuIHJlZi53aGVyZSgnYWdlJywgJzwnLCAyMDApO1xuICogfSk7XG4gKi9cbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGFzc29jaWF0ZVF1ZXJ5KGNvbGxlY3Rpb25SZWY6IENvbGxlY3Rpb25SZWZlcmVuY2UsIHF1ZXJ5Rm4/OiAocmVmOiBhbnkpID0+IGFueSk6IEFzc29jaWF0ZWRSZWZlcmVuY2U7XG4vKipcbiAqIEFuZ3VsYXJGaXJlc3RvcmUgU2VydmljZVxuICpcbiAqIFRoaXMgc2VydmljZSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhpcyBmZWF0dXJlIG1vZHVsZS4gSXQgcHJvdmlkZXNcbiAqIGFuIEFQSSBmb3IgY3JlYXRpbmcgQ29sbGVjdGlvbiBhbmQgUmVmZXJlbmNlIHNlcnZpY2VzLiBUaGVzZSBzZXJ2aWNlcyBjYW5cbiAqIHRoZW4gYmUgdXNlZCB0byBkbyBkYXRhIHVwZGF0ZXMgYW5kIG9ic2VydmFibGUgc3RyZWFtcyBvZiB0aGUgZGF0YS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICogaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZSwgQW5ndWxhckZpcmVzdG9yZUNvbGxlY3Rpb24sIEFuZ3VsYXJGaXJlc3RvcmVEb2N1bWVudCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlJztcbiAqIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuICogaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnYXBwLW15LWNvbXBvbmVudCcsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgICA8aDI+SXRlbXMgZm9yIHt7IChwcm9maWxlIHwgYXN5bmMpPy5uYW1lIH19XG4gKiAgICA8dWw+XG4gKiAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXMgfCBhc3luY1wiPnt7IGl0ZW0ubmFtZSB9fTwvbGk+XG4gKiAgICA8L3VsPlxuICogICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtaW5wdXRcIj5cbiAqICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpdGVtbmFtZSAvPlxuICogICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkSXRlbShpdGVtbmFtZS52YWx1ZSlcIj5BZGQgSXRlbTwvYnV0dG9uPlxuICogICAgPC9kaXY+XG4gKiAgIGBcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgTXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICpcbiAqICAgLy8gc2VydmljZXMgZm9yIGRhdGEgb3BlcmF0aW9ucyBhbmQgZGF0YSBzdHJlYW1pbmdcbiAqICAgcHJpdmF0ZSByZWFkb25seSBpdGVtc1JlZjogQW5ndWxhckZpcmVzdG9yZUNvbGxlY3Rpb248SXRlbT47XG4gKiAgIHByaXZhdGUgcmVhZG9ubHkgcHJvZmlsZVJlZjogQW5ndWxhckZpcmVzdG9yZURvY3VtZW50PFByb2ZpbGU+O1xuICpcbiAqICAgLy8gb2JzZXJ2YWJsZXMgZm9yIHRlbXBsYXRlXG4gKiAgIGl0ZW1zOiBPYnNlcnZhYmxlPEl0ZW1bXT47XG4gKiAgIHByb2ZpbGU6IE9ic2VydmFibGU8UHJvZmlsZT47XG4gKlxuICogICAvLyBpbmplY3QgbWFpbiBzZXJ2aWNlXG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYWZzOiBBbmd1bGFyRmlyZXN0b3JlKSB7fVxuICpcbiAqICAgbmdPbkluaXQoKSB7XG4gKiAgICAgdGhpcy5pdGVtc1JlZiA9IGFmcy5jb2xsZWN0aW9uKCdpdGVtcycsIHJlZiA9PiByZWYud2hlcmUoJ3VzZXInLCAnPT0nLCAnZGF2aWRlYXN0JykubGltaXQoMTApKTtcbiAqICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtc1JlZi52YWx1ZUNoYW5nZXMoKS5tYXAoc25hcCA9PiBzbmFwLmRvY3MubWFwKGRhdGEgPT4gZG9jLmRhdGEoKSkpO1xuICogICAgIC8vIHRoaXMuaXRlbXMgPSBmcm9tKHRoaXMuaXRlbXNSZWYpOyAvLyB5b3UgY2FuIGFsc28gZG8gdGhpcyB3aXRoIG5vIG1hcHBpbmdcbiAqXG4gKiAgICAgdGhpcy5wcm9maWxlUmVmID0gYWZzLmRvYygndXNlcnMvZGF2aWRlYXN0Jyk7XG4gKiAgICAgdGhpcy5wcm9maWxlID0gdGhpcy5wcm9maWxlUmVmLnZhbHVlQ2hhbmdlcygpO1xuICogICB9XG4gKlxuICogICBhZGRJdGVtKG5hbWU6IHN0cmluZykge1xuICogICAgIGNvbnN0IHVzZXIgPSAnZGF2aWRlYXN0JztcbiAqICAgICB0aGlzLml0ZW1zUmVmLmFkZCh7IG5hbWUsIHVzZXIgfSk7XG4gKiAgIH1cbiAqIH1cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5ndWxhckZpcmVzdG9yZSB7XG4gICAgcmVhZG9ubHkgZmlyZXN0b3JlOiBmaXJlYmFzZS5maXJlc3RvcmUuRmlyZXN0b3JlO1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlRW5hYmxlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcmVhZG9ubHkgc2NoZWR1bGVyczogybVBbmd1bGFyRmlyZVNjaGVkdWxlcnM7XG4gICAgcmVhZG9ubHkga2VlcFVuc3RhYmxlVW50aWxGaXJzdDogPFQ+KG9iczogT2JzZXJ2YWJsZTxUPikgPT4gT2JzZXJ2YWJsZTxUPjtcbiAgICAvKipcbiAgICAgKiBFYWNoIEZlYXR1cmUgb2YgQW5ndWxhckZpcmUgaGFzIGEgRmlyZWJhc2VBcHAgaW5qZWN0ZWQuIFRoaXMgd2F5IHdlXG4gICAgICogZG9uJ3QgcmVseSBvbiB0aGUgbWFpbiBGaXJlYmFzZSBBcHAgaW5zdGFuY2UgYW5kIHdlIGNhbiBjcmVhdGUgbmFtZWRcbiAgICAgKiBhcHBzIGFuZCB1c2UgbXVsdGlwbGUgYXBwcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBGaXJlYmFzZU9wdGlvbnMsIG5hbWVPckNvbmZpZzogc3RyaW5nIHwgRmlyZWJhc2VBcHBDb25maWcgfCBudWxsIHwgdW5kZWZpbmVkLCBzaG91bGRFbmFibGVQZXJzaXN0ZW5jZTogYm9vbGVhbiB8IG51bGwsIHNldHRpbmdzOiBTZXR0aW5ncyB8IG51bGwsIHBsYXRmb3JtSWQ6IE9iamVjdCwgem9uZTogTmdab25lLCBwZXJzaXN0ZW5jZVNldHRpbmdzOiBQZXJzaXN0ZW5jZVNldHRpbmdzIHwgbnVsbCk7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIGEgRmlyZXN0b3JlIENvbGxlY3Rpb24gYmFzZWQgb24gYSBwYXRoIG9yXG4gICAgICogQ29sbGVjdGlvblJlZmVyZW5jZSBhbmQgYW4gb3B0aW9uYWwgcXVlcnkgZnVuY3Rpb24gdG8gbmFycm93IHRoZSByZXN1bHRcbiAgICAgKiBzZXQuXG4gICAgICovXG4gICAgY29sbGVjdGlvbjxUPihwYXRoOiBzdHJpbmcsIHF1ZXJ5Rm4/OiBRdWVyeUZuKTogQW5ndWxhckZpcmVzdG9yZUNvbGxlY3Rpb248VD47XG4gICAgY29sbGVjdGlvbjxUPihyZWY6IENvbGxlY3Rpb25SZWZlcmVuY2UsIHF1ZXJ5Rm4/OiBRdWVyeUZuKTogQW5ndWxhckZpcmVzdG9yZUNvbGxlY3Rpb248VD47XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIGEgRmlyZXN0b3JlIENvbGxlY3Rpb24gR3JvdXAgYmFzZWQgb24gYSBjb2xsZWN0aW9uSWRcbiAgICAgKiBhbmQgYW4gb3B0aW9uYWwgcXVlcnkgZnVuY3Rpb24gdG8gbmFycm93IHRoZSByZXN1bHRcbiAgICAgKiBzZXQuXG4gICAgICovXG4gICAgY29sbGVjdGlvbkdyb3VwPFQ+KGNvbGxlY3Rpb25JZDogc3RyaW5nLCBxdWVyeUdyb3VwRm4/OiBRdWVyeUdyb3VwRm4pOiBBbmd1bGFyRmlyZXN0b3JlQ29sbGVjdGlvbkdyb3VwPFQ+O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHJlZmVyZW5jZSB0byBhIEZpcmVzdG9yZSBEb2N1bWVudCBiYXNlZCBvbiBhIHBhdGggb3JcbiAgICAgKiBEb2N1bWVudFJlZmVyZW5jZS4gTm90ZSB0aGF0IGRvY3VtZW50cyBhcmUgbm90IHF1ZXJ5YWJsZSBiZWNhdXNlIHRoZXkgYXJlXG4gICAgICogc2ltcGx5IG9iamVjdHMuIEhvd2V2ZXIsIGRvY3VtZW50cyBoYXZlIHN1Yi1jb2xsZWN0aW9ucyB0aGF0IHJldHVybiBhXG4gICAgICogQ29sbGVjdGlvbiByZWZlcmVuY2UgYW5kIGNhbiBiZSBxdWVyaWVkLlxuICAgICAqL1xuICAgIGRvYzxUPihwYXRoOiBzdHJpbmcpOiBBbmd1bGFyRmlyZXN0b3JlRG9jdW1lbnQ8VD47XG4gICAgZG9jPFQ+KHJlZjogRG9jdW1lbnRSZWZlcmVuY2UpOiBBbmd1bGFyRmlyZXN0b3JlRG9jdW1lbnQ8VD47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGdlbmVyYXRlZCBGaXJlc3RvcmUgRG9jdW1lbnQgSWQuXG4gICAgICovXG4gICAgY3JlYXRlSWQoKTogc3RyaW5nO1xufVxuIl19