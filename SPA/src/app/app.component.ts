import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Adal5Service } from 'adal-angular5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoggedIn: boolean = false;

  constructor(private adalSvc: Adal5Service, private router: Router) {
    this.adalSvc.init(environment.azureConfig);
  }

  ngOnInit(): void {
    this.adalSvc.handleWindowCallback();
    this.isLoggedIn = this.adalSvc.userInfo.authenticated;
  }

  logout(): void {
    this.adalSvc.logOut();
  }


}
