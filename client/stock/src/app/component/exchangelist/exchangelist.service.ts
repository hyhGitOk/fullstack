/*
 * @description: Exchange List Service
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
export class ExchangelistService extends BaseService {
	
    /**
	 * initialize list data.
	 *
	 */
    getListData() {
        const promise = new Promise((resolve) => {
            const url = '/admin/stockExchange';
            this.httpGet(url)
                .then(
                    (res: Response) => { // Success
                        resolve(res);
                    }
                );
        });
        return promise;
    }
}
