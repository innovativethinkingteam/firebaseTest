import { queueScheduler, asyncScheduler } from 'rxjs';
import { tap, subscribeOn, observeOn } from 'rxjs/operators';
import { InjectionToken, Version, NgZone, Optional, VERSION as VERSION$1, NgModule, Inject, PLATFORM_ID } from '@angular/core';
import firebase from 'firebase/app';

/**
 * @fileoverview added by tsickle
 * Generated from: angularfire2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function noop() {
}
/**
 * Schedules tasks so that they are invoked inside the Zone that is passed in the constructor.
 */
// tslint:disable-next-line:class-name
class ɵZoneScheduler {
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
class ɵBlockUntilFirstOperator {
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
class ɵAngularFireSchedulers {
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
function ɵkeepUnstableUntilFirstFactory(schedulers) {
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
const ɵlazySDKProxy = (/**
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
const ɵapplyMixins = (/**
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

/**
 * @fileoverview added by tsickle
 * Generated from: firebase.app.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function FirebaseOptions() { }
/**
 * @record
 */
function FirebaseAppConfig() { }
/** @type {?} */
const FIREBASE_OPTIONS = new InjectionToken('angularfire2.app.options');
/** @type {?} */
const FIREBASE_APP_NAME = new InjectionToken('angularfire2.app.nameOrConfig');
// Have to implement as we need to return a class from the provider, we should consider exporting
// this in the firebase/app types as this is our highest risk of breaks
class FirebaseApp {
}
if (false) {
    /** @type {?} */
    FirebaseApp.prototype.name;
    /** @type {?} */
    FirebaseApp.prototype.options;
    /** @type {?} */
    FirebaseApp.prototype.analytics;
    /** @type {?} */
    FirebaseApp.prototype.auth;
    /** @type {?} */
    FirebaseApp.prototype.database;
    /** @type {?} */
    FirebaseApp.prototype.messaging;
    /** @type {?} */
    FirebaseApp.prototype.performance;
    /** @type {?} */
    FirebaseApp.prototype.storage;
    /** @type {?} */
    FirebaseApp.prototype.delete;
    /** @type {?} */
    FirebaseApp.prototype.firestore;
    /** @type {?} */
    FirebaseApp.prototype.functions;
    /** @type {?} */
    FirebaseApp.prototype.remoteConfig;
}
/** @type {?} */
const VERSION = new Version('6.0.5');
/**
 * @param {?} options
 * @param {?} zone
 * @param {?=} nameOrConfig
 * @return {?}
 */
function ɵfirebaseAppFactory(options, zone, nameOrConfig) {
    /** @type {?} */
    const name = typeof nameOrConfig === 'string' && nameOrConfig || '[DEFAULT]';
    /** @type {?} */
    const config = typeof nameOrConfig === 'object' && nameOrConfig || {};
    config.name = config.name || name;
    // Added any due to some inconsistency between @firebase/app and firebase types
    /** @type {?} */
    const existingApp = (/** @type {?} */ (firebase.apps.filter((/**
     * @param {?} app
     * @return {?}
     */
    app => app && app.name === config.name))[0]));
    // We support FirebaseConfig, initializeApp's public type only accepts string; need to cast as any
    // Could be solved with https://github.com/firebase/firebase-js-sdk/pull/1206
    return (/** @type {?} */ ((existingApp || zone.runOutsideAngular((/**
     * @return {?}
     */
    () => firebase.initializeApp(options, (/** @type {?} */ (config))))))));
}
/** @type {?} */
const FIREBASE_APP_PROVIDER = {
    provide: FirebaseApp,
    useFactory: ɵfirebaseAppFactory,
    deps: [
        FIREBASE_OPTIONS,
        NgZone,
        [new Optional(), FIREBASE_APP_NAME]
    ]
};
class AngularFireModule {
    // tslint:disable-next-line:ban-types
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        firebase.registerVersion('angularfire', VERSION.full, platformId.toString());
        firebase.registerVersion('angular', VERSION$1.full);
    }
    /**
     * @param {?} options
     * @param {?=} nameOrConfig
     * @return {?}
     */
    static initializeApp(options, nameOrConfig) {
        return {
            ngModule: AngularFireModule,
            providers: [
                { provide: FIREBASE_OPTIONS, useValue: options },
                { provide: FIREBASE_APP_NAME, useValue: nameOrConfig }
            ]
        };
    }
}
AngularFireModule.decorators = [
    { type: NgModule, args: [{
                providers: [FIREBASE_APP_PROVIDER]
            },] }
];
/** @nocollapse */
AngularFireModule.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularFireModule, FIREBASE_APP_NAME, FIREBASE_OPTIONS, FirebaseApp, VERSION, ɵAngularFireSchedulers, ɵBlockUntilFirstOperator, ɵZoneScheduler, ɵapplyMixins, ɵfirebaseAppFactory, ɵkeepUnstableUntilFirstFactory, ɵlazySDKProxy };
//# sourceMappingURL=angular-fire.js.map
