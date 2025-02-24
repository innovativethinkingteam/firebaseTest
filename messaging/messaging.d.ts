import { NgZone } from '@angular/core';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { FirebaseAppConfig, FirebaseOptions, ɵPromiseProxy } from '@angular/fire';
import * as ɵngcc0 from '@angular/core';
export interface AngularFireMessaging extends Omit<ɵPromiseProxy<firebase.messaging.Messaging>, 'deleteToken' | 'getToken' | 'requestPermission'> {
}
export declare class AngularFireMessaging {
    readonly requestPermission: Observable<void>;
    readonly getToken: Observable<string | null>;
    readonly tokenChanges: Observable<string | null>;
    readonly messages: Observable<{}>;
    readonly requestToken: Observable<string | null>;
    readonly deleteToken: (token: string) => Observable<boolean>;
    constructor(options: FirebaseOptions, nameOrConfig: string | FirebaseAppConfig | null | undefined, platformId: Object, zone: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularFireMessaging, [null, { optional: true; }, null, null]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnaW5nLmQudHMiLCJzb3VyY2VzIjpbIm1lc3NhZ2luZy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZpcmViYXNlQXBwQ29uZmlnLCBGaXJlYmFzZU9wdGlvbnMsIMm1UHJvbWlzZVByb3h5IH0gZnJvbSAnQGFuZ3VsYXIvZmlyZSc7XG5leHBvcnQgaW50ZXJmYWNlIEFuZ3VsYXJGaXJlTWVzc2FnaW5nIGV4dGVuZHMgT21pdDzJtVByb21pc2VQcm94eTxmaXJlYmFzZS5tZXNzYWdpbmcuTWVzc2FnaW5nPiwgJ2RlbGV0ZVRva2VuJyB8ICdnZXRUb2tlbicgfCAncmVxdWVzdFBlcm1pc3Npb24nPiB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBbmd1bGFyRmlyZU1lc3NhZ2luZyB7XG4gICAgcmVhZG9ubHkgcmVxdWVzdFBlcm1pc3Npb246IE9ic2VydmFibGU8dm9pZD47XG4gICAgcmVhZG9ubHkgZ2V0VG9rZW46IE9ic2VydmFibGU8c3RyaW5nIHwgbnVsbD47XG4gICAgcmVhZG9ubHkgdG9rZW5DaGFuZ2VzOiBPYnNlcnZhYmxlPHN0cmluZyB8IG51bGw+O1xuICAgIHJlYWRvbmx5IG1lc3NhZ2VzOiBPYnNlcnZhYmxlPHt9PjtcbiAgICByZWFkb25seSByZXF1ZXN0VG9rZW46IE9ic2VydmFibGU8c3RyaW5nIHwgbnVsbD47XG4gICAgcmVhZG9ubHkgZGVsZXRlVG9rZW46ICh0b2tlbjogc3RyaW5nKSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucywgbmFtZU9yQ29uZmlnOiBzdHJpbmcgfCBGaXJlYmFzZUFwcENvbmZpZyB8IG51bGwgfCB1bmRlZmluZWQsIHBsYXRmb3JtSWQ6IE9iamVjdCwgem9uZTogTmdab25lKTtcbn1cbiJdfQ==