/**
 * @fileoverview added by tsickle
 * Generated from: list/changes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { fromRef } from '../observable/fromRef';
import { merge, of } from 'rxjs';
import { isNil } from '../utils';
import { distinctUntilChanged, scan, switchMap } from 'rxjs/operators';
/**
 * @template T
 * @param {?} ref
 * @param {?} events
 * @param {?=} scheduler
 * @return {?}
 */
export function listChanges(ref, events, scheduler) {
    return fromRef(ref, 'value', 'once', scheduler).pipe(switchMap((/**
     * @param {?} snapshotAction
     * @return {?}
     */
    snapshotAction => {
        /** @type {?} */
        const childEvent$ = [of(snapshotAction)];
        events.forEach((/**
         * @param {?} event
         * @return {?}
         */
        event => childEvent$.push(fromRef(ref, event, 'on', scheduler))));
        return merge(...childEvent$).pipe(scan(buildView, []));
    })), distinctUntilChanged());
}
/**
 * @template T
 * @param {?} changes
 * @param {?} key
 * @return {?}
 */
function positionFor(changes, key) {
    /** @type {?} */
    const len = changes.length;
    for (let i = 0; i < len; i++) {
        if (changes[i].payload.key === key) {
            return i;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} changes
 * @param {?=} prevKey
 * @return {?}
 */
function positionAfter(changes, prevKey) {
    if (isNil(prevKey)) {
        return 0;
    }
    else {
        /** @type {?} */
        const i = positionFor(changes, prevKey);
        if (i === -1) {
            return changes.length;
        }
        else {
            return i + 1;
        }
    }
}
/**
 * @param {?} current
 * @param {?} action
 * @return {?}
 */
function buildView(current, action) {
    const { payload, prevKey, key } = action;
    /** @type {?} */
    const currentKeyPosition = positionFor(current, key);
    /** @type {?} */
    const afterPreviousKeyPosition = positionAfter(current, prevKey);
    switch (action.type) {
        case 'value':
            if (action.payload && action.payload.exists()) {
                /** @type {?} */
                let prevKey = null;
                action.payload.forEach((/**
                 * @param {?} payload
                 * @return {?}
                 */
                payload => {
                    /** @type {?} */
                    const action = { payload, type: 'value', prevKey, key: payload.key };
                    prevKey = payload.key;
                    current = [...current, action];
                    return false;
                }));
            }
            return current;
        case 'child_added':
            if (currentKeyPosition > -1) {
                // check that the previouskey is what we expect, else reorder
                /** @type {?} */
                const previous = current[currentKeyPosition - 1];
                if ((previous && previous.key || null) !== prevKey) {
                    current = current.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.payload.key !== payload.key));
                    current.splice(afterPreviousKeyPosition, 0, action);
                }
            }
            else if (prevKey == null) {
                return [action, ...current];
            }
            else {
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, action);
            }
            return current;
        case 'child_removed':
            return current.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.payload.key !== payload.key));
        case 'child_changed':
            return current.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.payload.key === key ? action : x));
        case 'child_moved':
            if (currentKeyPosition > -1) {
                /** @type {?} */
                const data = current.splice(currentKeyPosition, 1)[0];
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, data);
                return current;
            }
            return current;
        // default will also remove null results
        default:
            return current;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlcy5qcyIsInNvdXJjZVJvb3QiOiIvd29ya3NwYWNlL3NyYy9kYXRhYmFzZS8iLCJzb3VyY2VzIjpbImxpc3QvY2hhbmdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBaUIsTUFBTSxNQUFNLENBQUM7QUFHNUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVqQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQUV2RSxNQUFNLFVBQVUsV0FBVyxDQUFVLEdBQWtCLEVBQUUsTUFBb0IsRUFBRSxTQUF5QjtJQUN0RyxPQUFPLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ2xELFNBQVM7Ozs7SUFBQyxjQUFjLENBQUMsRUFBRTs7Y0FDbkIsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDaEYsT0FBTyxLQUFLLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUMsRUFBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7QUFDSixDQUFDOzs7Ozs7O0FBRUQsU0FBUyxXQUFXLENBQUksT0FBNEIsRUFBRSxHQUFHOztVQUNqRCxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU07SUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUNsQyxPQUFPLENBQUMsQ0FBQztTQUNWO0tBQ0Y7SUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ1osQ0FBQzs7Ozs7OztBQUVELFNBQVMsYUFBYSxDQUFJLE9BQTRCLEVBQUUsT0FBZ0I7SUFDdEUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDbEIsT0FBTyxDQUFDLENBQUM7S0FDVjtTQUFNOztjQUNDLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNaLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUN2QjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Q7S0FDRjtBQUNILENBQUM7Ozs7OztBQUVELFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNO1VBQzFCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNOztVQUNsQyxrQkFBa0IsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQzs7VUFDOUMsd0JBQXdCLEdBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDaEUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssT0FBTztZQUNWLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFOztvQkFDekMsT0FBTyxHQUFHLElBQUk7Z0JBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztnQkFBQyxPQUFPLENBQUMsRUFBRTs7MEJBQ3pCLE1BQU0sR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRTtvQkFDcEUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQ3RCLE9BQU8sR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUMvQixPQUFPLEtBQUssQ0FBQztnQkFDZixDQUFDLEVBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsS0FBSyxhQUFhO1lBQ2hCLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEVBQUU7OztzQkFFckIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxPQUFPLEVBQUU7b0JBQ2xELE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTTs7OztvQkFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxHQUFHLEVBQUMsQ0FBQztvQkFDN0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ3JEO2FBQ0Y7aUJBQU0sSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUMxQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0wsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDckQ7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixLQUFLLGVBQWU7WUFDbEIsT0FBTyxPQUFPLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLEdBQUcsRUFBQyxDQUFDO1FBQzVELEtBQUssZUFBZTtZQUNsQixPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDOUQsS0FBSyxhQUFhO1lBQ2hCLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O3NCQUNyQixJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNsRCxPQUFPLE9BQU8sQ0FBQzthQUNoQjtZQUNELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLHdDQUF3QztRQUN4QztZQUNFLE9BQU8sT0FBTyxDQUFDO0tBQ2xCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21SZWYgfSBmcm9tICcuLi9vYnNlcnZhYmxlL2Zyb21SZWYnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIG9mLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENoaWxkRXZlbnQsIERhdGFiYXNlUXVlcnksIFNuYXBzaG90QWN0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBpc05pbCB9IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHNjYW4sIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RDaGFuZ2VzPFQgPSBhbnk+KHJlZjogRGF0YWJhc2VRdWVyeSwgZXZlbnRzOiBDaGlsZEV2ZW50W10sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFNuYXBzaG90QWN0aW9uPFQ+W10+IHtcbiAgcmV0dXJuIGZyb21SZWYocmVmLCAndmFsdWUnLCAnb25jZScsIHNjaGVkdWxlcikucGlwZShcbiAgICBzd2l0Y2hNYXAoc25hcHNob3RBY3Rpb24gPT4ge1xuICAgICAgY29uc3QgY2hpbGRFdmVudCQgPSBbb2Yoc25hcHNob3RBY3Rpb24pXTtcbiAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGNoaWxkRXZlbnQkLnB1c2goZnJvbVJlZihyZWYsIGV2ZW50LCAnb24nLCBzY2hlZHVsZXIpKSk7XG4gICAgICByZXR1cm4gbWVyZ2UoLi4uY2hpbGRFdmVudCQpLnBpcGUoc2NhbihidWlsZFZpZXcsIFtdKSk7XG4gICAgfSksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICApO1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZvcjxUPihjaGFuZ2VzOiBTbmFwc2hvdEFjdGlvbjxUPltdLCBrZXkpIHtcbiAgY29uc3QgbGVuID0gY2hhbmdlcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoY2hhbmdlc1tpXS5wYXlsb2FkLmtleSA9PT0ga2V5KSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkFmdGVyPFQ+KGNoYW5nZXM6IFNuYXBzaG90QWN0aW9uPFQ+W10sIHByZXZLZXk/OiBzdHJpbmcpIHtcbiAgaWYgKGlzTmlsKHByZXZLZXkpKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaSA9IHBvc2l0aW9uRm9yKGNoYW5nZXMsIHByZXZLZXkpO1xuICAgIGlmIChpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGNoYW5nZXMubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaSArIDE7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVmlldyhjdXJyZW50LCBhY3Rpb24pIHtcbiAgY29uc3QgeyBwYXlsb2FkLCBwcmV2S2V5LCBrZXkgfSA9IGFjdGlvbjtcbiAgY29uc3QgY3VycmVudEtleVBvc2l0aW9uID0gcG9zaXRpb25Gb3IoY3VycmVudCwga2V5KTtcbiAgY29uc3QgYWZ0ZXJQcmV2aW91c0tleVBvc2l0aW9uID0gcG9zaXRpb25BZnRlcihjdXJyZW50LCBwcmV2S2V5KTtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5leGlzdHMoKSkge1xuICAgICAgICBsZXQgcHJldktleSA9IG51bGw7XG4gICAgICAgIGFjdGlvbi5wYXlsb2FkLmZvckVhY2gocGF5bG9hZCA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uID0geyBwYXlsb2FkLCB0eXBlOiAndmFsdWUnLCBwcmV2S2V5LCBrZXk6IHBheWxvYWQua2V5IH07XG4gICAgICAgICAgcHJldktleSA9IHBheWxvYWQua2V5O1xuICAgICAgICAgIGN1cnJlbnQgPSBbLi4uY3VycmVudCwgYWN0aW9uXTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgY2FzZSAnY2hpbGRfYWRkZWQnOlxuICAgICAgaWYgKGN1cnJlbnRLZXlQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIHByZXZpb3Vza2V5IGlzIHdoYXQgd2UgZXhwZWN0LCBlbHNlIHJlb3JkZXJcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSBjdXJyZW50W2N1cnJlbnRLZXlQb3NpdGlvbiAtIDFdO1xuICAgICAgICBpZiAoKHByZXZpb3VzICYmIHByZXZpb3VzLmtleSB8fCBudWxsKSAhPT0gcHJldktleSkge1xuICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmZpbHRlcih4ID0+IHgucGF5bG9hZC5rZXkgIT09IHBheWxvYWQua2V5KTtcbiAgICAgICAgICBjdXJyZW50LnNwbGljZShhZnRlclByZXZpb3VzS2V5UG9zaXRpb24sIDAsIGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocHJldktleSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbYWN0aW9uLCAuLi5jdXJyZW50XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnNsaWNlKCk7XG4gICAgICAgIGN1cnJlbnQuc3BsaWNlKGFmdGVyUHJldmlvdXNLZXlQb3NpdGlvbiwgMCwgYWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIGNhc2UgJ2NoaWxkX3JlbW92ZWQnOlxuICAgICAgcmV0dXJuIGN1cnJlbnQuZmlsdGVyKHggPT4geC5wYXlsb2FkLmtleSAhPT0gcGF5bG9hZC5rZXkpO1xuICAgIGNhc2UgJ2NoaWxkX2NoYW5nZWQnOlxuICAgICAgcmV0dXJuIGN1cnJlbnQubWFwKHggPT4geC5wYXlsb2FkLmtleSA9PT0ga2V5ID8gYWN0aW9uIDogeCk7XG4gICAgY2FzZSAnY2hpbGRfbW92ZWQnOlxuICAgICAgaWYgKGN1cnJlbnRLZXlQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjdXJyZW50LnNwbGljZShjdXJyZW50S2V5UG9zaXRpb24sIDEpWzBdO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5zbGljZSgpO1xuICAgICAgICBjdXJyZW50LnNwbGljZShhZnRlclByZXZpb3VzS2V5UG9zaXRpb24sIDAsIGRhdGEpO1xuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIC8vIGRlZmF1bHQgd2lsbCBhbHNvIHJlbW92ZSBudWxsIHJlc3VsdHNcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cbn1cbiJdfQ==