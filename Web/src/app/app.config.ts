import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { translationConfig } from './translate.config';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AppInterceptor } from './app.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(translationConfig),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: {} },
  ],
};
