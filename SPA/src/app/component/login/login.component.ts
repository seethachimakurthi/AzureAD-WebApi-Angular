import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adal5Service } from 'adal-angular5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adalSvc: Adal5Service
  ) { }

  ngOnInit() {
    this.login();
  }

  login(): void {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if (this.adalSvc.userInfo.authenticated) {
      this.router.navigate([returnUrl]);
    } else {
      this.adalSvc.login();
    }
  }

}
