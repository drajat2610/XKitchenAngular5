import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  // categories = [];

  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    this._categoryService.getCategories();
  }

  onEdit(_id: String) { 
    //alert(JSON.stringify(category));
    this._categoryService.getCategory(_id);
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


// import { Component, OnInit } from '@angular/core';
// import { CategoryService } from '../../../services/category.service';

// @Component({
//   selector: 'app-category-list',
//   templateUrl: './category-list.component.html',
//   styleUrls: ['./category-list.component.css']
// })
// export class CategoryListComponent implements OnInit {

//   categories = [];

//   constructor(private _categoryService: CategoryService) { }

//   ngOnInit() {
//     this._categoryService.getCategories()
//       .subscribe(data => this.categories = data)
//   }

// }
