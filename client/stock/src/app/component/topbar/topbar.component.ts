import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent extends BaseComponent {

  public username = localStorage.getItem('username');

  constructor(private router: Router, public injector: Injector) {
    super(injector);
  }

  logout(){
    localStorage.removeItem('currentUserId');
    localStorage.removeItem('username');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.baseService.isLogin = true;
    this.baseService.isAdmin = true;

    this.router.navigate(['/login']);
  }
}
