/**
 * @fileoverview added by tsickle
 * Generated from: list/create-reference.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { snapshotChanges } from './snapshot-changes';
import { stateChanges } from './state-changes';
import { auditTrail } from './audit-trail';
import { createDataOperationMethod } from './data-operation';
import { createRemoveMethod } from './remove';
import { map } from 'rxjs/operators';
/**
 * @template T
 * @param {?} query
 * @param {?} afDatabase
 * @return {?}
 */
export function createListReference(query, afDatabase) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXJlZmVyZW5jZS5qcyIsInNvdXJjZVJvb3QiOiIvd29ya3NwYWNlL3NyYy9kYXRhYmFzZS8iLCJzb3VyY2VzIjpbImxpc3QvY3JlYXRlLXJlZmVyZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBRXJDLE1BQU0sVUFBVSxtQkFBbUIsQ0FBUyxLQUFvQixFQUFFLFVBQStCOztVQUN6Rix1QkFBdUIsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQWM7O1VBQzlELFNBQVMsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDO0lBQ25FLE9BQU87UUFDTCxLQUFLO1FBQ0wsTUFBTSxFQUFFLHlCQUF5QixDQUFhLFNBQVMsRUFBRSxRQUFRLENBQUM7UUFDbEUsR0FBRyxFQUFFLHlCQUF5QixDQUFJLFNBQVMsRUFBRSxLQUFLLENBQUM7UUFDbkQsSUFBSTs7OztRQUFFLENBQUMsSUFBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7Ozs7O1FBQ3JDLGVBQWUsQ0FBQyxNQUFxQjtZQUNuQyxPQUFPLGVBQWUsQ0FBSSxLQUFLLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzVHLENBQUM7Ozs7O1FBQ0QsWUFBWSxDQUFDLE1BQXFCO1lBQ2hDLE9BQU8sWUFBWSxDQUFJLEtBQUssRUFBRSxNQUFNLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDekcsQ0FBQzs7Ozs7UUFDRCxVQUFVLENBQUMsTUFBcUI7WUFDOUIsT0FBTyxVQUFVLENBQUksS0FBSyxFQUFFLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN2RyxDQUFDOzs7OztRQUNELFlBQVksQ0FBQyxNQUFxQjs7a0JBQzFCLGdCQUFnQixHQUFHLGVBQWUsQ0FBSSxLQUFLLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixDQUFDO1lBQ25GLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUMxQixHQUFHOzs7O1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBSyxFQUFDLEVBQUMsRUFDdEQsVUFBVSxDQUFDLHNCQUFzQixDQUNsQyxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5ndWxhckZpcmVMaXN0LCBDaGlsZEV2ZW50LCBEYXRhYmFzZVF1ZXJ5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBzbmFwc2hvdENoYW5nZXMgfSBmcm9tICcuL3NuYXBzaG90LWNoYW5nZXMnO1xuaW1wb3J0IHsgc3RhdGVDaGFuZ2VzIH0gZnJvbSAnLi9zdGF0ZS1jaGFuZ2VzJztcbmltcG9ydCB7IGF1ZGl0VHJhaWwgfSBmcm9tICcuL2F1ZGl0LXRyYWlsJztcbmltcG9ydCB7IGNyZWF0ZURhdGFPcGVyYXRpb25NZXRob2QgfSBmcm9tICcuL2RhdGEtb3BlcmF0aW9uJztcbmltcG9ydCB7IGNyZWF0ZVJlbW92ZU1ldGhvZCB9IGZyb20gJy4vcmVtb3ZlJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2UgfSBmcm9tICcuLi9kYXRhYmFzZSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0UmVmZXJlbmNlPFQ9IGFueT4ocXVlcnk6IERhdGFiYXNlUXVlcnksIGFmRGF0YWJhc2U6IEFuZ3VsYXJGaXJlRGF0YWJhc2UpOiBBbmd1bGFyRmlyZUxpc3Q8VD4ge1xuICBjb25zdCBvdXRzaWRlQW5ndWxhclNjaGVkdWxlciA9IGFmRGF0YWJhc2Uuc2NoZWR1bGVycy5vdXRzaWRlQW5ndWxhcjtcbiAgY29uc3QgcmVmSW5ab25lID0gYWZEYXRhYmFzZS5zY2hlZHVsZXJzLm5nWm9uZS5ydW4oKCkgPT4gcXVlcnkucmVmKTtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeSxcbiAgICB1cGRhdGU6IGNyZWF0ZURhdGFPcGVyYXRpb25NZXRob2Q8UGFydGlhbDxUPj4ocmVmSW5ab25lLCAndXBkYXRlJyksXG4gICAgc2V0OiBjcmVhdGVEYXRhT3BlcmF0aW9uTWV0aG9kPFQ+KHJlZkluWm9uZSwgJ3NldCcpLFxuICAgIHB1c2g6IChkYXRhOiBUKSA9PiByZWZJblpvbmUucHVzaChkYXRhKSxcbiAgICByZW1vdmU6IGNyZWF0ZVJlbW92ZU1ldGhvZChyZWZJblpvbmUpLFxuICAgIHNuYXBzaG90Q2hhbmdlcyhldmVudHM/OiBDaGlsZEV2ZW50W10pIHtcbiAgICAgIHJldHVybiBzbmFwc2hvdENoYW5nZXM8VD4ocXVlcnksIGV2ZW50cywgb3V0c2lkZUFuZ3VsYXJTY2hlZHVsZXIpLnBpcGUoYWZEYXRhYmFzZS5rZWVwVW5zdGFibGVVbnRpbEZpcnN0KTtcbiAgICB9LFxuICAgIHN0YXRlQ2hhbmdlcyhldmVudHM/OiBDaGlsZEV2ZW50W10pIHtcbiAgICAgIHJldHVybiBzdGF0ZUNoYW5nZXM8VD4ocXVlcnksIGV2ZW50cywgb3V0c2lkZUFuZ3VsYXJTY2hlZHVsZXIpLnBpcGUoYWZEYXRhYmFzZS5rZWVwVW5zdGFibGVVbnRpbEZpcnN0KTtcbiAgICB9LFxuICAgIGF1ZGl0VHJhaWwoZXZlbnRzPzogQ2hpbGRFdmVudFtdKSB7XG4gICAgICByZXR1cm4gYXVkaXRUcmFpbDxUPihxdWVyeSwgZXZlbnRzLCBvdXRzaWRlQW5ndWxhclNjaGVkdWxlcikucGlwZShhZkRhdGFiYXNlLmtlZXBVbnN0YWJsZVVudGlsRmlyc3QpO1xuICAgIH0sXG4gICAgdmFsdWVDaGFuZ2VzKGV2ZW50cz86IENoaWxkRXZlbnRbXSkge1xuICAgICAgY29uc3Qgc25hcHNob3RDaGFuZ2VzJCA9IHNuYXBzaG90Q2hhbmdlczxUPihxdWVyeSwgZXZlbnRzLCBvdXRzaWRlQW5ndWxhclNjaGVkdWxlcik7XG4gICAgICByZXR1cm4gc25hcHNob3RDaGFuZ2VzJC5waXBlKFxuICAgICAgICBtYXAoYWN0aW9ucyA9PiBhY3Rpb25zLm1hcChhID0+IGEucGF5bG9hZC52YWwoKSBhcyBUKSksXG4gICAgICAgIGFmRGF0YWJhc2Uua2VlcFVuc3RhYmxlVW50aWxGaXJzdFxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG4iXX0=