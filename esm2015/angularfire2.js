/**
 * @fileoverview added by tsickle
 * Generated from: angularfire2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { asyncScheduler, queueScheduler } from 'rxjs';
import { observeOn, subscribeOn, tap } from 'rxjs/operators';
/**
 * @return {?}
 */
function noop() {
}
/**
 * Schedules tasks so that they are invoked inside the Zone that is passed in the constructor.
 */
// tslint:disable-next-line:class-name
export class ɵZoneScheduler {
    /**
     * @param {?} zone
     * @param {?=} delegate
     */
    constructor(zone, delegate = queueScheduler) {
        this.zone = zone;
        this.delegate = delegate;
    }
    /**
     * @return {?}
     */
    now() {
        return this.delegate.now();
    }
    /**
     * @param {?} work
     * @param {?=} delay
     * @param {?=} state
     * @return {?}
     */
    schedule(work, delay, state) {
        /** @type {?} */
        const targetZone = this.zone;
        // Wrap the specified work function to make sure that if nested scheduling takes place the
        // work is executed in the correct zone
        /** @type {?} */
        const workInZone = (/**
         * @this {?}
         * @param {?} state
         * @return {?}
         */
        function (state) {
            targetZone.runGuarded((/**
             * @return {?}
             */
            () => {
                work.apply(this, [state]);
            }));
        });
        // Scheduling itself needs to be run in zone to ensure setInterval calls for async scheduling are done
        // inside the correct zone. This scheduler needs to schedule asynchronously always to ensure that
        // firebase emissions are never synchronous. Specifying a delay causes issues with the queueScheduler delegate.
        return this.delegate.schedule(workInZone, delay, state);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ɵZoneScheduler.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    ɵZoneScheduler.prototype.delegate;
}
// tslint:disable-next-line:class-name
/**
 * @template T
 */
export class ɵBlockUntilFirstOperator {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
        this.task = null;
    }
    /**
     * @param {?} subscriber
     * @param {?} source
     * @return {?}
     */
    call(subscriber, source) {
        /** @type {?} */
        const unscheduleTask = this.unscheduleTask.bind(this);
        this.task = this.zone.run((/**
         * @return {?}
         */
        () => Zone.current.scheduleMacroTask('firebaseZoneBlock', noop, {}, noop, noop)));
        return source.pipe(tap({ next: unscheduleTask, complete: unscheduleTask, error: unscheduleTask })).subscribe(subscriber).add(unscheduleTask);
    }
    /**
     * @private
     * @return {?}
     */
    unscheduleTask() {
        // maybe this is a race condition, invoke in a timeout
        // hold for 10ms while I try to figure out what is going on
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.task != null && this.task.state === 'scheduled') {
                this.task.invoke();
                this.task = null;
            }
        }), 10);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ɵBlockUntilFirstOperator.prototype.task;
    /**
     * @type {?}
     * @private
     */
    ɵBlockUntilFirstOperator.prototype.zone;
}
// tslint:disable-next-line:class-name
export class ɵAngularFireSchedulers {
    /**
     * @param {?} ngZone
     */
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.outsideAngular = ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => new ɵZoneScheduler(Zone.current)));
        this.insideAngular = ngZone.run((/**
         * @return {?}
         */
        () => new ɵZoneScheduler(Zone.current, asyncScheduler)));
    }
}
if (false) {
    /** @type {?} */
    ɵAngularFireSchedulers.prototype.outsideAngular;
    /** @type {?} */
    ɵAngularFireSchedulers.prototype.insideAngular;
    /** @type {?} */
    ɵAngularFireSchedulers.prototype.ngZone;
}
/**
 * Operator to block the zone until the first value has been emitted or the observable
 * has completed/errored. This is used to make sure that universal waits until the first
 * value from firebase but doesn't block the zone forever since the firebase subscription
 * is still alive.
 * @param {?} schedulers
 * @return {?}
 */
