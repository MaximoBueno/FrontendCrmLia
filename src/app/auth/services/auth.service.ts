import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environments';
import { LoginUsuarioRequest, LoginUsuarioResponse } from '../interfaces/user.interface';
import { StorageShareService } from '../../shared/services/storage.share.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl + "Authentication";

  constructor(
    private http: HttpClient,
    private myStorage:StorageShareService
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
    //write code
  }

}
