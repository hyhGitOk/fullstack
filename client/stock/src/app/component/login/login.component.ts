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
        this.loginService
            .authorize(this.email, this.password)
            .then((result: any) => {

				if(result.userObj){
					let user = result.userObj;
					
					if(user){
						
						localStorage.setItem('currentUserId', user.id);
						localStorage.setItem('username', user.name);
						localStorage.setItem('usertype', user.type);
						localStorage.setItem('token', result.token);
						this.errorMessage = '';
						
						if (user.type === '0') {
							this.baseService.isLogin = false;
							this.baseService.isAdmin = true;
						
							this.router.navigate(['/import']);
						} else if (user.type === '1') {
							this.baseService.isLogin = false;
							this.baseService.isAdmin = false;
						
							this.router.navigate(['/ipolist']);
						}
					}
				}else{
					this.errorMessage = result.error;
				}
            });
    }
}
