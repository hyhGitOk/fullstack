import {Component, Injector} from '@angular/core';
import { Router } from '@angular/router';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import { BaseComponent } from '../../base.component';
import { ConfirmDialogService } from '../../component/confirm-dialog/confirm-dialog.service';

// both this and the parent component could be folded into one component as they're both simple, but it illustrates how
// a fuller example could work
@Component({
    selector: 'app-clickable-cell',
    template: `
        <app-ag-clickable (myEdit)="myEdit($event)" (myDelete)="myDelete($event)" [cell]="cell" ></app-ag-clickable>
    `
})
export class ClickableParentComponent extends BaseComponent implements ICellRendererAngularComp {
	
    params: any;
    cell: any;

    constructor(private router: Router, private confirmDialogService: ConfirmDialogService,
		public injector: Injector) {
		super(injector);
	}

    agInit(params: any): void {
        this.params = params;
        this.cell = {row: params.value, col: params.colDef.headerName};
		//console.log(this.cell);
    }

    public myEdit(cell: any): void {
        console.log(this.params.data);
		
		this.baseService.operationType = 'update';
		this.baseService.editData = JSON.parse(JSON.stringify(this.params.data));
		this.router.navigate([this.baseService.table]);
    }

    public myDelete(cell: any): void {
		console.log("deleting...");
		console.log(this.cell);
        console.log(this.params);
		this.confirmDialogService.confirm('Confirmation', 'Do you confirm to delete this data?')
			.then((confirmed) => {
				//console.log('User confirmed:', confirmed);
				if (confirmed) {
					//Call DB delete, then refresh
				}
			}).catch(() => {
				console.log('User dismissed the dialog');
			})
    }
	
    refresh(): boolean {
        return false;
    }
}
