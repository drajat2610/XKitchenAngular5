import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private _url = "http://localhost:3000/api/users";

  selectedUser: User;
  userList: User[];

  constructor(private http: Http) { }

  getUsers() {
    this.http.get(this._url)
      .map((data: Response) => {
        return data.json() as User[];
      }).toPromise().then(x => {
        this.userList = x;
      });
  }

  postUser(user: User) {
    const body = JSON.stringify(user);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this._url, body, requestOptions)
      .map(x => x.json());
  }
  
  getUser(_id: String) {
    this.http.get(this._url + '/' + _id)
      .map((data: Response) => {
        return data.json() as User;
      }).toPromise().then(x => {
        this.selectedUser = x;
      });
  }

  patchUser(_id, user: User) {
    const data = JSON.stringify(user);
    const body = [
      { 'propName': 'userId', 'value': user.userId },
      { 'propName': 'password', 'value': user.password },
      { 'propName': 'badgeId', 'value': user.badgeId },
      { 'propName': 'nick', 'value': user.nick },
      { 'propName': 'fullName', 'value': user.fullName }
    ]
    const headerOptions = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Patch, headers: headerOptions});
    return this.http.patch(this._url + '/' + _id, body, requestOptions)
                    .map(x => x.json());
  }

  deleteUser(_id) {
    return this.http.delete(this._url + '/' + _id)
                    .map(x => x.json());
  }
}
