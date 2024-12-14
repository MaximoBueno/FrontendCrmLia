import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { LoginUsuarioRequest } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formLogin:FormGroup;

  constructor(
    private authService: AuthService, 
    private fb: FormBuilder) {

    this.formLogin = this.fb.group({
      correo: ['',[Validators.required, Validators.minLength(5)]],
      clave: ['',[Validators.required, Validators.minLength(5)]],
    });

  }

  submit(e:Event){
    e.preventDefault();
  }

  onLogin(): void {
   
    const modelo:LoginUsuarioRequest = {
      correo: this.formLogin.value.correo,
      clave: this.formLogin.value.clave
    }

    this.authService.login(modelo).subscribe((response) => {
      console.log(response);
    });
  }

}
