import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import { CategoriesComponent } from './page/categories/categories.component';
import { UsersComponent } from './page/users/users.component';
import { TablesComponent } from './page/tables/tables.component';
import { ProductsComponent } from './page/products/products.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'users', component: UsersComponent },
    {path: 'tables', component: TablesComponent  },
    {path: 'products', component: ProductsComponent  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [HomeComponent, CategoriesComponent, UsersComponent, TablesComponent, ProductsComponent];