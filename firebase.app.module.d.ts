import { InjectionToken, ModuleWithProviders, NgZone, Version } from '@angular/core';
import firebase from 'firebase/app';
import * as ɵngcc0 from '@angular/core';
export interface FirebaseOptions {
    [key: string]: any;
}
export interface FirebaseAppConfig {
    [key: string]: any;
}
export declare const FIREBASE_OPTIONS: InjectionToken<FirebaseOptions>;
export declare const FIREBASE_APP_NAME: InjectionToken<string | FirebaseAppConfig>;
export declare class FirebaseApp implements Partial<firebase.app.App> {
    name: string;
    options: {};
    analytics: () => firebase.analytics.Analytics;
    auth: () => firebase.auth.Auth;
    database: (databaseURL?: string) => firebase.database.Database;
    messaging: () => firebase.messaging.Messaging;
    performance: () => firebase.performance.Performance;
    storage: (storageBucket?: string) => firebase.storage.Storage;
    delete: () => Promise<void>;
    firestore: () => firebase.firestore.Firestore;
    functions: (region?: string) => firebase.functions.Functions;
    remoteConfig: () => firebase.remoteConfig.RemoteConfig;
}
export declare const VERSION: Version;
export declare function ɵfirebaseAppFactory(options: FirebaseOptions, zone: NgZone, nameOrConfig?: string | FirebaseAppConfig | null): FirebaseApp;
export declare class AngularFireModule {
    static initializeApp(options: FirebaseOptions, nameOrConfig?: string | FirebaseAppConfig): ModuleWithProviders<AngularFireModule>;
    constructor(platformId: Object);
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<AngularFireModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<AngularFireModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UuYXBwLm1vZHVsZS5kLnRzIiwic291cmNlcyI6WyJmaXJlYmFzZS5hcHAubW9kdWxlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ1pvbmUsIFZlcnNpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuZXhwb3J0IGludGVyZmFjZSBGaXJlYmFzZU9wdGlvbnMge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmlyZWJhc2VBcHBDb25maWcge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbn1cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IEZJUkVCQVNFX09QVElPTlM6IEluamVjdGlvblRva2VuPEZpcmViYXNlT3B0aW9ucz47XG5leHBvcnQgZGVjbGFyZSBjb25zdCBGSVJFQkFTRV9BUFBfTkFNRTogSW5qZWN0aW9uVG9rZW48c3RyaW5nIHwgRmlyZWJhc2VBcHBDb25maWc+O1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlyZWJhc2VBcHAgaW1wbGVtZW50cyBQYXJ0aWFsPGZpcmViYXNlLmFwcC5BcHA+IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3B0aW9uczoge307XG4gICAgYW5hbHl0aWNzOiAoKSA9PiBmaXJlYmFzZS5hbmFseXRpY3MuQW5hbHl0aWNzO1xuICAgIGF1dGg6ICgpID0+IGZpcmViYXNlLmF1dGguQXV0aDtcbiAgICBkYXRhYmFzZTogKGRhdGFiYXNlVVJMPzogc3RyaW5nKSA9PiBmaXJlYmFzZS5kYXRhYmFzZS5EYXRhYmFzZTtcbiAgICBtZXNzYWdpbmc6ICgpID0+IGZpcmViYXNlLm1lc3NhZ2luZy5NZXNzYWdpbmc7XG4gICAgcGVyZm9ybWFuY2U6ICgpID0+IGZpcmViYXNlLnBlcmZvcm1hbmNlLlBlcmZvcm1hbmNlO1xuICAgIHN0b3JhZ2U6IChzdG9yYWdlQnVja2V0Pzogc3RyaW5nKSA9PiBmaXJlYmFzZS5zdG9yYWdlLlN0b3JhZ2U7XG4gICAgZGVsZXRlOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIGZpcmVzdG9yZTogKCkgPT4gZmlyZWJhc2UuZmlyZXN0b3JlLkZpcmVzdG9yZTtcbiAgICBmdW5jdGlvbnM6IChyZWdpb24/OiBzdHJpbmcpID0+IGZpcmViYXNlLmZ1bmN0aW9ucy5GdW5jdGlvbnM7XG4gICAgcmVtb3RlQ29uZmlnOiAoKSA9PiBmaXJlYmFzZS5yZW1vdGVDb25maWcuUmVtb3RlQ29uZmlnO1xufVxuZXhwb3J0IGRlY2xhcmUgY29uc3QgVkVSU0lPTjogVmVyc2lvbjtcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1ZmlyZWJhc2VBcHBGYWN0b3J5KG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucywgem9uZTogTmdab25lLCBuYW1lT3JDb25maWc/OiBzdHJpbmcgfCBGaXJlYmFzZUFwcENvbmZpZyB8IG51bGwpOiBGaXJlYmFzZUFwcDtcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFuZ3VsYXJGaXJlTW9kdWxlIHtcbiAgICBzdGF0aWMgaW5pdGlhbGl6ZUFwcChvcHRpb25zOiBGaXJlYmFzZU9wdGlvbnMsIG5hbWVPckNvbmZpZz86IHN0cmluZyB8IEZpcmViYXNlQXBwQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBbmd1bGFyRmlyZU1vZHVsZT47XG4gICAgY29uc3RydWN0b3IocGxhdGZvcm1JZDogT2JqZWN0KTtcbn1cbiJdfQ==