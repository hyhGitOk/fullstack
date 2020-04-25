import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-ag-clickable',
    template: `
        <div class="d-flex">
            <div *ngIf="showEditBtn" class="mr-1 btn-div d-flex justify-content-center align-items-center">
                <img style="width: 15.1px; height: 15.1px;" class="cursor-pointer" src="assets/image/icon/edit.png" (click)="editRow()" (mouseover)="hoverBtn($event, 'edit')" (mouseout)="leaveBtn($event, 'edit')">
            </div>
            <div *ngIf="showDeleteBtn" class="mr-1 btn-div d-flex justify-content-center align-items-center">
                <img style="width: 15.5px; height: 15.9px;" class="cursor-pointer" src="assets/image/icon/delete.png" (click)="deleteRow()" (mouseover)="hoverBtn($event, 'delete')" (mouseout)="leaveBtn($event, 'delete')">
            </div>
            <div *ngIf="showUploadBtn" class="mr-1 btn-div d-flex justify-content-center align-items-center">
                <img style="width: 16px; height: 15.8px;" class="cursor-pointer" src="assets/image/icon/export.png" (click)="uploadRow()" (mouseover)="hoverBtn($event, 'upload')" (mouseout)="leaveBtn($event, 'upload')">
            </div>
            <div *ngIf="showResetBtn" class="mr-1 btn-div d-flex justify-content-center align-items-center">
                <img style="width: 16px; height: 16px;" class="cursor-pointer" src="assets/image/icon/reset.png" (click)="resetRow()" (mouseover)="hoverBtn($event, 'reset')" (mouseout)="leaveBtn($event, 'reset')">
            </div>
        </div>
    `,
    styles: [
        `.btn {
            line-height: 0.5;
            width: 100%;
            font-size: 13px;
        }
        .btn-color {
            color: #727272;
        }
        .btn-div {
            width: 31px;
            height: 31px;
            background: inherit;
            border-radius: 31px;
        }`
    ]
})
export class ClickableComponent {
    @Input() cell: any;
    // @Input() showDeleteBtn: any;
    // @Input() showEditBtn: any;
    // @Input() showUploadBtn: any;
    // @Input() showResetBtn: any;
    @Output() myEdit = new EventEmitter<boolean>();
    @Output() myDelete = new EventEmitter<boolean>();
    @Output() myUpload = new EventEmitter<boolean>();
    @Output() myReset = new EventEmitter<boolean>();

    editRow(): void {
        this.myEdit.emit(this.cell);
    }

    deleteRow(): void {
        this.myDelete.emit(this.cell);
    }

    uploadRow(): void {
        this.myUpload.emit(this.cell);
    }

    resetRow(): void {
        this.myReset.emit(this.cell);
    }

    hoverBtn(event, oper) {
        if (oper === 'edit') {
            event.target.src = 'assets/image/icon/edit-hover.png';
        } else if (oper === 'delete') {
            event.target.src = 'assets/image/icon/delete-hover.png';
        } else if (oper === 'upload') {
            event.target.src = 'assets/image/icon/export-hover.png';
        } else if (oper === 'reset') {
            event.target.src = 'assets/image/icon/reset-hover.png';
        }
        event.target.style.width = '31px';
        event.target.style.height = '31px';
    }

    leaveBtn(event, oper) {
        if (oper === 'edit') {
            event.target.src = 'assets/image/icon/edit.png';
            event.target.style.width = '15.1px';
            event.target.style.height = '15.1px';
        } else if (oper === 'delete') {
            event.target.src = 'assets/image/icon/delete.png';
            event.target.style.width = '15.5px';
            event.target.style.height = '15.9px';
        } else if (oper === 'upload') {
            event.target.src = 'assets/image/icon/export.png';
            event.target.style.width = '16px';
            event.target.style.height = '15.8px';
        } else if (oper === 'reset') {
            event.target.src = 'assets/image/icon/reset.png';
            event.target.style.width = '16px';
            event.target.style.height = '16px';
        }
    }
}
