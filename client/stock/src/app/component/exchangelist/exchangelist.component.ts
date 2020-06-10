import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';

import { BaseComponent } from '../../base.component';
import { ClickableParentComponent } from 'src/app/render/clickable/clickable.parent.component';
import { LargeTextShowComponent } from 'src/app/render/largeTextShow/largeTextShow.component';

import { ExchangelistService } from './exchangelist.service';

@Component({
  selector: 'app-exchangelist',
  templateUrl: './exchangelist.component.html',
  styleUrls: ['./exchangelist.component.css']
})
export class ExchangelistComponent extends BaseComponent implements OnInit {

    @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
    rowData = [];

    columnDefs = [
      {headerName: '#', field: 'id', editable: false, width: 50 },
      {headerName: 'Name', field: 'name', editable: false, sortable: true, filter: true, width: 80 },
      {headerName: 'Brief', field: 'brief', editable: false, sortable: true, filter: true, width: 200 },
      {headerName: 'Address', field: 'address', editable: false, sortable: true, filter: true, width: 240 },
      {headerName: 'Remarks', field: 'remarks', editable: false, sortable: true, filter: true, width: 150 },
      {headerName: 'Operation', field: 'clicking', editable: false, pinned: 'right', lockPinned: true, sortable: false,
        cellRendererFramework: ClickableParentComponent, width: 100, minWidth: 100, maxWidth: 100 }
    ];
	
    constructor(private router: Router, public exchangelistService: ExchangelistService, public injector: Injector) {
      super(injector);
    }

    ngOnInit() {
        this.exchangelistService
            .getListData()
            .then((result: any) => {
				if(result.error){
					this.errorMessage = result.error;
				}else{
					this.rowData = result;
				}
            });
		
		this.baseService.table = "exchange";
    }
	
    create() {
        this.baseService.operationType = 'create';
		this.router.navigate(['exchange']);
    }
}
