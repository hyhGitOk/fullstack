import { Component, Input, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent extends BaseComponent implements OnInit {

  id : number;
  exchangename : string;
  brief : string;
  address : string;
  remarks : string;
  errorMessage = '';

  constructor(private router: Router, public injector: Injector) {
    super(injector);
  }

    ngOnInit() {
		if(this.baseService.operationType === 'update'){
			this.id = this.baseService.editData.id;
			this.exchangename = this.baseService.editData.name;
			this.brief = this.baseService.editData.brief;
			this.address = this.baseService.editData.address;
			this.remarks = this.baseService.editData.remarks;
		}
    }
  
  validate() {
    if (!this.exchangename) {
      this.errorMessage = 'please input stock exchange.';
	  return false;
    } else {
      this.errorMessage = '';
	  return true;
    }
  }

  save() {
    if(this.validate()){
		const url = '/admin/stockExchange';
		const exchangeData = {
			id: this.id,
			name: this.exchangename,
			brief: this.brief,
			address: this.address,
			remarks: this.remarks
		}
		if(this.baseService.operationType === 'create'){
			this.baseService.httpPost(url, exchangeData)
				.then((res: Response) => { // Success
						console.log(res);
						if(res instanceof HttpErrorResponse){
							this.errorMessage = new HttpErrorResponse(res).error.error;
						}else{
							this.router.navigate(['/exchangelist']);
						}
					}
				);
		}else if(this.baseService.operationType === 'update'){
			this.baseService.httpPut(url, exchangeData)
				.then((res: Response) => { // Success
						console.log(res);
						if(res instanceof HttpErrorResponse){
							this.errorMessage = new HttpErrorResponse(res).error.error;
						}else{
							this.router.navigate(['/exchangelist']);
						}
					}
				);
		}
	}
  }

}
