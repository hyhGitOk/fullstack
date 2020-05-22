import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Injectable, Injector } from '@angular/core';
// import { MatDialog} from '@angular/material';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { AlertMessageComponent } from './module/alertMessage/component/alertMessage.component';
// import { AlertMessageService } from './module/alertMessage/service/alertMessage.service';

@Injectable()
export class BaseService {
    inject: Injector;
    router: Router = this.injector.get(Router);
    //baseApiUrl = 'api';
    isLogin = true;
    isAdmin = true;
    operationType = 'create';
    topbarState = '1';
	table = "company";
	editData: any;

    constructor(private http: HttpClient, public injector: Injector) {}

    generateHeader() {
        return new HttpHeaders({
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
        });
    }

    generateHeaderWithoutAuth() {
        return new HttpHeaders({
            'Authorization': 'Basic YWRtaW46MTIzNDU2',
            'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
        });
    }

    httpPost(url, data) {
        const promise = new Promise((resolve) => {
            url = environment.serverUrl + url;
            console.log(url);
            this.http.post(this.dealWithUrl(url), data, {
                headers: this.generateHeader()
            })
                .toPromise()
                .then(
                    (res: Response) => { // Success
                        console.log(res);
                        resolve(res);
                    }
                ).catch((err: HttpErrorResponse) => {
                    resolve(err);
                });
        });
        return promise;
    }

    httpGetWithoutAuth(url) {
        const promise = new Promise((resolve) => {
            url = environment.serverUrl + url;
            console.log(url);
            this.http.get(url,
				{headers: this.generateHeaderWithoutAuth()}
			)
                .toPromise()
                .then(
                    (res: any[]) => {
                        console.log("res is:");
                        console.log(res);
                        resolve(res);
                    }
                ).catch((err: HttpErrorResponse) => {
                    resolve(err);
                });
        });
        return promise;
    }

    httpGet(url) {
        const promise = new Promise((resolve) => {
            url = environment.serverUrl + url;
            console.log(url);
            this.http.get(this.dealWithUrl(url), {
                headers: this.generateHeader()
            })
                .toPromise()
                .then(
                    (res: any[]) => {
                        console.log(res);
                        resolve(res);
                    }
                ).catch((err: HttpErrorResponse) => {
                    const errReturn = {
                        data: []
                    };
                    resolve(errReturn);
                });
        });
        return promise;
    }

    httpPostWithNoAuth(url, data) {
        const promise = new Promise((resolve) => {
            url = environment.serverUrl + url;
            console.log(url);
            this.http.post(this.dealWithUrl(url), data, {
                headers: null  //this.generateHeaderWithoutAuth()
            })
                .toPromise()
                .then(
                    (res: Response) => {
                        console.log(res);
                        resolve(res);
                    }
                ).catch((err: HttpErrorResponse) => {
                    resolve(err);
                });
        });
        return promise;
    }

    httpPut(url, data) {
        const promise = new Promise((resolve) => {
            url = environment.serverUrl + url;
            console.log(url);
            this.http.put(this.dealWithUrl(url), data, {
                headers: this.generateHeader()
            })
                .toPromise()
                .then(
                    (res: Response) => { // Success
                        console.log(res);
                        resolve(res);
                    }
                ).catch((err: HttpErrorResponse) => {
                    resolve(err);
                });
        });
        return promise;
    }

    httpDelete(url) {
        const promise = new Promise((resolve) => {
            url = environment.serverUrl + url;
            console.log(url);
            this.http.delete(this.dealWithUrl(url), {
                headers: this.generateHeader()
            })
                .toPromise()
                .then(
                    (res: any[]) => { // Success
                        console.log(res);
                        resolve(res);
                    }
                ).catch((err: HttpErrorResponse) => {
                    resolve(err);
                });
        });
        return promise;
    }

    redirectToLogin() {
        localStorage.removeItem('token');
        localStorage.removeItem('usertype');
        this.router.navigate(['/login']);
    }

    dealWithUrl(url) {
        url = url.replace(/\%/g, '%25');
        url = url.replace(/\#/g, '%23');
        url = url.replace(/\&/g, '%26');
        url = url.replace(/\+/g, '%2B');
        url = url.replace(/\?/g, '%3F');
        url = url.replace(/\=/g, '%3D');
        return url;
    }

}
