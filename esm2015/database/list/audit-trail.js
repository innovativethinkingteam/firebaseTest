/**
 * @fileoverview added by tsickle
 * Generated from: list/audit-trail.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { stateChanges } from './state-changes';
import { fromRef } from '../observable/fromRef';
import { map, scan, skipWhile, withLatestFrom } from 'rxjs/operators';
/**
 * @template T
 * @param {?} query
 * @param {?=} events
 * @param {?=} scheduler
 * @return {?}
 */
export function auditTrail(query, events, scheduler) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXQtdHJhaWwuanMiLCJzb3VyY2VSb290IjoiL3dvcmtzcGFjZS9zcmMvZGF0YWJhc2UvIiwic291cmNlcyI6WyJsaXN0L2F1ZGl0LXRyYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBRXRFLE1BQU0sVUFBVSxVQUFVLENBQUksS0FBb0IsRUFBRSxNQUFxQixFQUFFLFNBQXlCOztVQUM1RixXQUFXLEdBQUcsWUFBWSxDQUFJLEtBQUssRUFBRSxNQUFNLENBQUM7U0FDL0MsSUFBSSxDQUNILElBQUk7Ozs7O0lBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLE1BQU0sQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUNwRDtJQUNILE9BQU8sYUFBYSxDQUFJLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDekQsQ0FBQzs7OztBQUVELDZCQUdDOzs7SUFGQyw4QkFBc0M7O0lBQ3RDLHVDQUFtQjs7Ozs7Ozs7QUFHckIsU0FBUyxVQUFVLENBQUksS0FBb0IsRUFBRSxTQUF5QjtJQUNwRSx3REFBd0Q7SUFDeEQsd0RBQXdEO0lBQ3hELDZEQUE2RDtJQUM3RCxPQUFPLE9BQU8sQ0FBSSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUM7U0FDakQsSUFBSSxDQUNILEdBQUc7Ozs7SUFBQyxJQUFJLENBQUMsRUFBRTs7O1lBRUwsYUFBYTtRQUNqQixtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsYUFBYSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFBQyxPQUFPLEtBQUssQ0FBQztRQUMxQyxDQUFDLEVBQUMsQ0FBQztRQUNILGtEQUFrRDtRQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDO0lBQ2pDLENBQUMsRUFBQyxDQUNILENBQUM7QUFDSixDQUFDOzs7Ozs7OztBQUVELFNBQVMsYUFBYSxDQUFJLEtBQW9CLEVBQUUsT0FBd0MsRUFBRSxTQUF5Qjs7VUFDM0csT0FBTyxHQUFHLFVBQVUsQ0FBSSxLQUFLLEVBQUUsU0FBUyxDQUFDO0lBQy9DLE9BQU8sT0FBTztTQUNYLElBQUksQ0FDSCxjQUFjLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLCtEQUErRDtJQUMvRCxrRUFBa0U7SUFDbEUsR0FBRzs7OztJQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRTs7O2NBRWxCLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYTs7O2NBRXBDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQztRQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsQ0FBQztJQUNoRCxDQUFDLEVBQUM7SUFDRiw2REFBNkQ7SUFDN0QsaUVBQWlFO0lBQ2pFLHdDQUF3QztJQUN4QyxTQUFTOzs7O0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7SUFDckUsc0RBQXNEO0lBQ3RELG1DQUFtQztJQUNuQyxHQUFHOzs7O0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQzFCLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5ndWxhckZpcmVBY3Rpb24sIENoaWxkRXZlbnQsIERhdGFiYXNlUXVlcnksIERhdGFTbmFwc2hvdCwgU25hcHNob3RBY3Rpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHN0YXRlQ2hhbmdlcyB9IGZyb20gJy4vc3RhdGUtY2hhbmdlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmcm9tUmVmIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9mcm9tUmVmJztcblxuaW1wb3J0IHsgbWFwLCBzY2FuLCBza2lwV2hpbGUsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXVkaXRUcmFpbDxUPihxdWVyeTogRGF0YWJhc2VRdWVyeSwgZXZlbnRzPzogQ2hpbGRFdmVudFtdLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTxTbmFwc2hvdEFjdGlvbjxUPltdPiB7XG4gIGNvbnN0IGF1ZGl0VHJhaWwkID0gc3RhdGVDaGFuZ2VzPFQ+KHF1ZXJ5LCBldmVudHMpXG4gICAgLnBpcGUoXG4gICAgICBzY2FuKChjdXJyZW50LCBhY3Rpb24pID0+IFsuLi5jdXJyZW50LCBhY3Rpb25dLCBbXSlcbiAgICApO1xuICByZXR1cm4gd2FpdEZvckxvYWRlZDxUPihxdWVyeSwgYXVkaXRUcmFpbCQsIHNjaGVkdWxlcik7XG59XG5cbmludGVyZmFjZSBMb2FkZWRNZXRhZGF0YSB7XG4gIGRhdGE6IEFuZ3VsYXJGaXJlQWN0aW9uPERhdGFTbmFwc2hvdD47XG4gIGxhc3RLZXlUb0xvYWQ6IGFueTtcbn1cblxuZnVuY3Rpb24gbG9hZGVkRGF0YTxUPihxdWVyeTogRGF0YWJhc2VRdWVyeSwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8TG9hZGVkTWV0YWRhdGE+IHtcbiAgLy8gQ3JlYXRlIGFuIG9ic2VydmFibGUgb2YgbG9hZGVkIHZhbHVlcyB0byByZXRyaWV2ZSB0aGVcbiAgLy8ga25vd24gZGF0YXNldC4gVGhpcyB3aWxsIGFsbG93IHVzIHRvIGtub3cgd2hhdCBrZXkgdG9cbiAgLy8gZW1pdCB0aGUgXCJ3aG9sZVwiIGFycmF5IGF0IHdoZW4gbGlzdGVuaW5nIGZvciBjaGlsZCBldmVudHMuXG4gIHJldHVybiBmcm9tUmVmPFQ+KHF1ZXJ5LCAndmFsdWUnLCAnb24nLCBzY2hlZHVsZXIpXG4gIC5waXBlKFxuICAgIG1hcChkYXRhID0+IHtcbiAgICAgIC8vIFN0b3JlIHRoZSBsYXN0IGtleSBpbiB0aGUgZGF0YSBzZXRcbiAgICAgIGxldCBsYXN0S2V5VG9Mb2FkO1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIGxvYWRlZCBkYXRhc2V0IHRvIGZpbmQgdGhlIGxhc3Qga2V5XG4gICAgICBkYXRhLnBheWxvYWQuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGxhc3RLZXlUb0xvYWQgPSBjaGlsZC5rZXk7IHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgLy8gcmV0dXJuIGRhdGEgc2V0IGFuZCB0aGUgY3VycmVudCBsYXN0IGtleSBsb2FkZWRcbiAgICAgIHJldHVybiB7IGRhdGEsIGxhc3RLZXlUb0xvYWQgfTtcbiAgICB9KVxuICApO1xufVxuXG5mdW5jdGlvbiB3YWl0Rm9yTG9hZGVkPFQ+KHF1ZXJ5OiBEYXRhYmFzZVF1ZXJ5LCBhY3Rpb24kOiBPYnNlcnZhYmxlPFNuYXBzaG90QWN0aW9uPFQ+W10+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKSB7XG4gIGNvbnN0IGxvYWRlZCQgPSBsb2FkZWREYXRhPFQ+KHF1ZXJ5LCBzY2hlZHVsZXIpO1xuICByZXR1cm4gbG9hZGVkJFxuICAgIC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20oYWN0aW9uJCksXG4gICAgICAvLyBHZXQgdGhlIGxhdGVzdCB2YWx1ZXMgZnJvbSB0aGUgXCJsb2FkZWRcIiBhbmQgXCJjaGlsZFwiIGRhdGFzZXRzXG4gICAgICAvLyBXZSBjYW4gdXNlIGJvdGggZGF0YXNldHMgdG8gZm9ybSBhbiBhcnJheSBvZiB0aGUgbGF0ZXN0IHZhbHVlcy5cbiAgICAgIG1hcCgoW2xvYWRlZCwgYWN0aW9uc10pID0+IHtcbiAgICAgICAgLy8gU3RvcmUgdGhlIGxhc3Qga2V5IGluIHRoZSBkYXRhIHNldFxuICAgICAgICBjb25zdCBsYXN0S2V5VG9Mb2FkID0gbG9hZGVkLmxhc3RLZXlUb0xvYWQ7XG4gICAgICAgIC8vIFN0b3JlIGFsbCBjaGlsZCBrZXlzIGxvYWRlZCBhdCB0aGlzIHBvaW50XG4gICAgICAgIGNvbnN0IGxvYWRlZEtleXMgPSBhY3Rpb25zLm1hcChzbmFwID0+IHNuYXAua2V5KTtcbiAgICAgICAgcmV0dXJuIHsgYWN0aW9ucywgbGFzdEtleVRvTG9hZCwgbG9hZGVkS2V5cyB9O1xuICAgICAgfSksXG4gICAgICAvLyBUaGlzIGlzIHRoZSBtYWdpY2FsIHBhcnQsIG9ubHkgZW1pdCB3aGVuIHRoZSBsYXN0IGxvYWQga2V5XG4gICAgICAvLyBpbiB0aGUgZGF0YXNldCBoYXMgYmVlbiBsb2FkZWQgYnkgYSBjaGlsZCBldmVudC4gQXQgdGhpcyBwb2ludFxuICAgICAgLy8gd2UgY2FuIGFzc3VtZSB0aGUgZGF0YXNldCBpcyBcIndob2xlXCIuXG4gICAgICBza2lwV2hpbGUobWV0YSA9PiBtZXRhLmxvYWRlZEtleXMuaW5kZXhPZihtZXRhLmxhc3RLZXlUb0xvYWQpID09PSAtMSksXG4gICAgICAvLyBQbHVjayBvZmYgdGhlIG1ldGEgZGF0YSBiZWNhdXNlIHRoZSB1c2VyIG9ubHkgY2FyZXNcbiAgICAgIC8vIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgc25hcHNob3RzXG4gICAgICBtYXAobWV0YSA9PiBtZXRhLmFjdGlvbnMpXG4gICAgKTtcbn1cbiJdfQ==