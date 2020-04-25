import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-importdata',
  templateUrl: './importdata.component.html',
  styleUrls: ['./importdata.component.css']
})
export class ImportDataComponent extends BaseComponent{

  constructor(private router: Router, public injector: Injector) {
    super(injector);
  }

  errorMessage = "";
  importfile;

  validate(){
    if (!this.importfile){
      this.errorMessage = "please select file.";
    }else{
      this.errorMessage = "";
    }
  }

  uploadFile(){
    this.validate();

    if(!this.errorMessage){
      //upload file to backend.

      this.router.navigate["/login"];
    }
  }

}
