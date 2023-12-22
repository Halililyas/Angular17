import { Injectable } from '@angular/core';// Servisin Servis Olabilmesi için Injecttable Kullanılması lazım
declare let alertify:any // Bu Bizim İçin Alertify buluyor 
// Bir Servis Eklemek İçin ng g service servis ismi vererek terminale oluşturmus oluyoruz 
@Injectable({
  providedIn: 'root'// Burda ki root demek servisin global olucağı anlamına gelir 
})
export class AlertifyService {

  constructor() { }
  success(message:string){
    alertify.success(message)
  }
  Eroorr(message:string){
    alertify.console.error();
    (message)
  }
  Warning(message:string){
    alertify.console.warn;
    (message)
  }
}
