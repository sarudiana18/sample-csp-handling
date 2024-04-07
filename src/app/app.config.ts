import {ApplicationConfig, CSP_NONCE} from '@angular/core';
import {provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {secureApiInterceptor} from './secure-api.interceptor';

const nonce = (
  document.querySelector('meta[name="CSP_NONCE"]') as HTMLMetaElement
)?.content;

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptors([secureApiInterceptor])),
    {
      provide: CSP_NONCE,
      useValue: nonce,
    },]
};
