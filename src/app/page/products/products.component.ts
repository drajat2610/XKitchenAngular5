import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  modalRef: BsModalRef;
  isNew : Boolean = true;

  constructor(private _productService: ProductService, private _categoryService: CategoryService, private modalService: BsModalService) { }

  ngOnInit() {
    this.resetForm();    
    this._categoryService.getCategories();
    this._productService.getProducts();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.isNew = true;
    this._productService.selectedProduct = new Product();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.resetForm();
  }
  openModal1(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1);
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    // alert(JSON.stringify(form.value));
    if (form.value._id == null) {
      this._productService.postProduct(form.value)
        .subscribe(data => {
          this._productService.getProducts();
          this.resetForm(form);
          this.modalRef.hide();
        })
    } else {
      this._productService.patchProduct(form.value._id, form.value)
        .subscribe(data => {
          this._productService.getProducts();
          this.resetForm(form);
          this.modalRef.hide();          
        })
    }
  }
    
    onEdit(template1: TemplateRef<any>, _id: String) {
      //alert(JSON.stringify(category));
      this._productService.getProduct(_id);
      this.openModal1(template1);
      this.isNew = false;        
    }
  
    onDelete(_id) {
      if (confirm('Are you sure to delete this?') === true) {
        this._productService.deleteProduct(_id)
          .subscribe(x => {
            this._productService.getProducts();
          });
      }
    }

}
