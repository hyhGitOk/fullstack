import {Component, Injector} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
// import { BaseComponent } from 'src/app/component/base.component'

// both this and the parent component could be folded into one component as they're both simple, but it illustrates how
// a fuller example could work
@Component({
    selector: 'app-clickable-cell',
    template: `
        <app-ag-clickable (myEdit)="myEdit($event)" (myDelete)="myDelete($event)" (myUpload)="myUpload($event)" (myReset)="myReset($event)" [cell]="cell" [showDeleteBtn]="showDeleteBtn" [showEditBtn]="showEditBtn" [showUploadBtn]="showUploadBtn" [showResetBtn]="showResetBtn" ></app-ag-clickable>
    `
})
export class ClickableParentComponent implements ICellRendererAngularComp {

    // public migrationService: MigrationService = this.injector.get(MigrationService);
    // public newProjectService: NewProjectService = this.injector.get(NewProjectService);
    // public tableEditService: TableEditService = this.injector.get(TableEditService);
    // public roleEditService: RoleEditService = this.injector.get(RoleEditService);
    // public groupEditService: GroupEditService = this.injector.get(GroupEditService);

    params: any;
    cell: any;
    showEditBtn: any;
    showDeleteBtn: any;
    showUploadBtn: any;
    showResetBtn: any;
    migrationProgressInterval;

    constructor(public injector: Injector) { }

    agInit(params: any): void {
        this.params = params;
        this.cell = {row: params.value, col: params.colDef.headerName};
        this.showEditBtn = true;
        this.showDeleteBtn = true;
        this.showUploadBtn = true;
        this.showResetBtn = true;
    }

    editProj() {
        // this.newProjectService.operationType = 'edit';
        // this.newProjectService.rowData = JSON.parse(JSON.stringify(this.params.data));
        // this.newProjectService.popupDialog = this.dialogRef.open(NewProjectComponent, {
        //     autoFocus: false,
        //     width: '800px',
        //     panelClass: 'transparent',
        //     id: 'mydialog'
        // });
    }

    editField() {
        // this.fieldEditService.rowData = JSON.parse(JSON.stringify(this.params.data));;
        // this.fieldEditService.operationType = 'edit';
        // this.fieldEditService.popupDialog = this.dialogRef.open(FieldEditComponent, {
        //     autoFocus: false,
        //     width: '800px',
        //     panelClass: 'transparent',
        //     id: 'mydialog'
        // });
    }

    public myEdit(cell: any): void {
        console.log(this.params.data);
        // if (this.homeService.selectTable === 'projects') {
        //     this.editProj();
        // } else if (this.homeService.selectModule === 'projects' && this.homeService.selectTable === 'ALLTABLES') {
        //     this.editTable();
        // } else if (this.homeService.selectTable.substr(0,3) === this.elemIdPrefix.TableDes) {
        //     this.editField();
        // } else if (this.homeService.selectTable === 'notes') {
        //     this.editNotesDB();
        // } else if (this.homeService.selectTable === 'ROLES') {
        //     this.editRole();
        // } else if (this.homeService.selectTable === 'GROUPS') {
        //     this.editGroup();
        // } else if (this.homeService.selectTable === 'USERS') {
        //     this.editUser();
        // }
    }

    public myDelete(cell: any): void {
      console.log('deleteData:' + this.params.data);
      // if (this.homeService.selectTable === 'notes' && this.params.data['dbId']) {
      //   this.confirmDeleteNotesDB();
      // } else if (this.homeService.selectTable === 'projects' && this.params.data['projId']) {
      //     this.confirmDeleteProj();
      // } else if (this.params.data['elementId']) {
      //     let confimMsg = '';
      //     confimMsg = this.homeService.langJson['NEEDSUBSCRIBE']['CONFIRMMSG'];
      //     this.showConfirm(confimMsg);
      //     this.confirmService.confirmDialog.afterClosed().subscribe(result => {
      //       if (this.confirmService.confirmOper === 'ok') {
      //         this.showWait();
      //         if (this.homeService.selectModule === 'projects' && this.homeService.selectTable === 'ALLTABLES') {
      //           this.deleteTable();
      //         } else if (this.homeService.selectTable.substr(0,3) === this.elemIdPrefix.TableDes) {
      //           this.deleteTableField();
      //         } else if (this.homeService.selectModule === 'projects' && this.homeService.selectTable === 'USERS') {
      //           this.deleteUser();
      //         } else if (this.homeService.selectModule === 'projects' && this.homeService.selectTable === 'GROUPS') {
      //           this.deleteGroup();
      //         } else if (this.homeService.selectModule === 'projects' && this.homeService.selectTable === 'ROLES') {
      //           this.deleteRole();
      //         }
      //       }
      //     });
      // }
    }

    confirmDeleteNotesDB() {
      // this.homeService.getProjectConutByNotesDBId(this.params.data['dbId']).then((res: any) => {
      //   if (res.data && res.data > 0) {
      //     this.showAlertMsg(this.homeService.langJson['NEEDSUBSCRIBE']['PROJNOTES']);
      //   } else {
      //     this.showConfirm(this.homeService.langJson['NEEDSUBSCRIBE']['CONFIRMMSG']);
      //     this.confirmService.confirmDialog.afterClosed().subscribe(result => {
      //       if (this.confirmService.confirmOper === 'ok') {
      //         this.showWait();
      //         this.deleteNotesDB();
      //       }
      //     })
      //   }
      // })
    }


