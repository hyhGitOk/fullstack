/*
 * @description: Company Module
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompanyComponent } from './company.component';
import { CompanyRoutes } from './company.route';

/*module defined*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    CompanyRoutes
  ],
  declarations: [CompanyComponent],
  entryComponents: [],
  providers: [],
  exports: [CompanyComponent]
})
export class CompanyModule { }
