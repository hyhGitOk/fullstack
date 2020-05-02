/*
 * @description: Companylist Module
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgGridModule } from 'ag-grid-angular';

import { CompanylistComponent } from './companylist.component';

/*module defined*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AgGridModule
  ],
  declarations: [CompanylistComponent],
  entryComponents: [],
  providers: [],
  exports: [CompanylistComponent]
})
export class CompanylistModule { }
