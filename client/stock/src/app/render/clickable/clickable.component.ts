import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-ag-clickable',
    template: `
        <div class="d-flex">
            <div class="mr-1 btn-div d-flex justify-content-center align-items-center">
                <img style="width: 15.1px; height: 15.1px;" class="cursor-pointer" src="assets/image/icon/edit.png" (click)="editRow()" (mouseover)="hoverBtn($event, 'edit')" (mouseout)="leaveBtn($event, 'edit')">
            </div>
            <div class="mr-1 btn-div d-flex justify-content-center align-items-center">
                <img style="width: 15.5px; height: 15.9px;" class="cursor-pointer" src="assets/image/icon/delete.png" (click)="deleteRow()" (mouseover)="hoverBtn($event, 'delete')" (mouseout)="leaveBtn($event, 'delete')">
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
    @Output() myEdit = new EventEmitter<boolean>();
    @Output() myDelete = new EventEmitter<boolean>();

    editRow(): void {
        this.myEdit.emit(this.cell);
    }

    deleteRow(): void {
        this.myDelete.emit(this.cell);
    }

    hoverBtn(event, oper) {
        if (oper === 'edit') {
            event.target.src = 'assets/image/icon/edit-hover.png';
        } else if (oper === 'delete') {
            event.target.src = 'assets/image/icon/delete-hover.png';
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
        }
    }
}
