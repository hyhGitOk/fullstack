/*
 * @description: Importdata Module
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ImportDataComponent } from './importdata.component';
import { ImportdataRoutes } from './importdata.route';

/*module defined*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ImportdataRoutes
  ],
  declarations: [ImportDataComponent],
  entryComponents: [],
  providers: [],
  exports: [ImportDataComponent]
})
export class ImportdataModule { }
