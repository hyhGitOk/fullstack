import { Component, Input, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent extends BaseComponent {
  
  constructor(private router: Router, public injector: Injector) {
    super(injector);
  }

  @Input() companyName : string;
  @Input() ceoName : string;
  @Input() boardMembers : string;
  @Input() turnover : string;
  @Input() description : string;
  @Input() ipoDate : string;
  errorMessage = '';

  validate() {
    if (!this.companyName) {
      this.errorMessage = 'please input company name.';
    } else {
      this.errorMessage = '';
    }
  }

  save() {
    this.validate();

    if (!this.errorMessage) {
      // upload file to backend.

      this.router.navigate(['/companylist']);
    }
  }

}
