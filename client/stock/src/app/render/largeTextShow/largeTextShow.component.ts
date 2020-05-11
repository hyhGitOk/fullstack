import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-largetext-show',
  template: `
    <div [title] = "showValue" class="largetxt-div">
        {{showValue}}
    </div>
    `,
    styles: [
        `.largetxt-div {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
			font-size: 30px;
        }
        `
    ]
})
export class LargeTextShowComponent implements ICellRendererAngularComp {
    params: any;
    public cell: any;
    showValue = '';

    agInit(params: any): void {
        this.initParams(params);
    }

    refresh(params: any): boolean {
        this.initParams(params);
        return true;
    }

    initParams(params) {
        this.showValue = params.value;
    }
}
