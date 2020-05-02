import { Component, Input, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent extends BaseComponent {

  @Input() exchange : string;
  @Input() brief : string;
  @Input() address : string;
  @Input() remarks : string;
  errorMessage = '';

  constructor(private router: Router, public injector: Injector) {
    super(injector);
  }
  
  validate() {
    if (!this.exchange) {
      this.errorMessage = 'please input stock exchange.';
    } else {
      this.errorMessage = '';
    }
  }

  save() {
    this.validate();

    if (!this.errorMessage) {
      this.router.navigate(['/exchangelist']);
    }
  }

}
