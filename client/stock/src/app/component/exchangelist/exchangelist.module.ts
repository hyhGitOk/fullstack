import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';;
import { ExchangelistComponent } from './exchangelist.component';
//import { ClickableParentComponent } from '../../render/clickable/clickable.parent.component';
//import { ClickableModule } from '../../render/clickable/clickable.module';
import { FormsModule } from '@angular/forms';
//import { LargeTextShowModule } from 'src/app/render/largeTextShow/largeTextShow.module';
//import { LargeTextShowComponent } from 'src/app/render/largeTextShow/largeTextShow.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //ClickableModule,
    //LargeTextShowModule,
    AgGridModule
  ],
  entryComponents: [],
  declarations: [ExchangelistComponent],
  exports: [ExchangelistComponent],
  providers: []
})
export class ExchangelistModule { }
