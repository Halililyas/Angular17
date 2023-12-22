import { Component,OnInit } from '@angular/core';
import { Category } from './category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  
  constructor() { }
Title = " Ürün Kategorileri ";
categories : Category[]=[
  {id:1,name:"Elektronik"},
  {id:2,name:"Bilgisayar"},
  {id:3,name:"Telefon"},
  {id:4,name:"İletişim"},
  {id:5,name:"İçecek"},
  {id:6,name:"Pantolon"}
]
  ngOnInit(): void {
  
  }

}
