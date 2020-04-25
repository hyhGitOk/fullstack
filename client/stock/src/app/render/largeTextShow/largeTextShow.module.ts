import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { LargeTextShowComponent } from './largeTextShow.component';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([
		LargeTextShowComponent
    ])
  ],
  declarations: [LargeTextShowComponent],
  exports: [LargeTextShowComponent]
})
export class LargeTextShowModule { }
