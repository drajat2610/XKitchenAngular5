import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { TablesComponent } from './page/tables/tables.component';
import { UsersComponent } from './page/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TablesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
