import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  constructor(private router: Router) { }

  errorMessage = "";
  importfile;

  validate(){
    if (!this.importfile){
      this.errorMessage = "please input.";
    }else{
      this.errorMessage = "";
    }
  }

  uploadFile(){
    this.validate();

    if(!this.errorMessage){
      //upload file to backend.

      this.router.navigate["/companylist"];
    }
  }

}
