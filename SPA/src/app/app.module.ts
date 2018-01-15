import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Adal5Service, Adal5HTTPService } from 'adal-angular5';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ValuesComponent } from './component/values/values.component';

import { AppConfigModule } from './app-config.module';
import { AuthguardService } from './services/authguard.service';
import { ValuesService } from './services/values.service';
import { SecureHttpService } from './services/secure-http.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AppConfigModule
  ],
  providers: [
    AuthguardService,
    SecureHttpService,
    ValuesService,
    Adal5Service,
    {
      provide: Adal5HTTPService,
      useFactory: Adal5HTTPService.factory,
      deps: [Http, Adal5Service]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
