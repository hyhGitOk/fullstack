import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comparechart',
  templateUrl: './comparechart.component.html',
  styleUrls: ['./comparechart.component.css']
})
export class ComparechartComponent {

  constructor(private router: Router) { }

  @Input() company : string;
  @Input() sector : string;
  @Input() exchange : string;
  @Input() companyName : string;
  @Input() fromDate : string;
  @Input() toDate : string;
  errorMessage = '';

  validate() {
    if (!this.company) {
      this.errorMessage = 'please select company.';
    } else {
      this.errorMessage = '';
    }
  }

  generate() {
    this.validate();

    if (!this.errorMessage) {
      this.router.navigate(['/chartresult']);
    }
  }

}
