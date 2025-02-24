/**
 * @fileoverview added by tsickle
 * Generated from: list/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isNil } from '../utils';
/**
 * @param {?=} events
 * @return {?}
 */
export function validateEventsArray(events) {
    if (isNil(events) || events.length === 0) {
        events = ['child_added', 'child_removed', 'child_changed', 'child_moved'];
    }
    return events;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiL3dvcmtzcGFjZS9zcmMvZGF0YWJhc2UvIiwic291cmNlcyI6WyJsaXN0L3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFFakMsTUFBTSxVQUFVLG1CQUFtQixDQUFDLE1BQWM7SUFDaEQsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDeEMsTUFBTSxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDM0U7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOaWwgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUV2ZW50c0FycmF5KGV2ZW50cz86IGFueVtdKSB7XG4gIGlmIChpc05pbChldmVudHMpIHx8IGV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBldmVudHMgPSBbJ2NoaWxkX2FkZGVkJywgJ2NoaWxkX3JlbW92ZWQnLCAnY2hpbGRfY2hhbmdlZCcsICdjaGlsZF9tb3ZlZCddO1xuICB9XG4gIHJldHVybiBldmVudHM7XG59XG4iXX0=