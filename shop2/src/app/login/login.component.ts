import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; 
import { AccountService } from '../Services/account.service';
import { CommonModule } from '@angular/common';

import { User } from './User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
  
})
export class LoginComponent implements OnInit{
  model : User=new User();
  constructor(private accountService:AccountService){}
ngOnInit(){
  
}
login(form:NgForm){
  this.accountService.login(this.model)
  console.log(this.model.username)
  console.log(this.model.password)
  console.log(this.accountService.isLoggendIn())
}
}
