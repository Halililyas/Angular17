import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Category } from '../../category/category';
import { CatagoriesService } from '../../Services/catagories.service';
import { FormsModule } from '@angular/forms'; 
import { ProductService } from '../../Services/product.service';
import { AlertifyService } from '../../Services/alertify.service';
@Component({
  selector: 'app-products-add-2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './products-add-2.component.html',
  styleUrl: './products-add-2.component.css',
  providers: [CatagoriesService,ProductService]
})
export class ProductsAdd2Component implements OnInit {
  constructor(private formbuilder: FormBuilder,
    private categoryservice: CatagoriesService,
    private productService:ProductService,
    private alertifyService:AlertifyService) { }


  productsAddForms!: FormGroup;
  category: Category[] = []

  product: Product = new Product();

  creatProductsAddForms() {
    this.productsAddForms = this.formbuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required],
      imageUrl: ["", Validators.required],
      categoryId: ["", Validators.required],
    })
  }

  ngOnInit() {
    this.creatProductsAddForms()
    this.categoryservice.getcategory().subscribe(data => {
      this.category = data
    })
  }
  add() {
    if (this.productsAddForms.valid) {
      this.product = Object.assign({}, this.productsAddForms.value)
    }
    this.productService.addPRoduct(this.product).subscribe(data=>{
      this.alertifyService.success(data.name + " Başarıyla Eklendi")
    })
  }
  /*
  add() adlı bir metod tanımlanmış. Bu metod muhtemelen bir formun submit işlemine 
  bağlı olarak çalıştırılır.
  
  if (this.productsAddForms.valid) ifadesi, formun geçerli (valid) olup olmadığını kontrol eder. 
  valid özelliği, Angular'daki FormGroup'un bir özelliğidir ve tüm form kontrollerinin geçerli 
  olup olmadığını belirtir.
  
  Eğer form geçerli ise, this.productsAddForms.value ifadesi, formdaki tüm değerleri
   içeren bir nesneyi ifade eder.
  
  this.product = Object.assign({}, this.productsAddForms.value); satırı, 
  formdaki değerleri this.product adlı bir nesneye kopyalar.
   Object.assign() metodunu kullanarak, form değerlerini yeni bir nesneye kopyalamış olursunuz. 
   Bu, form değerlerini başka bir nesneye taşımak için yaygın bir yöntemdir.
  
  */
}
