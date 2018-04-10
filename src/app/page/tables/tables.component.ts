import { Component, OnInit, TemplateRef } from '@angular/core';
import { TableService } from '../../services/table.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { Table } from '../../models/table.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  modalRef: BsModalRef;
  isNew: Boolean = true;

  constructor(private _tableService: TableService, private modalService: BsModalService) { }

  ngOnInit() {
    this.resetForm();
    this._tableService.getTables();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.isNew = true;
    this._tableService.selectedTable = new Table();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value._id == null) {
      this._tableService.postTable(form.value)
        .subscribe(data => {
          this._tableService.getTables();
          this.resetForm(form);
          this.modalRef.hide();          
        })
    } else {
      this._tableService.patchTable(form.value._id, form.value)
        .subscribe(data => {
          this._tableService.getTables();
          this.resetForm(form);
          this.modalRef.hide();          
        })
    }
  }

  onEdit(template: TemplateRef<any>, _id: String) {
    this._tableService.getTable(_id);
    this.openModal(template);
    this.isNew = false;
  }

  onDelete(_id) {
    if (confirm('Are you sure to delete this?') === true) {
      this._tableService.deleteTable(_id)
        .subscribe(x => {
          this._tableService.getTables();
        });
    }
  }

}