export function ɵkeepUnstableUntilFirstFactory(schedulers) {
    return (/**
     * @template T
     * @param {?} obs$
     * @return {?}
     */
    function keepUnstableUntilFirst(obs$) {
        obs$ = obs$.lift(new ɵBlockUntilFirstOperator(schedulers.ngZone));
        return obs$.pipe(
        // Run the subscribe body outside of Angular (e.g. calling Firebase SDK to add a listener to a change event)
        subscribeOn(schedulers.outsideAngular), 
        // Run operators inside the angular zone (e.g. side effects via tap())
        observeOn(schedulers.insideAngular)
        // INVESTIGATE https://github.com/angular/angularfire/pull/2315
        // share()
        );
    });
}
// DEBUG quick debugger function for inline logging that typescript doesn't complain about
//       wrote it for debugging the ɵlazySDKProxy, commenting out for now; should consider exposing a
//       verbose mode for AngularFire in a future release that uses something like this in multiple places
//       usage: () => log('something') || returnValue
// const log = (...args: any[]): false => { console.log(...args); return false }
// The problem here are things like ngOnDestroy are missing, then triggering the service
// rather than dig too far; I'm capturing these as I go.
/** @type {?} */
const noopFunctions = ['ngOnDestroy'];
// INVESTIGATE should we make the Proxy revokable and do some cleanup?
//             right now it's fairly simple but I'm sure this will grow in complexity
/** @type {?} */
export const ɵlazySDKProxy = (/**
 * @param {?} klass
 * @param {?} observable
 * @param {?} zone
 * @return {?}
 */
(klass, observable, zone) => {
    return new Proxy(klass, {
        get: (/**
         * @param {?} _
         * @param {?} name
         * @return {?}
         */
        (_, name) => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (klass[name]) {
                return klass[name];
            }
            if (noopFunctions.indexOf(name) > -1) {
                return (/**
                 * @return {?}
                 */
                () => {
                });
            }
            /** @type {?} */
            const promise = observable.toPromise().then((/**
             * @param {?} mod
             * @return {?}
             */
            mod => {
                /** @type {?} */
                const ret = mod && mod[name];
                // TODO move to proper type guards
                if (typeof ret === 'function') {
                    return ret.bind(mod);
                }
                else if (ret && ret.then) {
                    return ret.then((/**
                     * @param {?} res
                     * @return {?}
                     */
                    (res) => zone.run((/**
                     * @return {?}
                     */
                    () => res))));
                }
                else {
                    return zone.run((/**
                     * @return {?}
                     */
                    () => ret));
                }
            }));
            // recurse the proxy
            return new Proxy((/**
             * @return {?}
             */
            () => { }), {
                get: (/**
                 * @param {?} _
                 * @param {?} name
                 * @return {?}
                 */
                (_, name) => promise[name]),
                // TODO handle callbacks as transparently as I can
                apply: (/**
                 * @param {?} self
                 * @param {?} _
                 * @param {?} args
                 * @return {?}
                 */
                (self, _, args) => promise.then((/**
                 * @param {?} it
                 * @return {?}
                 */
                it => it && it(...args))))
            });
        })))
    });
});
/** @type {?} */
export const ɵapplyMixins = (/**
 * @param {?} derivedCtor
 * @param {?} constructors
 * @return {?}
 */
(derivedCtor, constructors) => {
    constructors.forEach((/**
     * @param {?} baseCtor
     * @return {?}
     */
    (baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype || baseCtor).forEach((/**
         * @param {?} name
         * @return {?}
         */
        (name) => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype || baseCtor, name));
        }));
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmZpcmUyLmpzIiwic291cmNlUm9vdCI6Ii93b3Jrc3BhY2Uvc3JjL2NvcmUvIiwic291cmNlcyI6WyJhbmd1bGFyZmlyZTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsY0FBYyxFQUdkLGNBQWMsRUFNZixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTdELFNBQVMsSUFBSTtBQUNiLENBQUM7Ozs7O0FBTUQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBQ3pCLFlBQW9CLElBQVMsRUFBVSxXQUFnQixjQUFjO1FBQWpELFNBQUksR0FBSixJQUFJLENBQUs7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFzQjtJQUNyRSxDQUFDOzs7O0lBRUQsR0FBRztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQXVELEVBQUUsS0FBYyxFQUFFLEtBQVc7O2NBQ3JGLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSTs7OztjQUd0QixVQUFVOzs7OztRQUFHLFVBQXFDLEtBQVU7WUFDaEUsVUFBVSxDQUFDLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBRUQsc0dBQXNHO1FBQ3RHLGlHQUFpRztRQUNqRywrR0FBK0c7UUFDL0csT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FDRjs7Ozs7O0lBdEJhLDhCQUFpQjs7Ozs7SUFBRSxrQ0FBc0M7Ozs7OztBQXlCdkUsTUFBTSxPQUFP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RSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUMsQ0FBQTthQUNoRSxDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQTtLQUNILENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sWUFBWTs7Ozs7QUFBRyxDQUFDLFdBQWdCLEVBQUUsWUFBbUIsRUFBRSxFQUFFO0lBQ3BFLFlBQVksQ0FBQyxPQUFPOzs7O0lBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUNoQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxRSxNQUFNLENBQUMsY0FBYyxDQUNuQixXQUFXLENBQUMsU0FBUyxFQUNyQixJQUFJLEVBQ0osTUFBTSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxDQUN0RSxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgYXN5bmNTY2hlZHVsZXIsXG4gIE9ic2VydmFibGUsXG4gIE9wZXJhdG9yLFxuICBxdWV1ZVNjaGVkdWxlcixcbiAgU2NoZWR1bGVyQWN0aW9uLFxuICBTY2hlZHVsZXJMaWtlLFxuICBTdWJzY3JpYmVyLFxuICBTdWJzY3JpcHRpb24sXG4gIFRlYXJkb3duTG9naWNcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBvYnNlcnZlT24sIHN1YnNjcmliZU9uLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7XG59XG5cbi8qKlxuICogU2NoZWR1bGVzIHRhc2tzIHNvIHRoYXQgdGhleSBhcmUgaW52b2tlZCBpbnNpZGUgdGhlIFpvbmUgdGhhdCBpcyBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxuZXhwb3J0IGNsYXNzIMm1Wm9uZVNjaGVkdWxlciBpbXBsZW1lbnRzIFNjaGVkdWxlckxpa2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IGFueSwgcHJpdmF0ZSBkZWxlZ2F0ZTogYW55ID0gcXVldWVTY2hlZHVsZXIpIHtcbiAgfVxuXG4gIG5vdygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5ub3coKTtcbiAgfVxuXG4gIHNjaGVkdWxlKHdvcms6ICh0aGlzOiBTY2hlZHVsZXJBY3Rpb248YW55Piwgc3RhdGU/OiBhbnkpID0+IHZvaWQsIGRlbGF5PzogbnVtYmVyLCBzdGF0ZT86IGFueSk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3QgdGFyZ2V0Wm9uZSA9IHRoaXMuem9uZTtcbiAgICAvLyBXcmFwIHRoZSBzcGVjaWZpZWQgd29yayBmdW5jdGlvbiB0byBtYWtlIHN1cmUgdGhhdCBpZiBuZXN0ZWQgc2NoZWR1bGluZyB0YWtlcyBwbGFjZSB0aGVcbiAgICAvLyB3b3JrIGlzIGV4ZWN1dGVkIGluIHRoZSBjb3JyZWN0IHpvbmVcbiAgICBjb25zdCB3b3JrSW5ab25lID0gZnVuY3Rpb24odGhpczogU2NoZWR1bGVyQWN0aW9uPGFueT4sIHN0YXRlOiBhbnkpIHtcbiAgICAgIHRhcmdldFpvbmUucnVuR3VhcmRlZCgoKSA9PiB7XG4gICAgICAgIHdvcmsuYXBwbHkodGhpcywgW3N0YXRlXSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gU2NoZWR1bGluZyBpdHNlbGYgbmVlZHMgdG8gYmUgcnVuIGluIHpvbmUgdG8gZW5zdXJlIHNldEludGVydmFsIGNhbGxzIGZvciBhc3luYyBzY2hlZHVsaW5nIGFyZSBkb25lXG4gICAgLy8gaW5zaWRlIHRoZSBjb3JyZWN0IHpvbmUuIFRoaXMgc2NoZWR1bGVyIG5lZWRzIHRvIHNjaGVkdWxlIGFzeW5jaHJvbm91c2x5IGFsd2F5cyB0byBlbnN1cmUgdGhhdFxuICAgIC8vIGZpcmViYXNlIGVtaXNzaW9ucyBhcmUgbmV2ZXIgc3luY2hyb25vdXMuIFNwZWNpZnlpbmcgYSBkZWxheSBjYXVzZXMgaXNzdWVzIHdpdGggdGhlIHF1ZXVlU2NoZWR1bGVyIGRlbGVnYXRlLlxuICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnNjaGVkdWxlKHdvcmtJblpvbmUsIGRlbGF5LCBzdGF0ZSk7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyDJtUJsb2NrVW50aWxGaXJzdE9wZXJhdG9yPFQ+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgVD4ge1xuICBwcml2YXRlIHRhc2s6IE1hY3JvVGFzayB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogYW55KSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogT2JzZXJ2YWJsZTxUPik6IFRlYXJkb3duTG9naWMge1xuICAgIGNvbnN0IHVuc2NoZWR1bGVUYXNrID0gdGhpcy51bnNjaGVkdWxlVGFzay5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGFzayA9IHRoaXMuem9uZS5ydW4oKCkgPT4gWm9uZS5jdXJyZW50LnNjaGVkdWxlTWFjcm9UYXNrKCdmaXJlYmFzZVpvbmVCbG9jaycsIG5vb3AsIHt9LCBub29wLCBub29wKSk7XG5cbiAgICByZXR1cm4gc291cmNlLnBpcGUoXG4gICAgICB0YXAoeyBuZXh0OiB1bnNjaGVkdWxlVGFzaywgY29tcGxldGU6IHVuc2NoZWR1bGVUYXNrLCBlcnJvcjogdW5zY2hlZHVsZVRhc2sgfSlcbiAgICApLnN1YnNjcmliZShzdWJzY3JpYmVyKS5hZGQodW5zY2hlZHVsZVRhc2spO1xuICB9XG5cbiAgcHJpdmF0ZSB1bnNjaGVkdWxlVGFzaygpIHtcbiAgICAvLyBtYXliZSB0aGlzIGlzIGEgcmFjZSBjb25kaXRpb24sIGludm9rZSBpbiBhIHRpbWVvdXRcbiAgICAvLyBob2xkIGZvciAxMG1zIHdoaWxlIEkgdHJ5IHRvIGZpZ3VyZSBvdXQgd2hhdCBpcyBnb2luZyBvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudGFzayAhPSBudWxsICYmIHRoaXMudGFzay5zdGF0ZSA9PT0gJ3NjaGVkdWxlZCcpIHtcbiAgICAgICAgdGhpcy50YXNrLmludm9rZSgpO1xuICAgICAgICB0aGlzLnRhc2sgPSBudWxsO1xuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxuZXhwb3J0IGNsYXNzIMm1QW5ndWxhckZpcmVTY2hlZHVsZXJzIHtcbiAgcHVibGljIHJlYWRvbmx5IG91dHNpZGVBbmd1bGFyOiDJtVpvbmVTY2hlZHVsZXI7XG4gIHB1YmxpYyByZWFkb25seSBpbnNpZGVBbmd1bGFyOiDJtVpvbmVTY2hlZHVsZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5vdXRzaWRlQW5ndWxhciA9IG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBuZXcgybVab25lU2NoZWR1bGVyKFpvbmUuY3VycmVudCkpO1xuICAgIHRoaXMuaW5zaWRlQW5ndWxhciA9IG5nWm9uZS5ydW4oKCkgPT4gbmV3IMm1Wm9uZVNjaGVkdWxlcihab25lLmN1cnJlbnQsIGFzeW5jU2NoZWR1bGVyKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBPcGVyYXRvciB0byBibG9jayB0aGUgem9uZSB1bnRpbCB0aGUgZmlyc3QgdmFsdWUgaGFzIGJlZW4gZW1pdHRlZCBvciB0aGUgb2JzZXJ2YWJsZVxuICogaGFzIGNvbXBsZXRlZC9lcnJvcmVkLiBUaGlzIGlzIHVzZWQgdG8gbWFrZSBzdXJlIHRoYXQgdW5pdmVyc2FsIHdhaXRzIHVudGlsIHRoZSBmaXJzdFxuICogdmFsdWUgZnJvbSBmaXJlYmFzZSBidXQgZG9lc24ndCBibG9jayB0aGUgem9uZSBmb3JldmVyIHNpbmNlIHRoZSBmaXJlYmFzZSBzdWJzY3JpcHRpb25cbiAqIGlzIHN0aWxsIGFsaXZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gybVrZWVwVW5zdGFibGVVbnRpbEZpcnN0RmFjdG9yeShzY2hlZHVsZXJzOiDJtUFuZ3VsYXJGaXJlU2NoZWR1bGVycykge1xuICByZXR1cm4gZnVuY3Rpb24ga2VlcFVuc3RhYmxlVW50aWxGaXJzdDxUPihvYnMkOiBPYnNlcnZhYmxlPFQ+KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgb2JzJCA9IG9icyQubGlmdChcbiAgICAgIG5ldyDJtUJsb2NrVW50aWxGaXJzdE9wZXJhdG9yKHNjaGVkdWxlcnMubmdab25lKVxuICAgICk7XG5cbiAgICByZXR1cm4gb2JzJC5waXBlKFxuICAgICAgLy8gUnVuIHRoZSBzdWJzY3JpYmUgYm9keSBvdXRzaWRlIG9mIEFuZ3VsYXIgKGUuZy4gY2FsbGluZyBGaXJlYmFzZSBTREsgdG8gYWRkIGEgbGlzdGVuZXIgdG8gYSBjaGFuZ2UgZXZlbnQpXG4gICAgICBzdWJzY3JpYmVPbihzY2hlZHVsZXJzLm91dHNpZGVBbmd1bGFyKSxcbiAgICAgIC8vIFJ1biBvcGVyYXRvcnMgaW5zaWRlIHRoZSBhbmd1bGFyIHpvbmUgKGUuZy4gc2lkZSBlZmZlY3RzIHZpYSB0YXAoKSlcbiAgICAgIG9ic2VydmVPbihzY2hlZHVsZXJzLmluc2lkZUFuZ3VsYXIpXG4gICAgICAvLyBJTlZFU1RJR0FURSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyZmlyZS9wdWxsLzIzMTVcbiAgICAgIC8vIHNoYXJlKClcbiAgICApO1xuICB9O1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpiYW4tdHlwZXNcbnR5cGUgRnVuY3Rpb25Qcm9wZXJ0eU5hbWVzPFQ+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSBleHRlbmRzIEZ1bmN0aW9uID8gSyA6IG5ldmVyIH1ba2V5b2YgVF07XG50eXBlIFByb21pc2VSZXR1cm5pbmdGdW5jdGlvblByb3BlcnR5TmFtZXM8VD4gPSB7XG4gIFtLIGluIEZ1bmN0aW9uUHJvcGVydHlOYW1lczxUPl06IFJldHVyblR5cGU8VFtLXT4gZXh0ZW5kcyBQcm9taXNlPGFueT4gPyBLIDogbmV2ZXJcbn1bRnVuY3Rpb25Qcm9wZXJ0eU5hbWVzPFQ+XTtcbnR5cGUgTm9uUHJvbWlzZVJldHVybmluZ0Z1bmN0aW9uUHJvcGVydHlOYW1lczxUPiA9IHtcbiAgW0sgaW4gRnVuY3Rpb25Qcm9wZXJ0eU5hbWVzPFQ+XTogUmV0dXJuVHlwZTxUW0tdPiBleHRlbmRzIFByb21pc2U8YW55PiA/IG5ldmVyIDogS1xufVtGdW5jdGlvblByb3BlcnR5TmFtZXM8VD5dO1xudHlwZSBOb25GdW5jdGlvblByb3BlcnR5TmFtZXM8VD4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgRnVuY3Rpb24gPyBuZXZlciA6IEsgfVtrZXlvZiBUXTtcbi8vIHRzbGludDplbmFibGU6YmFuLXR5cGVzXG5cbmV4cG9ydCB0eXBlIMm1UHJvbWlzZVByb3h5PFQ+ID0geyBbSyBpbiBOb25GdW5jdGlvblByb3BlcnR5TmFtZXM8VD5dOiBQcm9taXNlPFRbS10+IH0gJlxuICB7IFtLIGluIE5vblByb21pc2VSZXR1cm5pbmdGdW5jdGlvblByb3BlcnR5TmFtZXM8VD5dOiAoLi4uYXJnczogUGFyYW1ldGVyczxUW0tdPikgPT4gUHJvbWlzZTxSZXR1cm5UeXBlPFRbS10+PiB9ICZcbiAgeyBbSyBpbiBQcm9taXNlUmV0dXJuaW5nRnVuY3Rpb25Qcm9wZXJ0eU5hbWVzPFQ+XTogKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VFtLXT4pID0+IFJldHVyblR5cGU8VFtLXT4gfTtcblxuXG4vLyBERUJVRyBxdWljayBkZWJ1Z2dlciBmdW5jdGlvbiBmb3IgaW5saW5lIGxvZ2dpbmcgdGhhdCB0eXBlc2NyaXB0IGRvZXNuJ3QgY29tcGxhaW4gYWJvdXRcbi8vICAgICAgIHdyb3RlIGl0IGZvciBkZWJ1Z2dpbmcgdGhlIMm1bGF6eVNES1Byb3h5LCBjb21tZW50aW5nIG91dCBmb3Igbm93OyBzaG91bGQgY29uc2lkZXIgZXhwb3NpbmcgYVxuLy8gICAgICAgdmVyYm9zZSBtb2RlIGZvciBBbmd1bGFyRmlyZSBpbiBhIGZ1dHVyZSByZWxlYXNlIHRoYXQgdXNlcyBzb21ldGhpbmcgbGlrZSB0aGlzIGluIG11bHRpcGxlIHBsYWNlc1xuLy8gICAgICAgdXNhZ2U6ICgpID0+IGxvZygnc29tZXRoaW5nJykgfHwgcmV0dXJuVmFsdWVcbi8vIGNvbnN0IGxvZyA9ICguLi5hcmdzOiBhbnlbXSk6IGZhbHNlID0+IHsgY29uc29sZS5sb2coLi4uYXJncyk7IHJldHVybiBmYWxzZSB9XG5cbi8vIFRoZSBwcm9ibGVtIGhlcmUgYXJlIHRoaW5ncyBsaWtlIG5nT25EZXN0cm95IGFyZSBtaXNzaW5nLCB0aGVuIHRyaWdnZXJpbmcgdGhlIHNlcnZpY2Vcbi8vIHJhdGhlciB0aGFuIGRpZyB0b28gZmFyOyBJJ20gY2FwdHVyaW5nIHRoZXNlIGFzIEkgZ28uXG5jb25zdCBub29wRnVuY3Rpb25zID0gWyduZ09uRGVzdHJveSddO1xuXG4vLyBJTlZFU1RJR0FURSBzaG91bGQgd2UgbWFrZSB0aGUgUHJveHkgcmV2b2thYmxlIGFuZCBkbyBzb21lIGNsZWFudXA/XG4vLyAgICAgICAgICAgICByaWdodCBub3cgaXQncyBmYWlybHkgc2ltcGxlIGJ1dCBJJ20gc3VyZSB0aGlzIHdpbGwgZ3JvdyBpbiBjb21wbGV4aXR5XG5leHBvcnQgY29uc3QgybVsYXp5U0RLUHJveHkgPSAoa2xhc3M6IGFueSwgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+LCB6b25lOiBOZ1pvbmUpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm94eShrbGFzcywge1xuICAgIGdldDogKF8sIG5hbWU6IHN0cmluZykgPT4gem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAoa2xhc3NbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIGtsYXNzW25hbWVdO1xuICAgICAgfVxuICAgICAgaWYgKG5vb3BGdW5jdGlvbnMuaW5kZXhPZihuYW1lKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9taXNlID0gb2JzZXJ2YWJsZS50b1Byb21pc2UoKS50aGVuKG1vZCA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IG1vZCAmJiBtb2RbbmFtZV07XG4gICAgICAgIC8vIFRPRE8gbW92ZSB0byBwcm9wZXIgdHlwZSBndWFyZHNcbiAgICAgICAgaWYgKHR5cGVvZiByZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gcmV0LmJpbmQobW9kKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXQgJiYgcmV0LnRoZW4pIHtcbiAgICAgICAgICByZXR1cm4gcmV0LnRoZW4oKHJlczogYW55KSA9PiB6b25lLnJ1bigoKSA9PiByZXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gem9uZS5ydW4oKCkgPT4gcmV0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyByZWN1cnNlIHRoZSBwcm94eVxuICAgICAgcmV0dXJuIG5ldyBQcm94eSgoKSA9PiB7fSwge1xuICAgICAgICAgIGdldDogKF8sIG5hbWUpID0+IHByb21pc2VbbmFtZV0sXG4gICAgICAgICAgLy8gVE9ETyBoYW5kbGUgY2FsbGJhY2tzIGFzIHRyYW5zcGFyZW50bHkgYXMgSSBjYW5cbiAgICAgICAgICBhcHBseTogKHNlbGYsIF8sIGFyZ3MpID0+IHByb21pc2UudGhlbihpdCA9PiBpdCAmJiBpdCguLi5hcmdzKSlcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCDJtWFwcGx5TWl4aW5zID0gKGRlcml2ZWRDdG9yOiBhbnksIGNvbnN0cnVjdG9yczogYW55W10pID0+IHtcbiAgY29uc3RydWN0b3JzLmZvckVhY2goKGJhc2VDdG9yKSA9PiB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYmFzZUN0b3IucHJvdG90eXBlIHx8IGJhc2VDdG9yKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgIGRlcml2ZWRDdG9yLnByb3RvdHlwZSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlQ3Rvci5wcm90b3R5cGUgfHwgYmFzZUN0b3IsIG5hbWUpXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn07XG4iXX0=