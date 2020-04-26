import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  constructor(private router: Router) { }

  @Input() companyName : string;
  @Input() ceoName : string;
  @Input() boardMembers : string;
  @Input() turnover : string;
  @Input() description : string;
  @Input() ipoDate : string;
  errorMessage = '';

  validate() {
    if (!this.companyName) {
      this.errorMessage = 'please input.';
    } else {
      this.errorMessage = '';
    }
  }

  uploadFile() {
    this.validate();

    if (!this.errorMessage) {
      // upload file to backend.

      this.router.navigate['/companylist'];
    }
  }

}
