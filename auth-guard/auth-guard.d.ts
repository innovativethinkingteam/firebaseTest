import { NgZone } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, UnaryFunction } from 'rxjs';
import firebase from 'firebase/app';
import { FirebaseOptions, FirebaseAppConfig } from '@angular/fire';
import * as ɵngcc0 from '@angular/core';
export declare type AuthPipeGenerator = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => AuthPipe;
export declare type AuthPipe = UnaryFunction<Observable<firebase.User | null>, Observable<boolean | any[]>>;
export declare const loggedIn: AuthPipe;
export declare class AngularFireAuthGuard implements CanActivate {
    private router;
    authState: Observable<firebase.User | null>;
    constructor(options: FirebaseOptions, nameOrConfig: string | FirebaseAppConfig | null | undefined, zone: NgZone, router: Router);
    canActivate: (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => Observable<boolean | import("@angular/router").UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularFireAuthGuard, [null, { optional: true; }, null, null]>;
}
export declare const canActivate: (pipe: AuthPipeGenerator) => {
    canActivate: (typeof AngularFireAuthGuard)[];
    data: {
        authGuardPipe: AuthPipeGenerator;
    };
};
export declare const isNotAnonymous: AuthPipe;
export declare const idTokenResult: import("rxjs").OperatorFunction<firebase.User, any>;
export declare const emailVerified: AuthPipe;
export declare const customClaims: UnaryFunction<Observable<firebase.User>, Observable<any>>;
export declare const hasCustomClaim: (claim: string) => AuthPipe;
export declare const redirectUnauthorizedTo: (redirect: any[]) => AuthPipe;
export declare const redirectLoggedInTo: (redirect: any[]) => AuthPipe;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5kLnRzIiwic291cmNlcyI6WyJhdXRoLWd1YXJkLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBVbmFyeUZ1bmN0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IEZpcmViYXNlT3B0aW9ucywgRmlyZWJhc2VBcHBDb25maWcgfSBmcm9tICdAYW5ndWxhci9maXJlJztcbmV4cG9ydCBkZWNsYXJlIHR5cGUgQXV0aFBpcGVHZW5lcmF0b3IgPSAobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpID0+IEF1dGhQaXBlO1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBBdXRoUGlwZSA9IFVuYXJ5RnVuY3Rpb248T2JzZXJ2YWJsZTxmaXJlYmFzZS5Vc2VyIHwgbnVsbD4sIE9ic2VydmFibGU8Ym9vbGVhbiB8IGFueVtdPj47XG5leHBvcnQgZGVjbGFyZSBjb25zdCBsb2dnZWRJbjogQXV0aFBpcGU7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBbmd1bGFyRmlyZUF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBwcml2YXRlIHJvdXRlcjtcbiAgICBhdXRoU3RhdGU6IE9ic2VydmFibGU8ZmlyZWJhc2UuVXNlciB8IG51bGw+O1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucywgbmFtZU9yQ29uZmlnOiBzdHJpbmcgfCBGaXJlYmFzZUFwcENvbmZpZyB8IG51bGwgfCB1bmRlZmluZWQsIHpvbmU6IE5nWm9uZSwgcm91dGVyOiBSb3V0ZXIpO1xuICAgIGNhbkFjdGl2YXRlOiAobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpID0+IE9ic2VydmFibGU8Ym9vbGVhbiB8IGltcG9ydChcIkBhbmd1bGFyL3JvdXRlclwiKS5VcmxUcmVlPjtcbn1cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IGNhbkFjdGl2YXRlOiAocGlwZTogQXV0aFBpcGVHZW5lcmF0b3IpID0+IHtcbiAgICBjYW5BY3RpdmF0ZTogKHR5cGVvZiBBbmd1bGFyRmlyZUF1dGhHdWFyZClbXTtcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhHdWFyZFBpcGU6IEF1dGhQaXBlR2VuZXJhdG9yO1xuICAgIH07XG59O1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgaXNOb3RBbm9ueW1vdXM6IEF1dGhQaXBlO1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgaWRUb2tlblJlc3VsdDogaW1wb3J0KFwicnhqc1wiKS5PcGVyYXRvckZ1bmN0aW9uPGZpcmViYXNlLlVzZXIsIGFueT47XG5leHBvcnQgZGVjbGFyZSBjb25zdCBlbWFpbFZlcmlmaWVkOiBBdXRoUGlwZTtcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IGN1c3RvbUNsYWltczogVW5hcnlGdW5jdGlvbjxPYnNlcnZhYmxlPGZpcmViYXNlLlVzZXI+LCBPYnNlcnZhYmxlPGFueT4+O1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgaGFzQ3VzdG9tQ2xhaW06IChjbGFpbTogc3RyaW5nKSA9PiBBdXRoUGlwZTtcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IHJlZGlyZWN0VW5hdXRob3JpemVkVG86IChyZWRpcmVjdDogYW55W10pID0+IEF1dGhQaXBlO1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgcmVkaXJlY3RMb2dnZWRJblRvOiAocmVkaXJlY3Q6IGFueVtdKSA9PiBBdXRoUGlwZTtcbiJdfQ==