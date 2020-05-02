import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent extends BaseComponent implements OnInit {

    @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
    rowData: any;
    columnDefs = [
        {headerName: '#', field: 'num', sortable: true, filter: true, width: 80, checkboxSelection: true },
        {headerName: 'Make', field: 'make', sortable: true, width: 80, filter: true },
        {headerName: 'Model', field: 'model', sortable: true, width: 120, filter: true },
        {headerName: 'Price', field: 'price', sortable: true, width: 200, filter: true }
    ];
	
    constructor(private router: Router, public injector: Injector) {
      super(injector);
    }
	
    ngOnInit() {
        // this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
        this.rowData = [
            { num: '1', make: 'Toyota', model: 'Celica', price: 35000 },
            { num: '2', make: 'Ford', model: 'Mondeo', price: 32000 },
            { num: '3', make: 'Porsche', model: 'Boxter', price: 72000 }
        ];
    }

    getSelectedRows() {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data );
        const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }

    create() {
        this.baseService.operationType = 'create';
		this.router.navigate(['company']);
    }

    update() {
        this.baseService.operationType = 'update';
		this.router.navigate(['company']);
    }
}
