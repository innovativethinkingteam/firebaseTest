/**
 * @fileoverview added by tsickle
 * Generated from: observable/fromRef.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { asyncScheduler, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * @template T, R
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function _fromRef(ref, scheduler = asyncScheduler) {
    return new Observable((/**
     * @param {?} subscriber
     * @return {?}
     */
    subscriber => {
        /** @type {?} */
        let unsubscribe;
        if (scheduler != null) {
            scheduler.schedule((/**
             * @return {?}
             */
            () => {
                unsubscribe = ref.onSnapshot(subscriber);
            }));
        }
        else {
            unsubscribe = ref.onSnapshot(subscriber);
        }
        return (/**
         * @return {?}
         */
        () => {
            if (unsubscribe != null) {
                unsubscribe();
            }
        });
    }));
}
/**
 * @template R
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
export function fromRef(ref, scheduler) {
    return _fromRef(ref, scheduler);
}
/**
 * @template T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
export function fromDocRef(ref, scheduler) {
    return fromRef(ref, scheduler)
        .pipe(map((/**
     * @param {?} payload
     * @return {?}
     */
    payload => ({ payload, type: 'value' }))));
}
/**
 * @template T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
export function fromCollectionRef(ref, scheduler) {
    return fromRef(ref, scheduler).pipe(map((/**
     * @param {?} payload
     * @return {?}
     */
    payload => ({ payload, type: 'query' }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbVJlZi5qcyIsInNvdXJjZVJvb3QiOiIvd29ya3NwYWNlL3NyYy9maXJlc3RvcmUvIiwic291cmNlcyI6WyJvYnNlcnZhYmxlL2Zyb21SZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxNQUFNLENBQUM7QUFFakUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBRXJDLFNBQVMsUUFBUSxDQUFPLEdBQWlCLEVBQUUsWUFBMkIsY0FBYztJQUNsRixPQUFPLElBQUksVUFBVTs7OztJQUFDLFVBQVUsQ0FBQyxFQUFFOztZQUM3QixXQUFXO1FBQ2YsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3JCLFNBQVMsQ0FBQyxRQUFROzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ3RCLFdBQVcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNDLENBQUMsRUFBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFdBQVcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzFDO1FBRUQ7OztRQUFPLEdBQUcsRUFBRTtZQUNWLElBQUksV0FBVyxJQUFJLElBQUksRUFBRTtnQkFDdkIsV0FBVyxFQUFFLENBQUM7YUFDZjtRQUNILENBQUMsRUFBQztJQUNKLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUksR0FBOEIsRUFBRSxTQUF5QjtJQUNsRixPQUFPLFFBQVEsQ0FBZ0IsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pELENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFJLEdBQXNCLEVBQUUsU0FBeUI7SUFDN0UsT0FBTyxPQUFPLENBQXNCLEdBQUcsRUFBRSxTQUFTLENBQUM7U0FDaEQsSUFBSSxDQUNILEdBQUc7Ozs7SUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FDN0MsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUksR0FBVSxFQUFFLFNBQXlCO0lBQ3hFLE9BQU8sT0FBTyxDQUFtQixHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7SUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQ3RHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3luY1NjaGVkdWxlciwgT2JzZXJ2YWJsZSwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uLCBEb2N1bWVudFJlZmVyZW5jZSwgRG9jdW1lbnRTbmFwc2hvdCwgUXVlcnksIFF1ZXJ5U25hcHNob3QsIFJlZmVyZW5jZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5mdW5jdGlvbiBfZnJvbVJlZjxULCBSPihyZWY6IFJlZmVyZW5jZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlID0gYXN5bmNTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFI+IHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZXIgPT4ge1xuICAgIGxldCB1bnN1YnNjcmliZTtcbiAgICBpZiAoc2NoZWR1bGVyICE9IG51bGwpIHtcbiAgICAgIHNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIHVuc3Vic2NyaWJlID0gcmVmLm9uU25hcHNob3Qoc3Vic2NyaWJlcik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5zdWJzY3JpYmUgPSByZWYub25TbmFwc2hvdChzdWJzY3JpYmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHVuc3Vic2NyaWJlICE9IG51bGwpIHtcbiAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21SZWY8Uj4ocmVmOiBEb2N1bWVudFJlZmVyZW5jZSB8IFF1ZXJ5LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBfZnJvbVJlZjx0eXBlb2YgcmVmLCBSPihyZWYsIHNjaGVkdWxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRG9jUmVmPFQ+KHJlZjogRG9jdW1lbnRSZWZlcmVuY2UsIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPEFjdGlvbjxEb2N1bWVudFNuYXBzaG90PFQ+Pj4ge1xuICByZXR1cm4gZnJvbVJlZjxEb2N1bWVudFNuYXBzaG90PFQ+PihyZWYsIHNjaGVkdWxlcilcbiAgICAucGlwZShcbiAgICAgIG1hcChwYXlsb2FkID0+ICh7IHBheWxvYWQsIHR5cGU6ICd2YWx1ZScgfSkpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Db2xsZWN0aW9uUmVmPFQ+KHJlZjogUXVlcnksIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPEFjdGlvbjxRdWVyeVNuYXBzaG90PFQ+Pj4ge1xuICByZXR1cm4gZnJvbVJlZjxRdWVyeVNuYXBzaG90PFQ+PihyZWYsIHNjaGVkdWxlcikucGlwZShtYXAocGF5bG9hZCA9PiAoeyBwYXlsb2FkLCB0eXBlOiAncXVlcnknIH0pKSk7XG59XG4iXX0=