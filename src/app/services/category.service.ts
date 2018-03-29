import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {

  private _url = "http://localhost:3000/api/categories";

  selectedCategory: Category; //dipakai buat detail
  categoryList: Category[]; //dipakai buat list

  constructor(private http: Http) { }

  getCategories() {
    this.http.get(this._url)
      .map((data: Response) => {
        return data.json() as Category[];
      }).toPromise().then(x => {
        this.categoryList = x;
      });
    // return this.http.get<Category[]>(this._url);
  }

  postCategory(category: Category) {
    const body = JSON.stringify(category);
    const headerOptions = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post(this._url, body, requestOptions)
                    .map(x => x.json());
  }

  getCategory(_id: String) {
    this.http.get(this._url + '/' + _id)
      .map((data: Response) => {
        return data.json() as Category;
      }).toPromise().then(x => {
        this.selectedCategory = x;
      });
    // return this.http.get<Category[]>(this._url);
  }

  patchCategory(_id, category: Category) {
    const data = JSON.stringify(category);
    const body = [
      { 'propName': 'code', 'value': category.code },
      { 'propName': 'initial', 'value': category.initial },
      { 'propName': 'name', 'value': category.name }
    ]
    const headerOptions = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Patch, headers: headerOptions});
    return this.http.patch(this._url + '/' + _id, body, requestOptions)
                    .map(x => x.json());
  }

  deleteCategory(_id) {
    return this.http.delete(this._url + '/' + _id)
                    .map(x => x.json());
  }

}

// import { Injectable } from '@angular/core';
// import { Category } from '../models/category.model';
// import { HttpClient } from '@angular/common/http';
// import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

// @Injectable()
// export class CategoryService {

//   private _url = "http://localhost:3000/api/categories";

//   selectedCategory: Category;

//   constructor(private http: HttpClient) { }

//   getCategories(): Observable<Category[]> {
//     return this.http.get<Category[]>(this._url);
//   }

// }
