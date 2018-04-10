import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Category } from '../models/category.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  private _url = "https://thawing-springs-66958.herokuapp.com/api/products/";
  private categories_url = "https://thawing-springs-66958.herokuapp.com/api/categories/";

  selectedProduct: Product;
  productList: Product[];

  selectedCategory: Category;
  categoryList: Category[];

  constructor(private http: Http) { }

  getProducts() {
    this.http.get(this._url)
      .map((data: Response) => {
        return data.json() as Product[];
      })
      .toPromise()
      .then(x => {
        this.productList = x;
      })
  }

  getCategories() {
    this.http.get(this.categories_url)
      .map((data: Response) => {
        return data.json() as Category[];
      })
      .toPromise()
      .then(x => {
        this.categoryList = x;
      })
  }

  postProduct(product: Product) {
    const body = JSON.stringify(product);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this._url, body, requestOptions)
      .map(x => x.json());
  }

  getProduct(_id: String) {
    this.http.get(this._url + '/' + _id)
      .map((data: Response) => {
        return data.json() as Product;
      })
      .toPromise().then(x => {
        this.selectedProduct = x;
        //alert(JSON.stringify(this.selectedProduct));
      });
  }

  patchProduct(_id, product: Product) {
    const data = JSON.stringify(product);

    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this._url + '/' + _id, product, requestOptions)
      .map(x => x.json());
  }

  deleteProduct(_id) {
    return this.http.delete(this._url + '/' + _id)
                    .map(x => x.json());
  }
}
