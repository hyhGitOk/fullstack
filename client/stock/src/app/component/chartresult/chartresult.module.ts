/*
 * @description: Chartresult Module
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';

import { ChartresultComponent } from './chartresult.component';
import { ChartresultRoutes } from './chartresult.route';

/*module defined*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartresultRoutes,
	NgxEchartsModule
  ],
  declarations: [ChartresultComponent],
  entryComponents: [],
  providers: [],
  exports: [ChartresultComponent]
})
export class ChartresultModule { }
