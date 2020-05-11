import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ClickableComponent } from './clickable.component';
import { ClickableParentComponent } from './clickable.parent.component';
import { ConfirmDialogComponent } from '../../component/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from '../../component/confirm-dialog/confirm-dialog.service';

@NgModule({
  imports: [CommonModule, AgGridModule.withComponents([ClickableParentComponent])],
  declarations: [ClickableComponent, ClickableParentComponent, ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
  providers: [ ConfirmDialogService ],
  exports: [ClickableParentComponent]
})
export class ClickableModule { }
