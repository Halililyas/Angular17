import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Category } from '../category/category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable(

)
export class CatagoriesService {

  constructor(private http:HttpClient) { }
  path = "  http://localhost:3000/categories"
 
  getcategory():Observable<Category[]>{
    return this.http
    .get<Category[]>(this.path).pipe(tap(data=>console.log(JSON.stringify(data))),
    catchError(this.handleError)
    )

  }
  handleError(err: HttpErrorResponse) {
    let  errormesage :string;
    if(err.error instanceof ErrorEvent)
    {
      errormesage = "Bir Hata Oluştu"  + err.error.message

    }else
    {
      errormesage = "Sistemsel Bird Hatas oluştu " + " "
    }
    return throwError(errormesage);
  }
}
/*
.get<Category[]>(this.path): Bu, HTTP GET isteği yapmak için kullanılır.
 this.path belirtilen endpoint'e bir GET isteği gönderir. Category[] tipinde bir 
 cevap beklenir, ve bu tip, beklenen yanıtın tipini ifade eder.

.pipe(): RxJS operatörlerini zincirlemek için kullanılır. Bu operatörler, 
gelen akışı manipüle etmek için kullanılır. İlgili kod, tap ve catchError operatörlerini içerir.

tap(data => console.log(JSON.stringify(data))): Bu, akışa bir göz atma işlemini
 gerçekleştirir. Gelen verileri konsola yazdırır. Bu, sadece gözlemleme amaçlıdır ve 
 akışa herhangi bir etki yapmaz.

catchError(this.handleError): Bu, hata durumlarını ele almak için kullanılır. 
handleError adlı bir metodun çağrılmasını sağlar. Bu metodun, hata durumunu ele almak 
ve uygun bir şekilde işlemek için özelleştirilmiş bir kod içermesi beklenir.
*/