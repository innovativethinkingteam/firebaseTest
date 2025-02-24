/**
 * @fileoverview added by tsickle
 * Generated from: ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createUploadTask } from './task';
import { from, of } from 'rxjs';
import { observeOn, switchMap } from 'rxjs/operators';
/**
 * @record
 */
export function AngularFireStorageReference() { }
if (false) {
    /**
     * @return {?}
     */
    AngularFireStorageReference.prototype.getDownloadURL = function () { };
    /**
     * @return {?}
     */
    AngularFireStorageReference.prototype.getMetadata = function () { };
    /**
     * @return {?}
     */
    AngularFireStorageReference.prototype.delete = function () { };
    /**
     * @param {?} path
     * @return {?}
     */
    AngularFireStorageReference.prototype.child = function (path) { };
    /**
     * @param {?} meta
     * @return {?}
     */
    AngularFireStorageReference.prototype.updateMetadata = function (meta) { };
    /**
     * @param {?} data
     * @param {?=} metadata
     * @return {?}
     */
    AngularFireStorageReference.prototype.put = function (data, metadata) { };
    /**
     * @param {?} data
     * @param {?=} format
     * @param {?=} metadata
     * @return {?}
     */
    AngularFireStorageReference.prototype.putString = function (data, format, metadata) { };
    /**
     * @return {?}
     */
    AngularFireStorageReference.prototype.listAll = function () { };
}
/**
 * Create an AngularFire wrapped Storage Reference. This object
 * creates observable methods from promise based methods.
 * @param {?} ref
 * @param {?} schedulers
 * @param {?} keepUnstableUntilFirst
 * @return {?}
 */
