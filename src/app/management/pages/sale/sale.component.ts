import { Component } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { RequestContacto} from '../../interfaces/requestcontacto.interface';

import { ResponseContacto, Value, Contacto } from '../../interfaces/responsecontacto.interface';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {

  public listaDeContactos?: Contacto[];

  constructor(
    private contactoService: ContactoService
  ){}

  ngOnInit(): void {
    this.listarContactos();
  }

  listarContactos(): void{

    const modelo:RequestContacto ={
      IdGestor: 1,
      Page: 1,
      Limit: 1
    }

    this.contactoService.listarContacto(modelo).subscribe({
      next:(response) => {
        console.log(response.value);
        this.listaDeContactos = response.value.contactos;
      },
      error: (e) => {
        console.log(e.toString());
      }
    });
  }

}
