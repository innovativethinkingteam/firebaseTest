/**
 * @fileoverview added by tsickle
 * Generated from: observable/fromRef.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { asyncScheduler, Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
/**
 * @record
 * @template T
 */
function SnapshotPrevKey() { }
if (false) {
    /** @type {?} */
    SnapshotPrevKey.prototype.snapshot;
    /** @type {?} */
    SnapshotPrevKey.prototype.prevKey;
}
/**
 * Create an observable from a Database Reference or Database Query.
 * @template T
 * @param {?} ref Database Reference
 * @param {?} event Listen event type ('value', 'added', 'changed', 'removed', 'moved')
 * @param {?=} listenType 'on' or 'once'
 * @param {?=} scheduler - Rxjs scheduler
 * @return {?}
 */
export function fromRef(ref, event, listenType = 'on', scheduler = asyncScheduler) {
    return new Observable((/**
     * @param {?} subscriber
     * @return {?}
     */
    subscriber => {
        /** @type {?} */
        let fn = null;
        fn = ref[listenType](event, (/**
         * @param {?} snapshot
         * @param {?} prevKey
         * @return {?}
         */
        (snapshot, prevKey) => {
            scheduler.schedule((/**
             * @return {?}
             */
            () => {
                subscriber.next({ snapshot, prevKey });
            }));
            if (listenType === 'once') {
                scheduler.schedule((/**
                 * @return {?}
                 */
                () => subscriber.complete()));
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        err => {
            scheduler.schedule((/**
             * @return {?}
             */
            () => subscriber.error(err)));
        }));
        if (listenType === 'on') {
            return {
                /**
                 * @return {?}
                 */
                unsubscribe() {
                    if (fn != null) {
                        ref.off(event, fn);
                    }
                }
            };
        }
        else {
            return {
                /**
                 * @return {?}
                 */
                unsubscribe() {
                }
            };
        }
    })).pipe(map((/**
     * @param {?} payload
     * @return {?}
     */
    payload => {
        const { snapshot, prevKey } = payload;
        /** @type {?} */
        let key = null;
        if (snapshot.exists()) {
            key = snapshot.key;
        }
        return { type: event, payload: snapshot, prevKey, key };
    })), share());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbVJlZi5qcyIsInNvdXJjZVJvb3QiOiIvd29ya3NwYWNlL3NyYy9kYXRhYmFzZS8iLCJzb3VyY2VzIjpbIm9ic2VydmFibGUvZnJvbVJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFpQixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUU1Qyw4QkFHQzs7O0lBRkMsbUNBQThCOztJQUM5QixrQ0FBbUM7Ozs7Ozs7Ozs7O0FBVXJDLE1BQU0sVUFBVSxPQUFPLENBQUksR0FBa0IsRUFDbEIsS0FBa0IsRUFDbEIsVUFBVSxHQUFHLElBQUksRUFDakIsWUFBMkIsY0FBYztJQUVsRSxPQUFPLElBQUksVUFBVTs7OztJQUFxQixVQUFVLENBQUMsRUFBRTs7WUFDakQsRUFBRSxHQUFlLElBQUk7UUFDekIsRUFBRSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLOzs7OztRQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ2hELFNBQVMsQ0FBQyxRQUFROzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ3RCLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN6QyxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtnQkFDekIsU0FBUyxDQUFDLFFBQVE7OztnQkFBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FBQzthQUNqRDtRQUNILENBQUM7Ozs7UUFBRSxHQUFHLENBQUMsRUFBRTtZQUNQLFNBQVMsQ0FBQyxRQUFROzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDdkIsT0FBTzs7OztnQkFDTCxXQUFXO29CQUNULElBQUksRUFBRSxJQUFJLElBQUksRUFBRTt3QkFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztxQkFDcEI7Z0JBQ0gsQ0FBQzthQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTzs7OztnQkFDTCxXQUFXO2dCQUNYLENBQUM7YUFDRixDQUFDO1NBQ0g7SUFDSCxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztJQUFDLE9BQU8sQ0FBQyxFQUFFO2NBQ04sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTzs7WUFDakMsR0FBRyxHQUFrQixJQUFJO1FBQzdCLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3JCLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDMUQsQ0FBQyxFQUFDLEVBQ0YsS0FBSyxFQUFFLENBQ1IsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmd1bGFyRmlyZUFjdGlvbiwgRGF0YWJhc2VRdWVyeSwgRGF0YWJhc2VTbmFwc2hvdCwgTGlzdGVuRXZlbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGFzeW5jU2NoZWR1bGVyLCBPYnNlcnZhYmxlLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbnRlcmZhY2UgU25hcHNob3RQcmV2S2V5PFQ+IHtcbiAgc25hcHNob3Q6IERhdGFiYXNlU25hcHNob3Q8VD47XG4gIHByZXZLZXk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIG9ic2VydmFibGUgZnJvbSBhIERhdGFiYXNlIFJlZmVyZW5jZSBvciBEYXRhYmFzZSBRdWVyeS5cbiAqIEBwYXJhbSByZWYgRGF0YWJhc2UgUmVmZXJlbmNlXG4gKiBAcGFyYW0gZXZlbnQgTGlzdGVuIGV2ZW50IHR5cGUgKCd2YWx1ZScsICdhZGRlZCcsICdjaGFuZ2VkJywgJ3JlbW92ZWQnLCAnbW92ZWQnKVxuICogQHBhcmFtIGxpc3RlblR5cGUgJ29uJyBvciAnb25jZSdcbiAqIEBwYXJhbSBzY2hlZHVsZXIgLSBSeGpzIHNjaGVkdWxlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJlZjxUPihyZWY6IERhdGFiYXNlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogTGlzdGVuRXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5UeXBlID0gJ29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSA9IGFzeW5jU2NoZWR1bGVyXG4pOiBPYnNlcnZhYmxlPEFuZ3VsYXJGaXJlQWN0aW9uPERhdGFiYXNlU25hcHNob3Q8VD4+PiB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxTbmFwc2hvdFByZXZLZXk8VD4+KHN1YnNjcmliZXIgPT4ge1xuICAgIGxldCBmbjogYW55IHwgbnVsbCA9IG51bGw7XG4gICAgZm4gPSByZWZbbGlzdGVuVHlwZV0oZXZlbnQsIChzbmFwc2hvdCwgcHJldktleSkgPT4ge1xuICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KHsgc25hcHNob3QsIHByZXZLZXkgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChsaXN0ZW5UeXBlID09PSAnb25jZScpIHtcbiAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHN1YnNjcmliZXIuY29tcGxldGUoKSk7XG4gICAgICB9XG4gICAgfSwgZXJyID0+IHtcbiAgICAgIHNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiBzdWJzY3JpYmVyLmVycm9yKGVycikpO1xuICAgIH0pO1xuXG4gICAgaWYgKGxpc3RlblR5cGUgPT09ICdvbicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgIGlmIChmbiAhPSBudWxsKSB7XG4gICAgICAgICAgICByZWYub2ZmKGV2ZW50LCBmbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0pLnBpcGUoXG4gICAgbWFwKHBheWxvYWQgPT4ge1xuICAgICAgY29uc3QgeyBzbmFwc2hvdCwgcHJldktleSB9ID0gcGF5bG9hZDtcbiAgICAgIGxldCBrZXk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgaWYgKHNuYXBzaG90LmV4aXN0cygpKSB7XG4gICAgICAgIGtleSA9IHNuYXBzaG90LmtleTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHR5cGU6IGV2ZW50LCBwYXlsb2FkOiBzbmFwc2hvdCwgcHJldktleSwga2V5IH07XG4gICAgfSksXG4gICAgc2hhcmUoKVxuICApO1xufVxuIl19