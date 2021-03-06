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
export class LoginService extends BaseService {
    /*variables defined*/
    message = '';
	
    /**
	 * Authorize user email&password.
	 *
	 * Input(email:user email; password:password)
	 */
    authorize(email, password) {
        const promise = new Promise((resolve) => {
            const url = `auth/login?email=${email}&password=${password}`;
            this.httpGetWithoutAuth(url)
                .then(
                    (res: Response) => { // Success
                        resolve(res);
                    }
                );
        });
        return promise;
    }
}
