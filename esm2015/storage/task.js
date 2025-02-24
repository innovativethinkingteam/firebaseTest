/**
 * @fileoverview added by tsickle
 * Generated from: task.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { fromTask } from './observable/fromTask';
import { map } from 'rxjs/operators';
/**
 * @record
 */
export function AngularFireUploadTask() { }
if (false) {
    /** @type {?} */
    AngularFireUploadTask.prototype.task;
    /**
     * @return {?}
     */
    AngularFireUploadTask.prototype.snapshotChanges = function () { };
    /**
     * @return {?}
     */
    AngularFireUploadTask.prototype.percentageChanges = function () { };
    /**
     * @return {?}
     */
    AngularFireUploadTask.prototype.pause = function () { };
    /**
     * @return {?}
     */
    AngularFireUploadTask.prototype.cancel = function () { };
    /**
     * @return {?}
     */
    AngularFireUploadTask.prototype.resume = function () { };
    /**
     * @param {?=} onFulfilled
     * @param {?=} onRejected
     * @return {?}
     */
    AngularFireUploadTask.prototype.then = function (onFulfilled, onRejected) { };
    /**
     * @param {?} onRejected
     * @return {?}
     */
    AngularFireUploadTask.prototype.catch = function (onRejected) { };
}
/**
 * Create an AngularFireUploadTask from a regular UploadTask from the Storage SDK.
 * This method creates an observable of the upload and returns on object that provides
 * multiple methods for controlling and monitoring the file upload.
 * @param {?} task
 * @return {?}
 */
export function createUploadTask(task) {
    /** @type {?} */
    const inner$ = fromTask(task);
    return {
        task,
        then: task.then.bind(task),
        catch: task.catch.bind(task),
        pause: task.pause.bind(task),
        cancel: task.cancel.bind(task),
        resume: task.resume.bind(task),
        snapshotChanges: (/**
         * @return {?}
         */
        () => inner$),
        percentageChanges: (/**
         * @return {?}
         */
        () => inner$.pipe(map((/**
         * @param {?} s
         * @return {?}
         */
        s => s.bytesTransferred / s.totalBytes * 100))))
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIvd29ya3NwYWNlL3NyYy9zdG9yYWdlLyIsInNvdXJjZXMiOlsidGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFckMsMkNBWUM7OztJQVhDLHFDQUFpQjs7OztJQUNqQixrRUFBOEQ7Ozs7SUFDOUQsb0VBQW9EOzs7O0lBQ3BELHdEQUFpQjs7OztJQUNqQix5REFBa0I7Ozs7SUFDbEIseURBQWtCOzs7Ozs7SUFDbEIsOEVBR2dCOzs7OztJQUNoQixrRUFBbUQ7Ozs7Ozs7OztBQVFyRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBZ0I7O1VBQ3pDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzdCLE9BQU87UUFDTCxJQUFJO1FBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlCLGVBQWU7OztRQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQTtRQUM3QixpQkFBaUI7OztRQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2xDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBQyxDQUNsRCxDQUFBO0tBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVcGxvYWRUYXNrLCBVcGxvYWRUYXNrU25hcHNob3QgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgZnJvbVRhc2sgfSBmcm9tICcuL29ic2VydmFibGUvZnJvbVRhc2snO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuZ3VsYXJGaXJlVXBsb2FkVGFzayB7XG4gIHRhc2s6IFVwbG9hZFRhc2s7XG4gIHNuYXBzaG90Q2hhbmdlcygpOiBPYnNlcnZhYmxlPFVwbG9hZFRhc2tTbmFwc2hvdCB8IHVuZGVmaW5lZD47XG4gIHBlcmNlbnRhZ2VDaGFuZ2VzKCk6IE9ic2VydmFibGU8bnVtYmVyIHwgdW5kZWZpbmVkPjtcbiAgcGF1c2UoKTogYm9vbGVhbjtcbiAgY2FuY2VsKCk6IGJvb2xlYW47XG4gIHJlc3VtZSgpOiBib29sZWFuO1xuICB0aGVuKFxuICAgIG9uRnVsZmlsbGVkPzogKChhOiBVcGxvYWRUYXNrU25hcHNob3QpID0+IGFueSkgfCBudWxsLFxuICAgIG9uUmVqZWN0ZWQ/OiAoKGE6IEVycm9yKSA9PiBhbnkpIHwgbnVsbFxuICApOiBQcm9taXNlPGFueT47XG4gIGNhdGNoKG9uUmVqZWN0ZWQ6IChhOiBFcnJvcikgPT4gYW55KTogUHJvbWlzZTxhbnk+O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBBbmd1bGFyRmlyZVVwbG9hZFRhc2sgZnJvbSBhIHJlZ3VsYXIgVXBsb2FkVGFzayBmcm9tIHRoZSBTdG9yYWdlIFNESy5cbiAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYW4gb2JzZXJ2YWJsZSBvZiB0aGUgdXBsb2FkIGFuZCByZXR1cm5zIG9uIG9iamVjdCB0aGF0IHByb3ZpZGVzXG4gKiBtdWx0aXBsZSBtZXRob2RzIGZvciBjb250cm9sbGluZyBhbmQgbW9uaXRvcmluZyB0aGUgZmlsZSB1cGxvYWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcGxvYWRUYXNrKHRhc2s6IFVwbG9hZFRhc2spOiBBbmd1bGFyRmlyZVVwbG9hZFRhc2sge1xuICBjb25zdCBpbm5lciQgPSBmcm9tVGFzayh0YXNrKTtcbiAgcmV0dXJuIHtcbiAgICB0YXNrLFxuICAgIHRoZW46IHRhc2sudGhlbi5iaW5kKHRhc2spLFxuICAgIGNhdGNoOiB0YXNrLmNhdGNoLmJpbmQodGFzayksXG4gICAgcGF1c2U6IHRhc2sucGF1c2UuYmluZCh0YXNrKSxcbiAgICBjYW5jZWw6IHRhc2suY2FuY2VsLmJpbmQodGFzayksXG4gICAgcmVzdW1lOiB0YXNrLnJlc3VtZS5iaW5kKHRhc2spLFxuICAgIHNuYXBzaG90Q2hhbmdlczogKCkgPT4gaW5uZXIkLFxuICAgIHBlcmNlbnRhZ2VDaGFuZ2VzOiAoKSA9PiBpbm5lciQucGlwZShcbiAgICAgIG1hcChzID0+IHMuYnl0ZXNUcmFuc2ZlcnJlZCAvIHMudG90YWxCeXRlcyAqIDEwMClcbiAgICApXG4gIH07XG59XG4iXX0=