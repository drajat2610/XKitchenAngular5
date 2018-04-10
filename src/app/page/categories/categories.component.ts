import { Component, OnInit, TemplateRef } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  modalRef: BsModalRef;
  isNew : Boolean = true;

  constructor(private _categoryService: CategoryService, private modalService: BsModalService) { }

  ngOnInit() {
    this.resetForm();
    this._categoryService.getCategories();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.isNew = true;
    this._categoryService.selectedCategory = new Category();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    // alert(JSON.stringify(form.value));
    if (form.value._id == null) {
      this._categoryService.postCategory(form.value)
        .subscribe(data => {
          this._categoryService.getCategories();
          this.resetForm(form);
          this.modalRef.hide();
        })
    } else {
      this._categoryService.patchCategory(form.value._id, form.value)
        .subscribe(data => {
          this._categoryService.getCategories();
          this.resetForm(form);
          this.modalRef.hide();          
        })
    }
  }

  onEdit(template: TemplateRef<any>, _id: String) {
    //alert(JSON.stringify(category));
    this._categoryService.getCategory(_id);
    this.openModal(template);
    this.isNew = false;        
  }

  onDelete(_id) {
    if (confirm('Are you sure to delete this?') === true) {
      this._categoryService.deleteCategory(_id)
        .subscribe(x => {
          this._categoryService.getCategories();
        });
    }
  }
}
