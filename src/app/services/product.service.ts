import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

  private _url = "http://localhost:3000/api/products";

  selectedProduct: Product;

  constructor() { }

}
