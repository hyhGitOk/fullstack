import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from './base.component';
import { Injector } from '@angular/core';
import { BaseService } from './base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent{
}
