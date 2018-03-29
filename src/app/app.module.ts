import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { TablesComponent } from './page/tables/tables.component';
import { UsersComponent } from './page/users/users.component';
import { HomeComponent } from './page/home/home.component';
import { routingComponents, AppRoutingModule } from './app-routing.module';
import { HttpClient } from 'selenium-webdriver/http';
import { CategoryComponent } from './page/categories/category/category.component';
import { CategoryListComponent } from './page/categories/category-list/category-list.component';
import { APP_BASE_HREF } from '@angular/common';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { UserComponent } from './page/users/user/user.component';
import { UserListComponent } from './page/users/user-list/user-list.component';
import { UserService } from './services/user.service';
import { TableComponent } from './page/tables/table/table.component';
import { TableListComponent } from './page/tables/table-list/table-list.component';
import { TableService } from './services/table.service';
import { ProductsComponent } from './page/products/products.component';
import { ProductComponent } from './page/products/product/product.component';
import { ProductListComponent } from './page/products/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TablesComponent,
    UsersComponent,
    HomeComponent,
    routingComponents,
    CategoryComponent,
    CategoryListComponent,
    UserComponent,
    UserListComponent,
    TableComponent,
    TableListComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, CategoryService, UserService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
