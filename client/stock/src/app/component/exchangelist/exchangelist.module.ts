import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ExchangelistComponent } from './exchangelist.component';
import { ClickableParentComponent } from '../../render/clickable/clickable.parent.component';
import { ClickableModule } from '../../render/clickable/clickable.module';
import { FormsModule } from '@angular/forms';
// import { LargeTextShowModule } from 'src/app/render/largeTextShow/largeTextShow.module';
import { LargeTextShowComponent } from '../../render/largeTextShow/largeTextShow.component';

import { ExchangelistService } from './exchangelist.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClickableModule,
    //LargeTextShowModule,
    AgGridModule.withComponents([LargeTextShowComponent, ClickableParentComponent])
  ],
  entryComponents: [],
  declarations: [ExchangelistComponent, LargeTextShowComponent],
  exports: [ExchangelistComponent],
  providers: [ExchangelistService]
})
export class ExchangelistModule { }
