import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../../../../shared/services/authentication.service";
import {User} from "../../../../shared/models/user";

@Component({
  selector: 'webshop-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  loginFailed: boolean = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {

    this.router.navigate(['/shop/account']);
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
              this.loginFailed = false;
              this.router.navigate(['/shop/account']);
            },
            error => {
              this.loginFailed = true;
            });

  }
}
