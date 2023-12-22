import { Injectable } from '@angular/core';
import { User } from '../login/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  loggedIn=false;
  login(user:User):boolean{
    if(user.username=="Z"&&user.password=="1"){
     
      this.loggedIn=true;
      localStorage.setItem('isLogged',user.username)
      return true;
     
    }
    return false;
      
  }
  isLoggendIn(){
    
    return this.loggedIn;
    
  }
  logout(){
    localStorage.removeItem('isLogged')
    this.loggedIn=false;
  }

}
/*
localStorage.setItem('isLogged', user.username) kodu, JavaScript'te localStorage 
nesnesini kullanarak tarayıcıda kalıcı bir depolama alanına değer kaydetmek için kullanılır.
 Bu kodun anlamı şu şekildedir:

localStorage: Tarayıcının yerel depolama özelliğini temsil eden bir nesnedir.
setItem('isLogged', user.username): localStorage nesnesine "isLogged" adında bir anahtar 
(key) ile user.username değerini kaydeder. Bu, tarayıcı yerel depolama alanında "isLogged"
 adında bir anahtarın değeri olarak kullanıcı adını saklar.


*/