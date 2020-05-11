import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';

import { BaseComponent } from '../../base.component';
import { ClickableParentComponent } from 'src/app/render/clickable/clickable.parent.component';
import { LargeTextShowComponent } from 'src/app/render/largeTextShow/largeTextShow.component';

@Component({
  selector: 'app-exchangelist',
  templateUrl: './exchangelist.component.html',
  styleUrls: ['./exchangelist.component.css']
})
export class ExchangelistComponent extends BaseComponent implements OnInit {

    @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
    rowData: any;

    columnDefs = [
      {headerName: '#', field: 'num', editable: false, width: 50 },
      {headerName: 'Make', field: 'make', editable: false, sortable: true, filter: true },
      {headerName: 'Model', field: 'model', editable: false, sortable: true, filter: true },
      {headerName: 'Price', field: 'price', editable: false, sortable: true, filter: true },
      {headerName: 'Operation', field: 'clicking', editable: false, pinned: 'right', lockPinned: true, sortable: false,
        cellRendererFramework: ClickableParentComponent, width: 100, minWidth: 100, maxWidth: 100 }
    ];
	
    constructor(private router: Router, public injector: Injector) {
      super(injector);
    }

    ngOnInit() {
        // this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
        this.rowData = [
            { num: '1', make: 'Toyota', model: 'Celica', price: 35000, clicking: '' },
            { num: '2', make: 'Ford', model: 'Mondeo', price: 32000, clicking: '' },
            { num: '3', make: 'Porsche', model: 'Boxter', price: 72000, clicking: '' }
        ];
		
		this.baseService.table = "exchange";
    }
	
    create() {
        this.baseService.operationType = 'create';
		this.router.navigate(['exchange']);
    }
}
