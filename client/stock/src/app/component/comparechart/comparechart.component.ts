import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comparechart',
  templateUrl: './comparechart.component.html',
  styleUrls: ['./comparechart.component.css']
})
export class ComparechartComponent {

  constructor(private router: Router) { }

  errorMessage = '';
  importfile;

  validate() {
    if (!this.importfile) {
      this.errorMessage = 'please input.';
    } else {
      this.errorMessage = '';
    }
  }

  generate() {
    this.validate();

    if (!this.errorMessage) {
      // upload file to backend.

      this.router.navigate['/companylist'];
    }
  }

}
