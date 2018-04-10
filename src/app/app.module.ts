import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routingComponents, AppRoutingModule } from './app-routing.module';
import { HttpClient } from 'selenium-webdriver/http';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HomeComponent } from './page/home/home.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { TablesComponent } from './page/tables/tables.component';
import { UsersComponent } from './page/users/users.component';
import { ProductsComponent } from './page/products/products.component';

import { CategoryService } from './services/category.service';
import { UserService } from './services/user.service';
import { TableService } from './services/table.service';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TablesComponent,
    UsersComponent,
    HomeComponent,
    routingComponents,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, CategoryService, UserService, TableService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
