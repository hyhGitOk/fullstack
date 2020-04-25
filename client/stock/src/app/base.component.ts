import { BaseService } from './base.service';
import { Injector } from '@angular/core';

export class BaseComponent{

  public baseService: BaseService = this.injector.get(BaseService);

  constructor(public injector: Injector) {}
}
