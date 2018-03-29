import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms'
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  //angForm: FormGroup;
  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this._categoryService.selectedCategory = {
      _id: null,
      code: '',
      initial: '',
      name: ''
    };
  }

  onSubmit(form: NgForm) {
    if(form.value._id == null) {
      this._categoryService.postCategory(form.value)
        .subscribe(data => {
          this._categoryService.getCategories();
          this.resetForm(form);
        })
    } else {
      this._categoryService.patchCategory(form.value._id, form.value)
        .subscribe(data => {
          this._categoryService.getCategories();
          this.resetForm(form);
        })
    }
  }
}

  // createForm() {
  //   this.angForm = this.fb.group({
  //     code: ['', Validators.required],
  //     initial: ['', Validators.required],
  //     name: ['', Validators.required]
  //   })
  // }


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms'

// @Component({
//   selector: 'app-category',
//   templateUrl: './category.component.html',
//   styleUrls: ['./category.component.css']
// })
// export class CategoryComponent implements OnInit {
//   angForm: FormGroup;
//   constructor(private fb: FormBuilder) { }

//   ngOnInit() {
//   }

//   createForm() {
//     this.angForm = this.fb.group({
//       code: ['', Validators.required],
//       initial: ['', Validators.required],
//       name: ['', Validators.required]
//     })
//   }
// }
