/*
 * @description: Importresult Module
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ImportresultComponent } from './importresult.component';
import { ImportresultRoutes } from './importresult.route';

/*module defined*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ImportresultRoutes
  ],
  declarations: [ImportresultComponent],
  entryComponents: [],
  providers: [],
  exports: [ImportresultComponent]
})
export class ImportresultModule { }
