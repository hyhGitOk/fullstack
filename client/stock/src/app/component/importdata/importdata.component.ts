import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-importdata',
  templateUrl: './importdata.component.html',
  styleUrls: ['./importdata.component.css']
})
export class ImportDataComponent extends BaseComponent {

  constructor(private router: Router, public injector: Injector) {
    super(injector);
  }

  errorMessage = '';
  importfile;

  validate() {
    if (!this.importfile) {
      this.errorMessage = 'please select file.';
	  return false;
    } else {
      this.errorMessage = '';
	  return true;
    }
  }

  uploadFile() {
    if(this.validate()){
		const url = '/admin/import';
		
		this.baseService.httpPost(url, this.importfile)
			.then((res: Response) => { // Success
					console.log(res);
					if(res.status){
						this.errorMessage = res.error.error;
					}else{
						this.router.navigate(['/importresult']);
					}
				}
			);
	}
  }

}
