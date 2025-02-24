/**
 * @fileoverview added by tsickle
 * Generated from: collection/changes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { fromCollectionRef } from '../observable/fromRef';
import { map, scan } from 'rxjs/operators';
/**
 * Return a stream of document changes on a query. These results are not in sort order but in
 * order of occurence.
 * @template T
 * @param {?} query
 * @param {?=} scheduler
 * @return {?}
 */
export function docChanges(query, scheduler) {
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
export function sortedChanges(query, events, scheduler) {
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
export function combineChanges(current, changes, events) {
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
export function combineChange(combined, change) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlcy5qcyIsInNvdXJjZVJvb3QiOiIvd29ya3NwYWNlL3NyYy9maXJlc3RvcmUvIiwic291cmNlcyI6WyJjb2xsZWN0aW9uL2NoYW5nZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7QUFRM0MsTUFBTSxVQUFVLFVBQVUsQ0FBSSxLQUFZLEVBQUUsU0FBeUI7SUFDbkUsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDO1NBQ3ZDLElBQUksQ0FDSCxHQUFHOzs7O0lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDWCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtTQUN4QixHQUFHOzs7O0lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLG1CQUFBLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUEyQixDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUM7QUFDaEcsQ0FBQzs7Ozs7Ozs7O0FBS0QsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsS0FBWSxFQUNaLE1BQTRCLEVBQzVCLFNBQXlCO0lBQ3pCLE9BQU8saUJBQWlCLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQztTQUN2QyxJQUFJLENBQ0gsR0FBRzs7OztJQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBQyxFQUM1QyxJQUFJOzs7OztJQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUUsRUFBRSxDQUFDLEVBQ3hFLEdBQUc7Ozs7SUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLG1CQUFBLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUEyQixDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUM7QUFDbkcsQ0FBQzs7Ozs7Ozs7OztBQU1ELE1BQU0sVUFBVSxjQUFjLENBQUksT0FBNEIsRUFBRSxPQUE0QixFQUFFLE1BQTRCO0lBQ3hILE9BQU8sQ0FBQyxPQUFPOzs7O0lBQUMsTUFBTSxDQUFDLEVBQUU7UUFDdkIsNkJBQTZCO1FBQzdCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDcEMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNILE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7Ozs7Ozs7O0FBS0QsTUFBTSxVQUFVLGFBQWEsQ0FBSSxRQUE2QixFQUFFLE1BQXlCO0lBQ3ZGLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLE9BQU87WUFDVixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxRixnREFBZ0Q7YUFDakQ7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUM3QztZQUNELE1BQU07UUFDUixLQUFLLFVBQVU7WUFDYixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbEcsbURBQW1EO2dCQUNuRCxpQ0FBaUM7Z0JBQ2pDLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsUUFBUSxFQUFFO29CQUN2QyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQzdDO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQzdDO2FBQ0Y7WUFDRCxNQUFNO1FBQ1IsS0FBSyxTQUFTO1lBQ1osSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUYsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsTUFBTTtLQUNUO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21Db2xsZWN0aW9uUmVmIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9mcm9tUmVmJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFNjaGVkdWxlckxpa2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9jdW1lbnRDaGFuZ2UsIERvY3VtZW50Q2hhbmdlQWN0aW9uLCBEb2N1bWVudENoYW5nZVR5cGUsIFF1ZXJ5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogUmV0dXJuIGEgc3RyZWFtIG9mIGRvY3VtZW50IGNoYW5nZXMgb24gYSBxdWVyeS4gVGhlc2UgcmVzdWx0cyBhcmUgbm90IGluIHNvcnQgb3JkZXIgYnV0IGluXG4gKiBvcmRlciBvZiBvY2N1cmVuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb2NDaGFuZ2VzPFQ+KHF1ZXJ5OiBRdWVyeSwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8RG9jdW1lbnRDaGFuZ2VBY3Rpb248VD5bXT4ge1xuICByZXR1cm4gZnJvbUNvbGxlY3Rpb25SZWYocXVlcnksIHNjaGVkdWxlcilcbiAgICAucGlwZShcbiAgICAgIG1hcChhY3Rpb24gPT5cbiAgICAgICAgYWN0aW9uLnBheWxvYWQuZG9jQ2hhbmdlcygpXG4gICAgICAgICAgLm1hcChjaGFuZ2UgPT4gKHsgdHlwZTogY2hhbmdlLnR5cGUsIHBheWxvYWQ6IGNoYW5nZSB9IGFzIERvY3VtZW50Q2hhbmdlQWN0aW9uPFQ+KSkpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBzdHJlYW0gb2YgZG9jdW1lbnQgY2hhbmdlcyBvbiBhIHF1ZXJ5LiBUaGVzZSByZXN1bHRzIGFyZSBpbiBzb3J0IG9yZGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydGVkQ2hhbmdlczxUPihcbiAgcXVlcnk6IFF1ZXJ5LFxuICBldmVudHM6IERvY3VtZW50Q2hhbmdlVHlwZVtdLFxuICBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTxEb2N1bWVudENoYW5nZUFjdGlvbjxUPltdPiB7XG4gIHJldHVybiBmcm9tQ29sbGVjdGlvblJlZihxdWVyeSwgc2NoZWR1bGVyKVxuICAgIC5waXBlKFxuICAgICAgbWFwKGNoYW5nZXMgPT4gY2hhbmdlcy5wYXlsb2FkLmRvY0NoYW5nZXMoKSksXG4gICAgICBzY2FuKChjdXJyZW50LCBjaGFuZ2VzKSA9PiBjb21iaW5lQ2hhbmdlcyhjdXJyZW50LCBjaGFuZ2VzLCBldmVudHMpLCBbXSksXG4gICAgICBtYXAoY2hhbmdlcyA9PiBjaGFuZ2VzLm1hcChjID0+ICh7IHR5cGU6IGMudHlwZSwgcGF5bG9hZDogYyB9IGFzIERvY3VtZW50Q2hhbmdlQWN0aW9uPFQ+KSkpKTtcbn1cblxuLyoqXG4gKiBDb21iaW5lcyB0aGUgdG90YWwgcmVzdWx0IHNldCBmcm9tIHRoZSBjdXJyZW50IHNldCBvZiBjaGFuZ2VzIGZyb20gYW4gaW5jb21pbmcgc2V0XG4gKiBvZiBjaGFuZ2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUNoYW5nZXM8VD4oY3VycmVudDogRG9jdW1lbnRDaGFuZ2U8VD5bXSwgY2hhbmdlczogRG9jdW1lbnRDaGFuZ2U8VD5bXSwgZXZlbnRzOiBEb2N1bWVudENoYW5nZVR5cGVbXSkge1xuICBjaGFuZ2VzLmZvckVhY2goY2hhbmdlID0+IHtcbiAgICAvLyBza2lwIHVud2FudGVkIGNoYW5nZSB0eXBlc1xuICAgIGlmIChldmVudHMuaW5kZXhPZihjaGFuZ2UudHlwZSkgPiAtMSkge1xuICAgICAgY3VycmVudCA9IGNvbWJpbmVDaGFuZ2UoY3VycmVudCwgY2hhbmdlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY3VycmVudDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHNvcnRlZCBhcnJheSBmcm9tIGEgbmV3IGNoYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVDaGFuZ2U8VD4oY29tYmluZWQ6IERvY3VtZW50Q2hhbmdlPFQ+W10sIGNoYW5nZTogRG9jdW1lbnRDaGFuZ2U8VD4pOiBEb2N1bWVudENoYW5nZTxUPltdIHtcbiAgc3dpdGNoIChjaGFuZ2UudHlwZSkge1xuICAgIGNhc2UgJ2FkZGVkJzpcbiAgICAgIGlmIChjb21iaW5lZFtjaGFuZ2UubmV3SW5kZXhdICYmIGNvbWJpbmVkW2NoYW5nZS5uZXdJbmRleF0uZG9jLnJlZi5pc0VxdWFsKGNoYW5nZS5kb2MucmVmKSkge1xuICAgICAgICAvLyBOb3Qgc3VyZSB3aHkgdGhlIGR1cGxpY2F0ZXMgYXJlIGdldHRpbmcgZmlyZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbWJpbmVkLnNwbGljZShjaGFuZ2UubmV3SW5kZXgsIDAsIGNoYW5nZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtb2RpZmllZCc6XG4gICAgICBpZiAoY29tYmluZWRbY2hhbmdlLm9sZEluZGV4XSA9PSBudWxsIHx8IGNvbWJpbmVkW2NoYW5nZS5vbGRJbmRleF0uZG9jLnJlZi5pc0VxdWFsKGNoYW5nZS5kb2MucmVmKSkge1xuICAgICAgICAvLyBXaGVuIGFuIGl0ZW0gY2hhbmdlcyBwb3NpdGlvbiB3ZSBmaXJzdCByZW1vdmUgaXRcbiAgICAgICAgLy8gYW5kIHRoZW4gYWRkIGl0J3MgbmV3IHBvc2l0aW9uXG4gICAgICAgIGlmIChjaGFuZ2Uub2xkSW5kZXggIT09IGNoYW5nZS5uZXdJbmRleCkge1xuICAgICAgICAgIGNvbWJpbmVkLnNwbGljZShjaGFuZ2Uub2xkSW5kZXgsIDEpO1xuICAgICAgICAgIGNvbWJpbmVkLnNwbGljZShjaGFuZ2UubmV3SW5kZXgsIDAsIGNoYW5nZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tYmluZWQuc3BsaWNlKGNoYW5nZS5uZXdJbmRleCwgMSwgY2hhbmdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVtb3ZlZCc6XG4gICAgICBpZiAoY29tYmluZWRbY2hhbmdlLm9sZEluZGV4XSAmJiBjb21iaW5lZFtjaGFuZ2Uub2xkSW5kZXhdLmRvYy5yZWYuaXNFcXVhbChjaGFuZ2UuZG9jLnJlZikpIHtcbiAgICAgICAgY29tYmluZWQuc3BsaWNlKGNoYW5nZS5vbGRJbmRleCwgMSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gY29tYmluZWQ7XG59XG4iXX0=