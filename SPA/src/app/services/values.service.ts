import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { APP_CONFIG, AppConfig } from '../app-config.module';
import { Adal5Service } from 'adal-angular5';
import { SecureHttpService } from './secure-http.service';

@Injectable()
export class ValuesService extends SecureHttpService<string> {

  constructor(http: Http, @Inject(APP_CONFIG) appConfig: AppConfig, adalService: Adal5Service) {
    super(http, appConfig.baseUrl + 'values', adalService);
  }

}

