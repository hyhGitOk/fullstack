import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router: Router) { }

  // @Input() companyName : string;
  // @Input() ceoName : string;
  // @Input() boardMembers : string;
  // @Input() turnover : string;
  // @Input() description : string;
  // @Input() ipoDate : string;
}
