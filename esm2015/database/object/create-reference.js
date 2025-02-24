/**
 * @fileoverview added by tsickle
 * Generated from: object/create-reference.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { map } from 'rxjs/operators';
import { createObjectSnapshotChanges } from './snapshot-changes';
/**
 * @template T
 * @param {?} query
 * @param {?} afDatabase
 * @return {?}
 */
export function createObjectReference(query, afDatabase) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXJlZmVyZW5jZS5qcyIsInNvdXJjZVJvb3QiOiIvd29ya3NwYWNlL3NyYy9kYXRhYmFzZS8iLCJzb3VyY2VzIjpbIm9iamVjdC9jcmVhdGUtcmVmZXJlbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0FBR2pFLE1BQU0sVUFBVSxxQkFBcUIsQ0FBUyxLQUFvQixFQUFFLFVBQStCO0lBQ2pHLE9BQU87UUFDTCxLQUFLOzs7OztRQUNMLGVBQWU7WUFDYixPQUFPLDJCQUEyQixDQUFJLEtBQUssRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUN2RixVQUFVLENBQUMsc0JBQXNCLENBQ2xDLENBQUM7UUFDSixDQUFDOzs7OztRQUNELE1BQU0sQ0FBQyxJQUFnQixJQUFJLE9BQU8sbUJBQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsRUFBaUIsQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQ25GLEdBQUcsQ0FBQyxJQUFPLElBQUksT0FBTyxtQkFBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBaUIsQ0FBQyxDQUFDLENBQUM7Ozs7UUFDN0QsTUFBTSxLQUFLLE9BQU8sbUJBQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBaUIsQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQ3hELFlBQVk7O2tCQUNKLGdCQUFnQixHQUFHLDJCQUEyQixDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ25HLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUMxQixVQUFVLENBQUMsc0JBQXNCLEVBQ2pDLEdBQUc7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQzFFLENBQUM7UUFDSixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZU9iamVjdCwgRGF0YWJhc2VRdWVyeSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgY3JlYXRlT2JqZWN0U25hcHNob3RDaGFuZ2VzIH0gZnJvbSAnLi9zbmFwc2hvdC1jaGFuZ2VzJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2UgfSBmcm9tICcuLi9kYXRhYmFzZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RSZWZlcmVuY2U8VD0gYW55PihxdWVyeTogRGF0YWJhc2VRdWVyeSwgYWZEYXRhYmFzZTogQW5ndWxhckZpcmVEYXRhYmFzZSk6IEFuZ3VsYXJGaXJlT2JqZWN0PFQ+IHtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeSxcbiAgICBzbmFwc2hvdENoYW5nZXM8VD4oKSB7XG4gICAgICByZXR1cm4gY3JlYXRlT2JqZWN0U25hcHNob3RDaGFuZ2VzPFQ+KHF1ZXJ5LCBhZkRhdGFiYXNlLnNjaGVkdWxlcnMub3V0c2lkZUFuZ3VsYXIpKCkucGlwZShcbiAgICAgICAgYWZEYXRhYmFzZS5rZWVwVW5zdGFibGVVbnRpbEZpcnN0XG4gICAgICApO1xuICAgIH0sXG4gICAgdXBkYXRlKGRhdGE6IFBhcnRpYWw8VD4pIHsgcmV0dXJuIHF1ZXJ5LnJlZi51cGRhdGUoZGF0YSBhcyBhbnkpIGFzIFByb21pc2U8dm9pZD47IH0sXG4gICAgc2V0KGRhdGE6IFQpIHsgcmV0dXJuIHF1ZXJ5LnJlZi5zZXQoZGF0YSkgYXMgUHJvbWlzZTx2b2lkPjsgfSxcbiAgICByZW1vdmUoKSB7IHJldHVybiBxdWVyeS5yZWYucmVtb3ZlKCkgYXMgUHJvbWlzZTx2b2lkPjsgfSxcbiAgICB2YWx1ZUNoYW5nZXM8VD4oKSB7XG4gICAgICBjb25zdCBzbmFwc2hvdENoYW5nZXMkID0gY3JlYXRlT2JqZWN0U25hcHNob3RDaGFuZ2VzKHF1ZXJ5LCBhZkRhdGFiYXNlLnNjaGVkdWxlcnMub3V0c2lkZUFuZ3VsYXIpKCk7XG4gICAgICByZXR1cm4gc25hcHNob3RDaGFuZ2VzJC5waXBlKFxuICAgICAgICBhZkRhdGFiYXNlLmtlZXBVbnN0YWJsZVVudGlsRmlyc3QsXG4gICAgICAgIG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQuZXhpc3RzKCkgPyBhY3Rpb24ucGF5bG9hZC52YWwoKSBhcyBUIDogbnVsbClcbiAgICAgICk7XG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==