import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeTextShowComponent } from './largeTextShow.component';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([
      ClickableParentComponent
    ])
  ],
  declarations: [LargeTextShowComponent],
  exports: [LargeTextShowComponent]
})
export class LargeTextShowModule { }
