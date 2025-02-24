import { InjectionToken, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseAppConfig, FirebaseOptions, ɵPromiseProxy } from '@angular/fire';
import firebase from 'firebase/app';
import * as ɵngcc0 from '@angular/core';
export declare const ORIGIN: InjectionToken<string>;
export declare const REGION: InjectionToken<string>;
export interface AngularFireFunctions extends Omit<ɵPromiseProxy<firebase.functions.Functions>, 'httpsCallable'> {
}
export declare class AngularFireFunctions {
    readonly httpsCallable: <T = any, R = any>(name: string) => (data: T) => Observable<R>;
    constructor(options: FirebaseOptions, nameOrConfig: string | FirebaseAppConfig | null | undefined, zone: NgZone, region: string | null, origin: string | null);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularFireFunctions, [null, { optional: true; }, null, { optional: true; }, { optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmQudHMiLCJzb3VyY2VzIjpbImZ1bmN0aW9ucy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHBDb25maWcsIEZpcmViYXNlT3B0aW9ucywgybVQcm9taXNlUHJveHkgfSBmcm9tICdAYW5ndWxhci9maXJlJztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgT1JJR0lOOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+O1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgUkVHSU9OOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+O1xuZXhwb3J0IGludGVyZmFjZSBBbmd1bGFyRmlyZUZ1bmN0aW9ucyBleHRlbmRzIE9taXQ8ybVQcm9taXNlUHJveHk8ZmlyZWJhc2UuZnVuY3Rpb25zLkZ1bmN0aW9ucz4sICdodHRwc0NhbGxhYmxlJz4ge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5ndWxhckZpcmVGdW5jdGlvbnMge1xuICAgIHJlYWRvbmx5IGh0dHBzQ2FsbGFibGU6IDxUID0gYW55LCBSID0gYW55PihuYW1lOiBzdHJpbmcpID0+IChkYXRhOiBUKSA9PiBPYnNlcnZhYmxlPFI+O1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucywgbmFtZU9yQ29uZmlnOiBzdHJpbmcgfCBGaXJlYmFzZUFwcENvbmZpZyB8IG51bGwgfCB1bmRlZmluZWQsIHpvbmU6IE5nWm9uZSwgcmVnaW9uOiBzdHJpbmcgfCBudWxsLCBvcmlnaW46IHN0cmluZyB8IG51bGwpO1xufVxuIl19