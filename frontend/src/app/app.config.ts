import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore, Store } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authReducer } from './store/auth/auth.reducer';
import { postReducer } from './store/post/post.reducer';
import { AuthEffects } from './store/auth/auth.effects';
import { userReducer } from './store/user/user.reducer';
import { UserEffects } from './store/user/user.effects';
import { AuthApi } from './core/api/auth.api';
import { initAuthFactory } from './core/auth/init-auth.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAuthFactory,
      deps: [Store, AuthApi],
      multi: true,
    },
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideStore({
      posts: postReducer,
      auth: authReducer,
      profile: userReducer,
    }),
    provideEffects([AuthEffects, UserEffects]),
    provideRouter(routes),

    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
