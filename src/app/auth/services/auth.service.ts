import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environments';
import { LoginUsuarioRequest, LoginUsuarioResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl + "Authentication";

  private miLogin?:LoginUsuarioRequest;

  constructor(
    private http: HttpClient
  ) {}

  login(modelo:LoginUsuarioRequest): Observable<LoginUsuarioResponse> {
    return this.http.post<LoginUsuarioResponse>(`${this.baseUrl}/Login`, modelo).pipe(
      tap((response) => {
        console.log(response);
      })
    );
  }

  logout(): void{
    //write code
  }

}
