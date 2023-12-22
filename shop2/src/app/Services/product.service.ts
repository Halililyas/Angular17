import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Category } from '../category/category';


@Injectable(
  
)
export class ProductService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/products"

  getProducts(categoryId: Category):Observable<Product[]>{
    let newPath = this.path;
    if(categoryId){
      newPath = newPath +"?categoryId="+categoryId;
    }
    return this.http.
    get<Product[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )//Api Kullandık Burada
    // console.log(JSON.stringify(data) Burda Json dosyasını string ifade ye çevir ve bunu  consol.log yaz demiş olduk 
    
  }
  addPRoduct(product:Product):Observable<Product>{
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path,product,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError))
  }
  handleError(err: HttpErrorResponse) {
    let  errormesage ='';
    if (err.error instanceof ErrorEvent)// Eğer gelen hata türü ErrorEvent ise instanceof demek eşitlik anlamına gelir 
    {
      errormesage = "Bir Hata Oluştu " + err.error.message
    }
    else{
    errormesage = "Sistemsel Bird Hatas oluştu " +"";
    
    }
    return throwError(errormesage);
    
  }
}
