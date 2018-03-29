import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms'
import { TableService } from '../../../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  //angForm: FormGroup;  
  constructor(private _tableService: TableService) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this._tableService.selectedTable = {
      _id: null,
      code: '',
      seat: null,
      description: ''
    };
  }

  onSubmit(form: NgForm) {
    if(form.value._id == null) {
      this._tableService.postTable(form.value)
        .subscribe(data => {
          this._tableService.getTables();
          this.resetForm(form);
        })
    } else {
      this._tableService.patchTable(form.value._id, form.value)
        .subscribe(data => {
          this._tableService.getTables();
          this.resetForm(form);
        })
    }
  }

}
