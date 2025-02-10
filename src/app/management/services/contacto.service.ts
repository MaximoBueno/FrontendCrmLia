import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { ResponseContacto } from '../interfaces/responsecontacto.interface';
import { RequestContacto } from '../interfaces/requestcontacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private baseUrl = environment.baseUrl + "Contacto";

  constructor(
    private http: HttpClient,
  ) { }


  listarContacto(modelo:RequestContacto) :Observable<ResponseContacto>{
    return  this.http.get<ResponseContacto>(this.baseUrl +`/ListarContactoPorIdGestor?` + `IdGestor=1&Page=1&Limit=10`);
  }


}
