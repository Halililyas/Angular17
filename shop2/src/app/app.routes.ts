import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductsAdd1Component } from './product/products-add-1/products-add-1.component';
import { ProductsAdd2Component } from './product/products-add-2/products-add-2.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

 export const routes: Routes = [
   {path:'products', component :ProductComponent},
   {path:'products-add-1', component :ProductsAdd1Component,canActivate:[LoginGuard]},
   {path:'products-add-2', component :ProductsAdd2Component},
   {path:'login', component :LoginComponent},
   {path:'',redirectTo:'products',pathMatch:"full"},
   {path:'products/category/:categoryId', component :ProductComponent}
];
@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports :[RouterModule]

})
export class AppRoutingModule{}
