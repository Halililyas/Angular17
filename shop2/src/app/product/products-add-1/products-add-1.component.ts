import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CatagoriesService } from '../../Services/catagories.service';
import { Category } from '../../category/category';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; // Burda ki sınıf ngForms Ng model gibi sınıfları kullandırıyor 
import { ProductService } from '../../Services/product.service';
import { AlertifyService } from '../../Services/alertify.service';
import { LoginGuard } from '../../login/login.guard';

@Component({
  selector: 'app-products-add-1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-add-1.component.html',
  styleUrl: './products-add-1.component.css',
  providers: [CatagoriesService,ProductService,LoginGuard]
})
export class ProductsAdd1Component implements OnInit {
  constructor(private categoryService: CatagoriesService,
   private productService: ProductService,
   private alertifyService:AlertifyService) { }
  model: Product = new Product();

  categories: Category[] = []

  ngOnInit() {
    this.categoryService.getcategory().subscribe(data => {
      this.categories = data
    })
  }
  add(form: NgForm) {
    this.productService.addPRoduct(this.model).subscribe(data=>{
      this.alertifyService.success(data.name + "Başarıyla Eklendi")
    })
  }
}
