import { InjectionToken, NgModule } from '@angular/core';

export class AppConfig {
  baseUrl: string;
}

export const APP_CONSTANTS: AppConfig = {
  baseUrl: 'https://localhost:44313/api/'
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_CONSTANTS
  }]
})
export class AppConfigModule { }
