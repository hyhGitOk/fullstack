import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LoginService } from './login.service';
import { Injector } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent {

    constructor(private router: Router, public loginService: LoginService, public injector: Injector) {
      super(injector);
    }
    email: string;
    password: string;
    errorMessage: string;

    enterLogin(e) {
        const currKey = e.keyCode || e.which || e.charCode;
        if (e.key !== 'process' && currKey === 13) {
            this.login();
        }
    }

    login() {
        // this.loginService
        //     .authorize(this.email, this.password)
        //     .then((result: any) => {
        //         console.log(result);
        //         if (result.data) {
        //             localStorage.setItem('currentUserId', this.email);
        //             localStorage.setItem(
        //                 'username',
        //                 result.data.firstName + ' ' +result.data.lastName
        //             );
        //             localStorage.setItem('currentUser', result.data);
        //             localStorage.setItem('token', result.data.token);
        //             this.loginService.message = '';
        //         } else {
        //             this.router.navigate(['/login']);
        //             this.loginService.message = "Email or Password is invalid.";
        //         }
        //     });

                if (this.email == 'admin@ibm.com' && this.password == '123456') {
                    localStorage.setItem('currentUserId', this.email);
                    localStorage.setItem('username', 'Selina Huang');
                    localStorage.setItem('currentUser', 'admin');
                    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZG1pbkBpYm0uY29tIn0.iTYXbQBDQe5GMhraKDO5OxUjCM1Y-qkP_87HYZ9OweY');
                    this.errorMessage = '';
                    this.baseService.isLogin = false;
                    this.baseService.isAdmin = true;

                    this.router.navigate(['/import']);
                } else if (this.email == 'user@ibm.com' && this.password == '123456') {
                    localStorage.setItem('currentUserId', this.email);
                    localStorage.setItem('username', 'David Lu');
                    localStorage.setItem('currentUser', 'user');
                    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZG1pbkBpYm0uY29tIn0.iTYXbQBDQe5GMhraKDO5OxUjCM1Y-qkP_87HYZ9OweY');
                    this.errorMessage = '';
                    this.baseService.isLogin = false;
                    this.baseService.isAdmin = false;

                    this.router.navigate(['/ipolist']);
                } else {
                    this.errorMessage = 'Email or Password is invalid.';
                }
    }
}
