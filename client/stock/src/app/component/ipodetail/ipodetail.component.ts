import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core';

@Component({
  selector: 'app-ipodetail',
  templateUrl: './ipodetail.component.html',
  styleUrls: ['./ipodetail.component.css']
})
export class IpodetailComponent {

  constructor(private router: Router) { }

  errorMessage = '';
  importfile;

  validate() {
    if (!this.importfile) {
      this.errorMessage = 'please select file.';
    } else {
      this.errorMessage = '';
    }
  }

  uploadFile() {
    this.validate();

    if (!this.errorMessage) {
      // upload file to backend.

      this.router.navigate['/login'];
    }
  }

}
