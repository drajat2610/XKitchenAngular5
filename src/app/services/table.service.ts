import { Injectable } from '@angular/core';
import { Table } from '../models/table.model';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TableService {

  private _url = "http://localhost:3000/api/tables"

  selectedTable: Table;
  tableList: Table[];

  constructor(private http: Http) { }

  getTables() {
    this.http.get(this._url)
      .map((data: Response) => {
        return data.json() as Table[];
      }).toPromise().then(x => {
        this.tableList = x;
      });
  }

  postTable(table: Table) {
    const body = JSON.stringify(table);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this._url, body, requestOptions)
      .map(x => x.json());
  }

  getTable(_id: String) {
    this.http.get(this._url + '/' + _id)
      .map((data: Response) => {
        return data.json() as Table;
      }).toPromise().then(x => {
        this.selectedTable = x;
      });
  }

  patchTable(_id, table: Table) {
    const data = JSON.stringify(table);
    const body = [
      { 'propName': 'code', 'value': table.code },
      { 'propName': 'seat', 'value': table.seat },
      { 'propName': 'description', 'value': table.description }
    ]
    const headerOptions = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Patch, headers: headerOptions});
    return this.http.patch(this._url + '/' + _id, body, requestOptions)
                    .map(x => x.json());
  }

  deleteTable(_id) {
    return this.http.delete(this._url + '/' + _id)
                    .map(x => x.json());
  }
}
