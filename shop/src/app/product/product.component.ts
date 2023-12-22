import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import  {FormsModule} from '@angular/forms';




declare let alertify:any // Bu Bizim İçin Alertify buluyor 
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,CommonModule,ProductFilterPipe,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor(){}
title = 'Ürün Baslık'
filterText = ""
products :Product[]=[
  {id:1,name:"Laptop",price:122,description:"Güzel Ürün",categoryId:1,imageUrl:"https://media.istockphoto.com/id/1405588022/tr/foto%C4%9Fraf/smiling-professional-working-on-laptop-while-sitting-at-table-in-home-office.jpg?s=1024x1024&w=is&k=20&c=qNk94m2uN0jVu2H9w323nmRr15ZoulNLAx426y8oXYo="},
  {id:1,name:"Masa",price:122,description:"Masa Ürün",categoryId:2,imageUrl:"https://media.istockphoto.com/id/1167803941/tr/foto%C4%9Fraf/ka%C4%9F%C4%B1t-belgelere-bakan-grafik-ve-grafiklerle-%C3%A7al%C4%B1%C5%9F%C4%B1rken-g%C3%BCndelik-ofiste-telefonla-g%C3%B6r%C3%BC%C5%9Fme.jpg?s=1024x1024&w=is&k=20&c=4YN4IyzriUHPI-GQuExeE2P6AaF9Em6nvDlIvHBSiyE="},
  {id:1,name:"Sandalye",price:122,description:"Masa Ürün",categoryId:2,imageUrl:"https://media.istockphoto.com/id/1167803941/tr/foto%C4%9Fraf/ka%C4%9F%C4%B1t-belgelere-bakan-grafik-ve-grafiklerle-%C3%A7al%C4%B1%C5%9F%C4%B1rken-g%C3%BCndelik-ofiste-telefonla-g%C3%B6r%C3%BC%C5%9Fme.jpg?s=1024x1024&w=is&k=20&c=4YN4IyzriUHPI-GQuExeE2P6AaF9Em6nvDlIvHBSiyE="},
  {id:1,name:"Laptop",price:122,description:"Masa Ürün",categoryId:2,imageUrl:"https://media.istockphoto.com/id/1167803941/tr/foto%C4%9Fraf/ka%C4%9F%C4%B1t-belgelere-bakan-grafik-ve-grafiklerle-%C3%A7al%C4%B1%C5%9F%C4%B1rken-g%C3%BCndelik-ofiste-telefonla-g%C3%B6r%C3%BC%C5%9Fme.jpg?s=1024x1024&w=is&k=20&c=4YN4IyzriUHPI-GQuExeE2P6AaF9Em6nvDlIvHBSiyE="},

]
  

ngOnInit(): void {
  
}
addTocard(){
  alertify.success("added")
}
}
