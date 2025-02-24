/**
 * @fileoverview added by tsickle
 * Generated from: list/data-operation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { checkOperationCases } from '../utils';
/**
 * @template T
 * @param {?} ref
 * @param {?} operation
 * @return {?}
 */
export function createDataOperationMethod(ref, operation) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1vcGVyYXRpb24uanMiLCJzb3VyY2VSb290IjoiL3dvcmtzcGFjZS9zcmMvZGF0YWJhc2UvIiwic291cmNlcyI6WyJsaXN0L2RhdGEtb3BlcmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7O0FBRS9DLE1BQU0sVUFBVSx5QkFBeUIsQ0FBSSxHQUFzQixFQUFFLFNBQWlCO0lBQ3BGOzs7Ozs7SUFBTyxTQUFTLGFBQWEsQ0FBSSxJQUF1QixFQUFFLEtBQVE7UUFDaEUsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsVUFBVTs7O1lBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBQSxJQUFJLEVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzdELFlBQVk7OztZQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsbUJBQUEsSUFBSSxFQUFxQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDakUsWUFBWTs7O1lBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxtQkFBQSxJQUFJLEVBQXVCLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDeEUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFiYXNlUmVmZXJlbmNlLCBEYXRhYmFzZVNuYXBzaG90LCBGaXJlYmFzZU9wZXJhdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgY2hlY2tPcGVyYXRpb25DYXNlcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGFPcGVyYXRpb25NZXRob2Q8VD4ocmVmOiBEYXRhYmFzZVJlZmVyZW5jZSwgb3BlcmF0aW9uOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRhdGFPcGVyYXRpb248VD4oaXRlbTogRmlyZWJhc2VPcGVyYXRpb24sIHZhbHVlOiBUKSB7XG4gICAgcmV0dXJuIGNoZWNrT3BlcmF0aW9uQ2FzZXMoaXRlbSwge1xuICAgICAgc3RyaW5nQ2FzZTogKCkgPT4gcmVmLmNoaWxkKGl0ZW0gYXMgc3RyaW5nKVtvcGVyYXRpb25dKHZhbHVlKSxcbiAgICAgIGZpcmViYXNlQ2FzZTogKCkgPT4gKGl0ZW0gYXMgRGF0YWJhc2VSZWZlcmVuY2UpW29wZXJhdGlvbl0odmFsdWUpLFxuICAgICAgc25hcHNob3RDYXNlOiAoKSA9PiAoaXRlbSBhcyBEYXRhYmFzZVNuYXBzaG90PFQ+KS5yZWZbb3BlcmF0aW9uXSh2YWx1ZSlcbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==