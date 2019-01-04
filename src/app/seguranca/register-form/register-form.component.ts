import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  register(usuario: string, senha: string, email: string) {
    this.auth.register(usuario, senha, email)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }
}