    confirmDeleteProj() {
      // let confimMsg = '';
      //     confimMsg = this.homeService.langJson['NEEDSUBSCRIBE']['CONFIRMMSG'];
      //   this.showConfirm(confimMsg);
      //   this.confirmService.confirmDialog.afterClosed().subscribe(result => {
      //     if (this.confirmService.confirmOper === 'ok') {
      //       this.showWait();
      //       this.deleteProj();
      //     }
      //   });
    }

    deleteProj() {
      // let showMsg = '';
      // this.homeService.deleteProj(this.params.data['projId']).then((res: any) => {
      //   showMsg = this.setReturnMsg(res, 'DELETEOK');
      //   if (res['statusCode'] === '001') {
      //     this.updateRememberList('projId', this.params.data, 'delete');
      //     this.updateListData('projId', this.params.data, 'delete');
      //     if (this.params.data['menuShowFlag'] === 1) {
      //       this.homeService.sideMenuList = this.homeService.sideMenuList.filter(item => item['projId'] !== this.params.data['projId']);
      //     }
      //   }
      //   this.closeWait();
      //   if (showMsg !== '') {
      //     this.dialogRef.closeAll();
      //     this.showAlertMsg(showMsg);
      //   }
      // })
    }

    deleteTableField() {
      // let showMsg = '';
      // this.homeService.deleteTableField(this.params.data['elementId']).then((res: any) => {
      //   showMsg = this.setReturnMsg(res, 'DELETEOK');
      //   if (res['statusCode'] === '001') {
      //     this.updateListData('elementId', this.params.data, 'delete');
      //   }
      //   this.closeWait();
      //   if (showMsg !== '') {
      //     this.dialogRef.closeAll();
      //     this.showAlertMsg(showMsg);
      //   }
      // })
    }

    public myUpload(cell: any): void {
      // if (this.checkInprogress(this.params.data)) {
      //   this.showProcess();
      //   this.clearIntervalAfterCloseProcess();
      //   this.migrationProgressInterval = setInterval(() => {
      //     this.getProcess(this.params.data['projId']);
      //   }, this.intervalTime);
      // } else {
      //   console.log(this.params.data);
      //   this.migrationService.rowData = this.params.data;
      //   this.dialogRef.open(MigrationComponent, {
      //     autoFocus: false,
      //     width: '800px',
      //     panelClass: 'transparent',
      //     id: 'mydialog'
      //   });
      // }
    }

    clearIntervalAfterCloseProcess() {
      // this.processService.processDialog.afterClosed().subscribe(result => {
      //   if (this.migrationProgressInterval) {
      //     clearInterval(this.migrationProgressInterval);
      //   }
      // });
    }

    getProcess(processId) {
      // this.processService.getProcess(processId).then((proRes: any) => {
      //   if (proRes.data) {
      //     this.processService.progress = proRes.data.currentStep;
      //     this.processService.showMsg = proRes.data.message;
      //     this.processService.status = proRes.data.status;
      //     if (proRes.data.status === 'done') {
      //       if (this.migrationProgressInterval) {
      //           clearInterval(this.migrationProgressInterval);
      //       }
      //     }
      //     if (proRes.data.status === 'error' && this.migrationProgressInterval) {
      //         clearInterval(this.migrationProgressInterval);
      //     }
      //     if (proRes.data.status === 'error' || proRes.data.status === 'done' && this.processService.processDialog) {
      //       this.processService.processDialog.afterClosed().subscribe(result => {
      //         this.migrationService.inProgressProj = this.migrationService.inProgressProj.filter(item => item !== processId);
      //       });
      //     }
      //   } else {
      //     this.processService.status ='error';
      //     this.processService.showMsg = this.homeService.langJson['NEEDSUBSCRIBE']['NOPROGRESS'];
      //     if (this.migrationProgressInterval) {
      //       clearInterval(this.migrationProgressInterval);
      //     }
      //     if (this.processService.processDialog) {
      //       this.processService.processDialog.afterClosed().subscribe(result => {
      //         this.migrationService.inProgressProj = this.migrationService.inProgressProj.filter(item => item !== processId);
      //       });
      //     }
      //   }
      // })
    }

    public myReset(cell: any): void {
      console.log('resetData:' + this.params.data);
      // this.showConfirm(this.homeService.langJson['NEEDSUBSCRIBE']['CONFIRMRESET']);
      // this.confirmService.confirmDialog.afterClosed().subscribe(result => {
      //     if (this.confirmService.confirmOper === 'ok') {
      //       this.showWait();
      //       this.homeService.resetProj(this.params.data['projId']).then((res: any) => {
      //         if (res['statusCode'] === '001') {
      //           this.updateRememberList('projId', this.params.data, 'edit');
      //           const tempList = this.homeService.sideMenuList.filter(item => item['projId'] === this.params.data['projId']);
      //           if (tempList.length > 0) {
      //             this.updateSideMenu('projId', this.params.data );
      //           } else {
      //             this.homeService.sideMenuList.push(this.params.data);
      //             this.sortList(this.homeService.sideMenuList, this.getSortField(this.homeService.selectModule));
      //           }
      //           const showMsg = this.setReturnMsg(res, 'RESETOK');
      //           this.showAlertMsg(showMsg);
      //           this.alertMessageService.alertMsgDialog.afterClosed().subscribe(result => {
      //             // change left side bar
      //             this.goToProj(this.params.data['projId'], this.params.data['projName']);
      //           });
      //         }
      //       })
      //     }
      // });
    }


    refresh(): boolean {
        return false;
    }

    checkInprogress(rowData) {
      // if (this.migrationService.inProgressProj.indexOf(rowData['projId']) !== -1) {
      //   return true;
      // }
      return false;
    }
}
