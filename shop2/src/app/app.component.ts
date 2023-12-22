import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginGuard } from './login/login.guard';
import { AccountService } from './Services/account.service';
import { ProductsAdd1Component } from './product/products-add-1/products-add-1.component';
import { ProductsAdd2Component } from './product/products-add-2/products-add-2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavComponent,CategoryComponent,ProductComponent,HttpClientModule,RouterModule,ProductsAdd1Component,ProductsAdd2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
 

})
export class AppComponent {
  constructor(private accountService:AccountService){}
  title = 'shop';
  isLogginIn(){
    return this.accountService.loggedIn
  }
  LogOut(){
    this.accountService.logout();
  }
}