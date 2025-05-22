import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

import { environment } from '../../../environments/environments';
import { LoginUsuarioRequest, LoginUsuarioResponse } from '../interfaces/user.interface';
import { StorageShareService } from '../../shared/services/storage.share.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl + "Authentication";

  constructor(
    private http: HttpClient,
    private myStorage:StorageShareService,
    private router:Router
  ) {}

  token(modelo:LoginUsuarioRequest): Observable<LoginUsuarioResponse> {
    return this.http.post<LoginUsuarioResponse>(`${this.baseUrl}/Token`, modelo).pipe(
      tap((response) => {
        if(response.value.token){
          this.myStorage.saveToken(response.value.token);
        }
      })
    );
  }

  refresh(modelo:LoginUsuarioRequest): Observable<LoginUsuarioResponse> {
    return this.http.post<LoginUsuarioResponse>(`${this.baseUrl}/Refresh`, modelo).pipe(
      tap((response) => {
        console.log(response.value.token);
      })
    );
  }

  logout(): void{
    this.myStorage.destroyToken();
    this.router.navigate(['/auth/']);
  }

  checkAuthentication():Observable<boolean>{
    return of(this.myStorage.existToken());
  }

}
