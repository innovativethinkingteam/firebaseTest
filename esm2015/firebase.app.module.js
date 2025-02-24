/**
 * @fileoverview added by tsickle
 * Generated from: firebase.app.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, InjectionToken, NgModule, NgZone, Optional, PLATFORM_ID, VERSION as NG_VERSION, Version } from '@angular/core';
import firebase from 'firebase/app';
/**
 * @record
 */
export function FirebaseOptions() { }
/**
 * @record
 */
export function FirebaseAppConfig() { }
/** @type {?} */
export const FIREBASE_OPTIONS = new InjectionToken('angularfire2.app.options');
/** @type {?} */
export const FIREBASE_APP_NAME = new InjectionToken('angularfire2.app.nameOrConfig');
// Have to implement as we need to return a class from the provider, we should consider exporting
// this in the firebase/app types as this is our highest risk of breaks
export class FirebaseApp {
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
export const VERSION = new Version('6.0.5');
/**
 * @param {?} options
 * @param {?} zone
 * @param {?=} nameOrConfig
 * @return {?}
 */
export function ɵfirebaseAppFactory(options, zone, nameOrConfig) {
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
export class AngularFireModule {
    // tslint:disable-next-line:ban-types
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        firebase.registerVersion('angularfire', VERSION.full, platformId.toString());
        firebase.registerVersion('angular', NG_VERSION.full);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UuYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvd29ya3NwYWNlL3NyYy9jb3JlLyIsInNvdXJjZXMiOlsiZmlyZWJhc2UuYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxNQUFNLEVBQUUsY0FBYyxFQUF1QixRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsT0FBTyxJQUFJLFVBQVUsRUFBRSxPQUFPLEVBQ3JILE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sUUFBUSxNQUFNLGNBQWMsQ0FBQzs7OztBQUdwQyxxQ0FFQzs7OztBQUVELHVDQUVDOztBQUVELE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBa0IsMEJBQTBCLENBQUM7O0FBQy9GLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxJQUFJLGNBQWMsQ0FBeUMsK0JBQStCLENBQUM7OztBQUk1SCxNQUFNLE9BQU8sV0FBVztDQWF2Qjs7O0lBWkMsMkJBQWE7O0lBQ2IsOEJBQVk7O0lBQ1osZ0NBQThDOztJQUM5QywyQkFBK0I7O0lBQy9CLCtCQUErRDs7SUFDL0QsZ0NBQThDOztJQUM5QyxrQ0FBb0Q7O0lBQ3BELDhCQUE4RDs7SUFDOUQsNkJBQTRCOztJQUM1QixnQ0FBOEM7O0lBQzlDLGdDQUE2RDs7SUFDN0QsbUNBQXVEOzs7QUFHekQsTUFBTSxPQUFPLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQzs7Ozs7OztBQUUxRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsT0FBd0IsRUFBRSxJQUFZLEVBQUUsWUFBZ0Q7O1VBQ3BILElBQUksR0FBRyxPQUFPLFlBQVksS0FBSyxRQUFRLElBQUksWUFBWSxJQUFJLFdBQVc7O1VBQ3RFLE1BQU0sR0FBRyxPQUFPLFlBQVksS0FBSyxRQUFRLElBQUksWUFBWSxJQUFJLEVBQUU7SUFDckUsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQzs7O1VBRTVCLFdBQVcsR0FBRyxtQkFBQSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7SUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBTztJQUMxRixrR0FBa0c7SUFDbEcsNkVBQTZFO0lBQzdFLE9BQU8sbUJBQUEsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGlCQUFpQjs7O0lBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsbUJBQUEsTUFBTSxFQUFPLENBQUMsRUFBQyxDQUFDLEVBQWUsQ0FBQztBQUN0SCxDQUFDOztNQUVLLHFCQUFxQixHQUFHO0lBQzVCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLFVBQVUsRUFBRSxtQkFBbUI7SUFDL0IsSUFBSSxFQUFFO1FBQ0osZ0JBQWdCO1FBQ2hCLE1BQU07UUFDTixDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsaUJBQWlCLENBQUM7S0FDcEM7Q0FDRjtBQUtELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBWTVCLFlBQWlDLFVBQWtCO1FBQ2pELFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDN0UsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQWRELE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBd0IsRUFBRSxZQUF5QztRQUN0RixPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQztnQkFDOUMsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQzthQUNyRDtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFaRixRQUFRLFNBQUM7Z0JBQ1IsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDbkM7Ozs7WUFhOEMsTUFBTSx1QkFBdEMsTUFBTSxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3QsIEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgTmdab25lLCBPcHRpb25hbCwgUExBVEZPUk1fSUQsIFZFUlNJT04gYXMgTkdfVkVSU0lPTiwgVmVyc2lvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuXG4vLyBJTlZFU1RJR0FURSBQdWJsaWMgdHlwZXMgZG9uJ3QgZXhwb3NlIEZpcmViYXNlT3B0aW9ucyBvciBGaXJlYmFzZUFwcENvbmZpZywgaXMgdGhpcyB0aGUgY2FzZSBhbnlsb25nZXI/XG5leHBvcnQgaW50ZXJmYWNlIEZpcmViYXNlT3B0aW9ucyB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaXJlYmFzZUFwcENvbmZpZyB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IEZJUkVCQVNFX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48RmlyZWJhc2VPcHRpb25zPignYW5ndWxhcmZpcmUyLmFwcC5vcHRpb25zJyk7XG5leHBvcnQgY29uc3QgRklSRUJBU0VfQVBQX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nIHwgRmlyZWJhc2VBcHBDb25maWcgfCB1bmRlZmluZWQ+KCdhbmd1bGFyZmlyZTIuYXBwLm5hbWVPckNvbmZpZycpO1xuXG4vLyBIYXZlIHRvIGltcGxlbWVudCBhcyB3ZSBuZWVkIHRvIHJldHVybiBhIGNsYXNzIGZyb20gdGhlIHByb3ZpZGVyLCB3ZSBzaG91bGQgY29uc2lkZXIgZXhwb3J0aW5nXG4vLyB0aGlzIGluIHRoZSBmaXJlYmFzZS9hcHAgdHlwZXMgYXMgdGhpcyBpcyBvdXIgaGlnaGVzdCByaXNrIG9mIGJyZWFrc1xuZXhwb3J0IGNsYXNzIEZpcmViYXNlQXBwIGltcGxlbWVudHMgUGFydGlhbDxmaXJlYmFzZS5hcHAuQXBwPiB7XG4gIG5hbWU6IHN0cmluZztcbiAgb3B0aW9uczoge307XG4gIGFuYWx5dGljczogKCkgPT4gZmlyZWJhc2UuYW5hbHl0aWNzLkFuYWx5dGljcztcbiAgYXV0aDogKCkgPT4gZmlyZWJhc2UuYXV0aC5BdXRoO1xuICBkYXRhYmFzZTogKGRhdGFiYXNlVVJMPzogc3RyaW5nKSA9PiBmaXJlYmFzZS5kYXRhYmFzZS5EYXRhYmFzZTtcbiAgbWVzc2FnaW5nOiAoKSA9PiBmaXJlYmFzZS5tZXNzYWdpbmcuTWVzc2FnaW5nO1xuICBwZXJmb3JtYW5jZTogKCkgPT4gZmlyZWJhc2UucGVyZm9ybWFuY2UuUGVyZm9ybWFuY2U7XG4gIHN0b3JhZ2U6IChzdG9yYWdlQnVja2V0Pzogc3RyaW5nKSA9PiBmaXJlYmFzZS5zdG9yYWdlLlN0b3JhZ2U7XG4gIGRlbGV0ZTogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgZmlyZXN0b3JlOiAoKSA9PiBmaXJlYmFzZS5maXJlc3RvcmUuRmlyZXN0b3JlO1xuICBmdW5jdGlvbnM6IChyZWdpb24/OiBzdHJpbmcpID0+IGZpcmViYXNlLmZ1bmN0aW9ucy5GdW5jdGlvbnM7XG4gIHJlbW90ZUNvbmZpZzogKCkgPT4gZmlyZWJhc2UucmVtb3RlQ29uZmlnLlJlbW90ZUNvbmZpZztcbn1cblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBuZXcgVmVyc2lvbignQU5HVUxBUkZJUkUyX1ZFUlNJT04nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIMm1ZmlyZWJhc2VBcHBGYWN0b3J5KG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucywgem9uZTogTmdab25lLCBuYW1lT3JDb25maWc/OiBzdHJpbmcgfCBGaXJlYmFzZUFwcENvbmZpZyB8IG51bGwpIHtcbiAgY29uc3QgbmFtZSA9IHR5cGVvZiBuYW1lT3JDb25maWcgPT09ICdzdHJpbmcnICYmIG5hbWVPckNvbmZpZyB8fCAnW0RFRkFVTFRdJztcbiAgY29uc3QgY29uZmlnID0gdHlwZW9mIG5hbWVPckNvbmZpZyA9PT0gJ29iamVjdCcgJiYgbmFtZU9yQ29uZmlnIHx8IHt9O1xuICBjb25maWcubmFtZSA9IGNvbmZpZy5uYW1lIHx8IG5hbWU7XG4gIC8vIEFkZGVkIGFueSBkdWUgdG8gc29tZSBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQGZpcmViYXNlL2FwcCBhbmQgZmlyZWJhc2UgdHlwZXNcbiAgY29uc3QgZXhpc3RpbmdBcHAgPSBmaXJlYmFzZS5hcHBzLmZpbHRlcihhcHAgPT4gYXBwICYmIGFwcC5uYW1lID09PSBjb25maWcubmFtZSlbMF0gYXMgYW55O1xuICAvLyBXZSBzdXBwb3J0IEZpcmViYXNlQ29uZmlnLCBpbml0aWFsaXplQXBwJ3MgcHVibGljIHR5cGUgb25seSBhY2NlcHRzIHN0cmluZzsgbmVlZCB0byBjYXN0IGFzIGFueVxuICAvLyBDb3VsZCBiZSBzb2x2ZWQgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vZmlyZWJhc2UvZmlyZWJhc2UtanMtc2RrL3B1bGwvMTIwNlxuICByZXR1cm4gKGV4aXN0aW5nQXBwIHx8IHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChvcHRpb25zLCBjb25maWcgYXMgYW55KSkpIGFzIEZpcmViYXNlQXBwO1xufVxuXG5jb25zdCBGSVJFQkFTRV9BUFBfUFJPVklERVIgPSB7XG4gIHByb3ZpZGU6IEZpcmViYXNlQXBwLFxuICB1c2VGYWN0b3J5OiDJtWZpcmViYXNlQXBwRmFjdG9yeSxcbiAgZGVwczogW1xuICAgIEZJUkVCQVNFX09QVElPTlMsXG4gICAgTmdab25lLFxuICAgIFtuZXcgT3B0aW9uYWwoKSwgRklSRUJBU0VfQVBQX05BTUVdXG4gIF1cbn07XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW0ZJUkVCQVNFX0FQUF9QUk9WSURFUl1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckZpcmVNb2R1bGUge1xuICBzdGF0aWMgaW5pdGlhbGl6ZUFwcChvcHRpb25zOiBGaXJlYmFzZU9wdGlvbnMsIG5hbWVPckNvbmZpZz86IHN0cmluZyB8IEZpcmViYXNlQXBwQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBbmd1bGFyRmlyZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhckZpcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IEZJUkVCQVNFX09QVElPTlMsIHVzZVZhbHVlOiBvcHRpb25zfSxcbiAgICAgICAge3Byb3ZpZGU6IEZJUkVCQVNFX0FQUF9OQU1FLCB1c2VWYWx1ZTogbmFtZU9yQ29uZmlnfVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YmFuLXR5cGVzXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IE9iamVjdCkge1xuICAgIGZpcmViYXNlLnJlZ2lzdGVyVmVyc2lvbignYW5ndWxhcmZpcmUnLCBWRVJTSU9OLmZ1bGwsIHBsYXRmb3JtSWQudG9TdHJpbmcoKSk7XG4gICAgZmlyZWJhc2UucmVnaXN0ZXJWZXJzaW9uKCdhbmd1bGFyJywgTkdfVkVSU0lPTi5mdWxsKTtcbiAgfVxufVxuIl19