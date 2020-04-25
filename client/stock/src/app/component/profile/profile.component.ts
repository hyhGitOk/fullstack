import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  username = "";
  email = "";
  
  ngOnInit() {
	  this.username = "hyh";
	  this.email = "admin@ibm.com";
  }

}
