import { InjectionToken, NgZone } from '@angular/core';
import { FirebaseAppConfig, FirebaseOptions, ɵPromiseProxy } from '@angular/fire';
import firebase from 'firebase/app';
import * as ɵngcc0 from '@angular/core';
export interface Config {
    [key: string]: any;
}
export declare const COLLECTION_ENABLED: InjectionToken<boolean>;
export declare const APP_VERSION: InjectionToken<string>;
export declare const APP_NAME: InjectionToken<string>;
export declare const DEBUG_MODE: InjectionToken<boolean>;
export declare const CONFIG: InjectionToken<Config>;
export interface AngularFireAnalytics extends ɵPromiseProxy<firebase.analytics.Analytics> {
}
export declare class AngularFireAnalytics {
    private options;
    updateConfig(config: Config): Promise<void>;
    constructor(options: FirebaseOptions, nameOrConfig: string | FirebaseAppConfig | null | undefined, analyticsCollectionEnabled: boolean | null, providedAppVersion: string | null, providedAppName: string | null, debugModeEnabled: boolean | null, providedConfig: Config | null, platformId: Object, zone: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularFireAnalytics, [null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }, null, null]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLmQudHMiLCJzb3VyY2VzIjpbImFuYWx5dGljcy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHBDb25maWcsIEZpcmViYXNlT3B0aW9ucywgybVQcm9taXNlUHJveHkgfSBmcm9tICdAYW5ndWxhci9maXJlJztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbn1cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IENPTExFQ1RJT05fRU5BQkxFRDogSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj47XG5leHBvcnQgZGVjbGFyZSBjb25zdCBBUFBfVkVSU0lPTjogSW5qZWN0aW9uVG9rZW48c3RyaW5nPjtcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IEFQUF9OQU1FOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+O1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgREVCVUdfTU9ERTogSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj47XG5leHBvcnQgZGVjbGFyZSBjb25zdCBDT05GSUc6IEluamVjdGlvblRva2VuPENvbmZpZz47XG5leHBvcnQgaW50ZXJmYWNlIEFuZ3VsYXJGaXJlQW5hbHl0aWNzIGV4dGVuZHMgybVQcm9taXNlUHJveHk8ZmlyZWJhc2UuYW5hbHl0aWNzLkFuYWx5dGljcz4ge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5ndWxhckZpcmVBbmFseXRpY3Mge1xuICAgIHByaXZhdGUgb3B0aW9ucztcbiAgICB1cGRhdGVDb25maWcoY29uZmlnOiBDb25maWcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucywgbmFtZU9yQ29uZmlnOiBzdHJpbmcgfCBGaXJlYmFzZUFwcENvbmZpZyB8IG51bGwgfCB1bmRlZmluZWQsIGFuYWx5dGljc0NvbGxlY3Rpb25FbmFibGVkOiBib29sZWFuIHwgbnVsbCwgcHJvdmlkZWRBcHBWZXJzaW9uOiBzdHJpbmcgfCBudWxsLCBwcm92aWRlZEFwcE5hbWU6IHN0cmluZyB8IG51bGwsIGRlYnVnTW9kZUVuYWJsZWQ6IGJvb2xlYW4gfCBudWxsLCBwcm92aWRlZENvbmZpZzogQ29uZmlnIHwgbnVsbCwgcGxhdGZvcm1JZDogT2JqZWN0LCB6b25lOiBOZ1pvbmUpO1xufVxuIl19