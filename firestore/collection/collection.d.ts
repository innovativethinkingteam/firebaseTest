import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { CollectionReference, DocumentChangeAction, DocumentChangeType, DocumentData, DocumentReference, Query } from '../interfaces';
import { AngularFirestoreDocument } from '../document/document';
import { AngularFirestore } from '../firestore';
export declare function validateEventsArray(events?: DocumentChangeType[]): firebase.firestore.DocumentChangeType[];
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
 */
export declare class AngularFirestoreCollection<T = DocumentData> {
    readonly ref: CollectionReference;
    private readonly query;
    private readonly afs;
    /**
     * The constructor takes in a CollectionReference and Query to provide wrapper methods
     * for data operations and data streaming.
     *
     * Note: Data operation methods are done on the reference not the query. This means
     * when you update data it is not updating data to the window of your query unless
     * the data fits the criteria of the query. See the AssociatedRefence type for details
     * on this implication.
     */
    constructor(ref: CollectionReference, query: Query, afs: AngularFirestore);
    /**
     * Listen to the latest change in the stream. This method returns changes
     * as they occur and they are not sorted by query order. This allows you to construct
     * your own data structure.
     */
    stateChanges(events?: DocumentChangeType[]): Observable<DocumentChangeAction<T>[]>;
    /**
     * Create a stream of changes as they occur it time. This method is similar to stateChanges()
     * but it collects each event in an array over time.
     */
    auditTrail(events?: DocumentChangeType[]): Observable<DocumentChangeAction<T>[]>;
    /**
     * Create a stream of synchronized changes. This method keeps the local array in sorted
     * query order.
     */
    snapshotChanges(events?: DocumentChangeType[]): Observable<DocumentChangeAction<T>[]>;
    /**
     * Listen to all documents in the collection and its possible query as an Observable.
     *
     * If the `idField` option is provided, document IDs are included and mapped to the
     * provided `idField` property name.
     */
    valueChanges(): Observable<T[]>;
    valueChanges({}: {}): Observable<T[]>;
    valueChanges<K extends string>(options: {
        idField: K;
    }): Observable<(T & {
        [T in K]: string;
    })[]>;
    /**
     * Retrieve the results of the query once.
     */
    get(options?: firebase.firestore.GetOptions): Observable<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>>;
    /**
     * Add data to a collection reference.
     *
     * Note: Data operation methods are done on the reference not the query. This means
     * when you update data it is not updating data to the window of your query unless
     * the data fits the criteria of the query.
     */
    add(data: T): Promise<DocumentReference>;
    /**
     * Create a reference to a single document in a collection.
     */
    doc<T>(path?: string): AngularFirestoreDocument<T>;
}
