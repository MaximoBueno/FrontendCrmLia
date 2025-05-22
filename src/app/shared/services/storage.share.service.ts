import { afterNextRender, Injectable } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class StorageShareService{

    private dataPayload:any;

    constructor(){
        afterNextRender(() => {
            this.dataPayload = this.decodedToken();
        });
    }

    decodedToken():object|null{
        const jwtHelper = new JwtHelperService();
        const stoken =  this.loadToken();
        return jwtHelper.decodeToken(stoken);
    }

    saveToken(token:string):void{
        localStorage.setItem('token',token);
    }

    destroyToken():void{
        localStorage.removeItem('token');
    }

    loadToken():string{
        const rawToken = localStorage.getItem('token');
        return  (rawToken ? rawToken : '');
    }

    existToken():boolean{
        return !!localStorage.getItem('token');
    }

    getDataPayload():object|null{
        return this.dataPayload;
    }

}