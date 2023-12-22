import { Component,OnInit } from '@angular/core';
import { Category } from './category';
import { CommonModule } from '@angular/common';
import { CatagoriesService } from '../Services/catagories.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers:[CatagoriesService]
})
export class CategoryComponent implements OnInit {
  
  constructor(private categoryService:CatagoriesService) { }
Title = " Ürün Kategorileri ";
categories : Category[]=[]
 
ngOnInit() {
  this.categoryService.getcategory().subscribe(data=>{
    this.categories=data})
  }

}
