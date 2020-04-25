import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ClickableComponent } from './clickable.component';
import { ClickableParentComponent } from './clickable.parent.component';


@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([
      ClickableParentComponent
    ])
  ],
  declarations: [ClickableComponent, ClickableParentComponent],
  entryComponents: [],
  exports: [
      ClickableParentComponent
  ]
})
export class ClickableModule { }
