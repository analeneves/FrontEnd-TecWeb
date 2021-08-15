import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Globals } from '../globals/globals';

export class AuthResponse {
  token: string;
  usuario: Usuario;
  success: boolean;

  constructor(){
    this.token = "";
    this.usuario = "" as any;
    this.success = false;
  }
}

export class Usuario {
  idUsuario: number;
  nome: string;

  constructor(){
    this.idUsuario = "" as any;
    this.nome = ""
  }
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public nome: string;
  public senha: string;

  public authInvalido: boolean;

  constructor(private authService: AuthService, private router: Router, private globals: Globals) { 
    this.nome = "";
    this.senha = ""
    this.authInvalido = false;
  }

  ngOnInit() {
    this.authInvalido = false;
  }

  auth() {
    this.authService.auth(this.nome, this.senha).subscribe(response => {
      if (response.success === true) {
        this.globals.loginData.token = response.token;
        this.globals.loginData.usuario = response.usuario;
        this.authInvalido = false;
        this.router.navigate(['/home']);
      } else {
        this.authInvalido = true;
      }
    }, err => {
      this.authInvalido = true;
    });
  }
}
