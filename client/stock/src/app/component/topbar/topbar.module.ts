/*
 * @description: Topbar Module
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopbarComponent } from './topbar.component';
import { TopbarRoutes } from './topbar.route';

/*module defined*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    TopbarRoutes
  ],
  declarations: [TopbarComponent],
  entryComponents: [],
  providers: [],
  exports: [TopbarComponent]
})
export class TopbarModule { }
