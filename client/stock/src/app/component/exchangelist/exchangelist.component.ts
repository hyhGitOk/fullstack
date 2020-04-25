import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { ClickableParentComponent } from 'src/app/render/clickable/clickable.parent.component';
import { LargeTextShowComponent } from 'src/app/render/largeTextShow/largeTextShow.component';

@Component({
  selector: 'app-exchangelist',
  templateUrl: './exchangelist.component.html',
  styleUrls: ['./exchangelist.component.css']
})
export class ExchangelistComponent implements OnInit {

    @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
    rowData: any;
    columnDefs = [
        {headerName: '#', field: 'num', sortable: true, filter: true, checkboxSelection: true },
        {headerName: 'Make', field: 'make', sortable: true, filter: true },
        {headerName: 'Model', field: 'model', sortable: true, filter: true },
        {headerName: 'Price', field: 'price', sortable: true, filter: true }
    ];

    // columnDefs = [
    //   {
    //     headerName: '#',
    //     field: 'num',
    //     editable: false
    //   },
    //   {
    //     headerName: 'Make',
    //     field: 'dbName',
    //     editable: false,
    //     sortable: true,
    //     filter: true
    //     //cellRendererFramework: LargeTextShowComponent
    //   },
    //   {
    //     headerName: 'Model',
    //     field: 'model',
    //     editable: false,
    //     sortable: true,
    //     filter: true
    //     //cellRendererFramework: LargeTextShowComponent
    //   },
    //   {
    //     headerName: 'Price',
    //     field: 'price',
    //     editable: false,
    //     sortable: true,
    //     filter: true
    //     //cellRendererFramework: LargeTextShowComponent
    //   }
    //   // ,
    //   // {
    //   //   headerName: 'Operation',
    //   //   field: 'clicking',
    //   //   editable: false,
    //   //   pinned: 'right',
    //   //   lockPinned: true,
    //   //   sortable: false,
    //   //   cellRendererFramework: ClickableParentComponent,
    //   //   width: 120,
    //   //   minWidth: 120,
    //   //   maxWidth: 120
    //   // }
    // ];


    constructor(private http: HttpClient) { }

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
}
