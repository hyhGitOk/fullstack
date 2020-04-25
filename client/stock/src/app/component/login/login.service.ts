/*
 * @description: Login Service
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BaseService } from 'src/app/base.service';

@Injectable()
export class LoginService extends BaseService{
    /*variables defined*/
    message = '';

    // constructor(private http: HttpClient, public injector: Injector) {
    //     super(http, injector);
    // }
    /**
	 * Authorize user email&password.
	 *
	 * Input(email:user email; password:password)
	 */
    authorize(email, password) {
        const promise = new Promise((resolve) => {
            const url = this.baseApiUrl + '/security/login';
            this.httpPostWithNoAuth(url, { email: email, password: password })
                .then(
                    (res: Response) => { // Success
                        resolve(res);
                    }
                ).catch((err: HttpErrorResponse) => {
                    console.log(err);
                    if (err.error.code && err.error.code === 'ETIMEDOUT') {
                        this.message = 'Connection lost!';
                    } else {
                        this.message = 'Email or Password is invalid!';
                    }
                    this.router.navigate(['/login']);
                });
        });
        return promise;
    }
}
