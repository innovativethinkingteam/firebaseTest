/**
 * @fileoverview added by tsickle
 * Generated from: list/remove.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { checkOperationCases } from '../utils';
// TODO(davideast): Find out why TS thinks this returns firebase.Primise
// instead of Promise.
/**
 * @template T
 * @param {?} ref
 * @return {?}
 */
export function createRemoveMethod(ref) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLmpzIiwic291cmNlUm9vdCI6Ii93b3Jrc3BhY2Uvc3JjL2RhdGFiYXNlLyIsInNvdXJjZXMiOlsibGlzdC9yZW1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7O0FBSS9DLE1BQU0sVUFBVSxrQkFBa0IsQ0FBSSxHQUFzQjtJQUMxRDs7OztJQUFPLFNBQVMsTUFBTSxDQUFDLElBQXdCO1FBQzdDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUFFO1FBQ25DLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxFQUFFO1lBQy9CLFVBQVU7OztZQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQUEsSUFBSSxFQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUNwRCxZQUFZOzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBcUIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ3hELFlBQVk7OztZQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsbUJBQUEsSUFBSSxFQUF1QixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFBO1NBQy9ELENBQUMsQ0FBQztJQUNMLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhYmFzZVJlZmVyZW5jZSwgRGF0YWJhc2VTbmFwc2hvdCwgRmlyZWJhc2VPcGVyYXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGNoZWNrT3BlcmF0aW9uQ2FzZXMgfSBmcm9tICcuLi91dGlscyc7XG5cbi8vIFRPRE8oZGF2aWRlYXN0KTogRmluZCBvdXQgd2h5IFRTIHRoaW5rcyB0aGlzIHJldHVybnMgZmlyZWJhc2UuUHJpbWlzZVxuLy8gaW5zdGVhZCBvZiBQcm9taXNlLlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlbW92ZU1ldGhvZDxUPihyZWY6IERhdGFiYXNlUmVmZXJlbmNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiByZW1vdmUoaXRlbT86IEZpcmViYXNlT3BlcmF0aW9uKTogYW55IHtcbiAgICBpZiAoIWl0ZW0pIHsgcmV0dXJuIHJlZi5yZW1vdmUoKTsgfVxuICAgIHJldHVybiBjaGVja09wZXJhdGlvbkNhc2VzKGl0ZW0sIHtcbiAgICAgIHN0cmluZ0Nhc2U6ICgpID0+IHJlZi5jaGlsZChpdGVtIGFzIHN0cmluZykucmVtb3ZlKCksXG4gICAgICBmaXJlYmFzZUNhc2U6ICgpID0+IChpdGVtIGFzIERhdGFiYXNlUmVmZXJlbmNlKS5yZW1vdmUoKSxcbiAgICAgIHNuYXBzaG90Q2FzZTogKCkgPT4gKGl0ZW0gYXMgRGF0YWJhc2VTbmFwc2hvdDxUPikucmVmLnJlbW92ZSgpXG4gICAgfSk7XG4gIH07XG59XG4iXX0=