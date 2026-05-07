import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authReducer } from './store/auth/auth.reducer';
import { AuthEffects } from './store/auth/auth.effects';
import { userReducer } from './store/user';
import { UserEffects } from './store/user';
//import { Store } from './store/app.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideEffects([AuthEffects, UserEffects]),
    provideRouter(routes),
    provideStore({ auth: authReducer, user: userReducer }),
    //provideStore({Store}),

    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
