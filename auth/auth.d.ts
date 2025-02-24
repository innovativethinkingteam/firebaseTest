import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseOptions, FirebaseAppConfig, ɵPromiseProxy } from '@angular/fire';
import firebase from 'firebase/app';
import * as ɵngcc0 from '@angular/core';
export interface AngularFireAuth extends ɵPromiseProxy<firebase.auth.Auth> {
}
export declare class AngularFireAuth {
    /**
     * Observable of authentication state; as of Firebase 4.0 this is only triggered via sign-in/out
     */
    readonly authState: Observable<firebase.User | null>;
    /**
     * Observable of the currently signed-in user's JWT token used to identify the user to a Firebase service (or null).
     */
    readonly idToken: Observable<string | null>;
    /**
     * Observable of the currently signed-in user (or null).
     */
    readonly user: Observable<firebase.User | null>;
    /**
     * Observable of the currently signed-in user's IdTokenResult object which contains the ID token JWT string and other
     * helper properties for getting different data associated with the token as well as all the decoded payload claims
     * (or null).
     */
    readonly idTokenResult: Observable<firebase.auth.IdTokenResult | null>;
    constructor(options: FirebaseOptions, nameOrConfig: string | FirebaseAppConfig | null | undefined, platformId: Object, zone: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularFireAuth, [null, { optional: true; }, null, null]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5kLnRzIiwic291cmNlcyI6WyJhdXRoLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGaXJlYmFzZU9wdGlvbnMsIEZpcmViYXNlQXBwQ29uZmlnLCDJtVByb21pc2VQcm94eSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5leHBvcnQgaW50ZXJmYWNlIEFuZ3VsYXJGaXJlQXV0aCBleHRlbmRzIMm1UHJvbWlzZVByb3h5PGZpcmViYXNlLmF1dGguQXV0aD4ge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5ndWxhckZpcmVBdXRoIHtcbiAgICAvKipcbiAgICAgKiBPYnNlcnZhYmxlIG9mIGF1dGhlbnRpY2F0aW9uIHN0YXRlOyBhcyBvZiBGaXJlYmFzZSA0LjAgdGhpcyBpcyBvbmx5IHRyaWdnZXJlZCB2aWEgc2lnbi1pbi9vdXRcbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRoU3RhdGU6IE9ic2VydmFibGU8ZmlyZWJhc2UuVXNlciB8IG51bGw+O1xuICAgIC8qKlxuICAgICAqIE9ic2VydmFibGUgb2YgdGhlIGN1cnJlbnRseSBzaWduZWQtaW4gdXNlcidzIEpXVCB0b2tlbiB1c2VkIHRvIGlkZW50aWZ5IHRoZSB1c2VyIHRvIGEgRmlyZWJhc2Ugc2VydmljZSAob3IgbnVsbCkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWRUb2tlbjogT2JzZXJ2YWJsZTxzdHJpbmcgfCBudWxsPjtcbiAgICAvKipcbiAgICAgKiBPYnNlcnZhYmxlIG9mIHRoZSBjdXJyZW50bHkgc2lnbmVkLWluIHVzZXIgKG9yIG51bGwpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXI6IE9ic2VydmFibGU8ZmlyZWJhc2UuVXNlciB8IG51bGw+O1xuICAgIC8qKlxuICAgICAqIE9ic2VydmFibGUgb2YgdGhlIGN1cnJlbnRseSBzaWduZWQtaW4gdXNlcidzIElkVG9rZW5SZXN1bHQgb2JqZWN0IHdoaWNoIGNvbnRhaW5zIHRoZSBJRCB0b2tlbiBKV1Qgc3RyaW5nIGFuZCBvdGhlclxuICAgICAqIGhlbHBlciBwcm9wZXJ0aWVzIGZvciBnZXR0aW5nIGRpZmZlcmVudCBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgdG9rZW4gYXMgd2VsbCBhcyBhbGwgdGhlIGRlY29kZWQgcGF5bG9hZCBjbGFpbXNcbiAgICAgKiAob3IgbnVsbCkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWRUb2tlblJlc3VsdDogT2JzZXJ2YWJsZTxmaXJlYmFzZS5hdXRoLklkVG9rZW5SZXN1bHQgfCBudWxsPjtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBGaXJlYmFzZU9wdGlvbnMsIG5hbWVPckNvbmZpZzogc3RyaW5nIHwgRmlyZWJhc2VBcHBDb25maWcgfCBudWxsIHwgdW5kZWZpbmVkLCBwbGF0Zm9ybUlkOiBPYmplY3QsIHpvbmU6IE5nWm9uZSk7XG59XG4iXX0=