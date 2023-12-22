import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AccountService } from "../Services/account.service";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate{
    constructor(private accountService:AccountService,private route:Router){}
    canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean {
        let Loggind =this.accountService.isLoggendIn();
        if(Loggind){
            return true
        }
        this.route.navigate(["login"])
        return false
    }
}