export function createStorageRef(ref, schedulers, keepUnstableUntilFirst) {
    return {
        getDownloadURL: (/**
         * @return {?}
         */
        () => of(undefined).pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @return {?}
         */
        () => ref.getDownloadURL())), keepUnstableUntilFirst)),
        getMetadata: (/**
         * @return {?}
         */
        () => of(undefined).pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @return {?}
         */
        () => ref.getMetadata())), keepUnstableUntilFirst)),
        delete: (/**
         * @return {?}
         */
        () => from(ref.delete())),
        child: (/**
         * @param {?} path
         * @return {?}
         */
        (path) => createStorageRef(ref.child(path), schedulers, keepUnstableUntilFirst)),
        updateMetadata: (/**
         * @param {?} meta
         * @return {?}
         */
        (meta) => from(ref.updateMetadata(meta))),
        put: (/**
         * @param {?} data
         * @param {?=} metadata
         * @return {?}
         */
        (data, metadata) => {
            /** @type {?} */
            const task = ref.put(data, metadata);
            return createUploadTask(task);
        }),
        putString: (/**
         * @param {?} data
         * @param {?=} format
         * @param {?=} metadata
         * @return {?}
         */
        (data, format, metadata) => {
            /** @type {?} */
            const task = ref.putString(data, format, metadata);
            return createUploadTask(task);
        }),
        listAll: (/**
         * @return {?}
         */
        () => from(ref.listAll()))
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmLmpzIiwic291cmNlUm9vdCI6Ii93b3Jrc3BhY2Uvc3JjL3N0b3JhZ2UvIiwic291cmNlcyI6WyJyZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLGdCQUFnQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxJQUFJLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFdEQsaURBU0M7Ozs7O0lBUkMsdUVBQWtDOzs7O0lBQ2xDLG9FQUErQjs7OztJQUMvQiwrREFBMEI7Ozs7O0lBQzFCLGtFQUF5Qjs7Ozs7SUFDekIsMkVBQXdEOzs7Ozs7SUFDeEQsMEVBQTZFOzs7Ozs7O0lBQzdFLHdGQUFtSDs7OztJQUNuSCxnRUFBa0M7Ozs7Ozs7Ozs7QUFPcEMsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixHQUFjLEVBQ2QsVUFBa0MsRUFDbEMsc0JBQWlFO0lBRWpFLE9BQU87UUFDTCxjQUFjOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUN0QyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUNwQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUMsRUFDckMsc0JBQXNCLENBQ3ZCLENBQUE7UUFDRCxXQUFXOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUNuQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUNwQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUMsRUFDbEMsc0JBQXNCLENBQ3ZCLENBQUE7UUFDRCxNQUFNOzs7UUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDaEMsS0FBSzs7OztRQUFFLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFBO1FBQzlGLGNBQWM7Ozs7UUFBRSxDQUFDLElBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDMUUsR0FBRzs7Ozs7UUFBRSxDQUFDLElBQVMsRUFBRSxRQUF5QixFQUFFLEVBQUU7O2tCQUN0QyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO1lBQ3BDLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFBO1FBQ0QsU0FBUzs7Ozs7O1FBQUUsQ0FBQyxJQUFZLEVBQUUsTUFBcUIsRUFBRSxRQUF5QixFQUFFLEVBQUU7O2tCQUN0RSxJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUNsRCxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQTtRQUNELE9BQU87OztRQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtLQUNuQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RSZXN1bHQsIFJlZmVyZW5jZSwgU2V0dGFibGVNZXRhZGF0YSwgU3RyaW5nRm9ybWF0LCBVcGxvYWRNZXRhZGF0YSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZVVwbG9hZFRhc2ssIGNyZWF0ZVVwbG9hZFRhc2sgfSBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IMm1QW5ndWxhckZpcmVTY2hlZHVsZXJzIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZSc7XG5pbXBvcnQgeyBvYnNlcnZlT24sIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbmd1bGFyRmlyZVN0b3JhZ2VSZWZlcmVuY2Uge1xuICBnZXREb3dubG9hZFVSTCgpOiBPYnNlcnZhYmxlPGFueT47XG4gIGdldE1ldGFkYXRhKCk6IE9ic2VydmFibGU8YW55PjtcbiAgZGVsZXRlKCk6IE9ic2VydmFibGU8YW55PjtcbiAgY2hpbGQocGF0aDogc3RyaW5nKTogYW55O1xuICB1cGRhdGVNZXRhZGF0YShtZXRhOiBTZXR0YWJsZU1ldGFkYXRhKTogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdXQoZGF0YTogYW55LCBtZXRhZGF0YT86IFVwbG9hZE1ldGFkYXRhIHwgdW5kZWZpbmVkKTogQW5ndWxhckZpcmVVcGxvYWRUYXNrO1xuICBwdXRTdHJpbmcoZGF0YTogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcgfCB1bmRlZmluZWQsIG1ldGFkYXRhPzogVXBsb2FkTWV0YWRhdGEgfCB1bmRlZmluZWQpOiBBbmd1bGFyRmlyZVVwbG9hZFRhc2s7XG4gIGxpc3RBbGwoKTogT2JzZXJ2YWJsZTxMaXN0UmVzdWx0Pjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gQW5ndWxhckZpcmUgd3JhcHBlZCBTdG9yYWdlIFJlZmVyZW5jZS4gVGhpcyBvYmplY3RcbiAqIGNyZWF0ZXMgb2JzZXJ2YWJsZSBtZXRob2RzIGZyb20gcHJvbWlzZSBiYXNlZCBtZXRob2RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmFnZVJlZihcbiAgcmVmOiBSZWZlcmVuY2UsXG4gIHNjaGVkdWxlcnM6IMm1QW5ndWxhckZpcmVTY2hlZHVsZXJzLFxuICBrZWVwVW5zdGFibGVVbnRpbEZpcnN0OiA8VD4ob2JzJDogT2JzZXJ2YWJsZTxUPikgPT4gT2JzZXJ2YWJsZTxUPlxuKTogQW5ndWxhckZpcmVTdG9yYWdlUmVmZXJlbmNlIHtcbiAgcmV0dXJuIHtcbiAgICBnZXREb3dubG9hZFVSTDogKCkgPT4gb2YodW5kZWZpbmVkKS5waXBlKFxuICAgICAgb2JzZXJ2ZU9uKHNjaGVkdWxlcnMub3V0c2lkZUFuZ3VsYXIpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHJlZi5nZXREb3dubG9hZFVSTCgpKSxcbiAgICAgIGtlZXBVbnN0YWJsZVVudGlsRmlyc3RcbiAgICApLFxuICAgIGdldE1ldGFkYXRhOiAoKSA9PiBvZih1bmRlZmluZWQpLnBpcGUoXG4gICAgICBvYnNlcnZlT24oc2NoZWR1bGVycy5vdXRzaWRlQW5ndWxhciksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gcmVmLmdldE1ldGFkYXRhKCkpLFxuICAgICAga2VlcFVuc3RhYmxlVW50aWxGaXJzdFxuICAgICksXG4gICAgZGVsZXRlOiAoKSA9PiBmcm9tKHJlZi5kZWxldGUoKSksXG4gICAgY2hpbGQ6IChwYXRoOiBzdHJpbmcpID0+IGNyZWF0ZVN0b3JhZ2VSZWYocmVmLmNoaWxkKHBhdGgpLCBzY2hlZHVsZXJzLCBrZWVwVW5zdGFibGVVbnRpbEZpcnN0KSxcbiAgICB1cGRhdGVNZXRhZGF0YTogKG1ldGE6IFNldHRhYmxlTWV0YWRhdGEpID0+IGZyb20ocmVmLnVwZGF0ZU1ldGFkYXRhKG1ldGEpKSxcbiAgICBwdXQ6IChkYXRhOiBhbnksIG1ldGFkYXRhPzogVXBsb2FkTWV0YWRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHRhc2sgPSByZWYucHV0KGRhdGEsIG1ldGFkYXRhKTtcbiAgICAgIHJldHVybiBjcmVhdGVVcGxvYWRUYXNrKHRhc2spO1xuICAgIH0sXG4gICAgcHV0U3RyaW5nOiAoZGF0YTogc3RyaW5nLCBmb3JtYXQ/OiBTdHJpbmdGb3JtYXQsIG1ldGFkYXRhPzogVXBsb2FkTWV0YWRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHRhc2sgPSByZWYucHV0U3RyaW5nKGRhdGEsIGZvcm1hdCwgbWV0YWRhdGEpO1xuICAgICAgcmV0dXJuIGNyZWF0ZVVwbG9hZFRhc2sodGFzayk7XG4gICAgfSxcbiAgICBsaXN0QWxsOiAoKSA9PiBmcm9tKHJlZi5saXN0QWxsKCkpXG4gIH07XG59XG4iXX0=