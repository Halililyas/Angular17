import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from '../Services/alertify.service';
import { CategoryComponent } from '../category/category.component';
import { ProductService } from '../Services/product.service';
import { ActivatedRoute } from '@angular/router';






@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CommonModule, ProductFilterPipe, FormsModule,CategoryComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductService] // Burda Yapılan işlem Yapmış olduğumuz productservis sınıfı bir local servis olarak çağırıldı heryerde kullanılmaz
})
export class ProductComponent implements OnInit {
  constructor(private alertifyService: AlertifyService,
             private productService: ProductService,
             private activatedRoute:ActivatedRoute) { }// Burda Kullanıcağımız Servislerin bir instance sini oluşturduk
  title = 'Ürün Baslık'
  filterText = ""
  products: Product[] = []



  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data//burda products servis içerisinde çektiğimiz apileri burda yukarıda oluşturduğumuz product arrayin içerisine atadık
      })
    })
   
  }
  addTocard(pro: string) {
    this.alertifyService.success(pro + " Added Eklendi")

  }
}
