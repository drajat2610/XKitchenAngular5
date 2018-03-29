import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../services/table.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  //tables = [];

  constructor(private _tableService: TableService) { }

  ngOnInit() {
    this._tableService.getTables();
  }

  onEdit(_id: String) {
    this._tableService.getTable(_id);
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
