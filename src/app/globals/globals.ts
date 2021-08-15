import { Injectable } from '@angular/core';
import { Usuario } from '../auth/auth.component';

@Injectable({
    providedIn: 'root'
})
export class Globals {
    loginData = new LoginData();
}

class LoginData {
    token: string = "";
    usuario: Usuario = null as any;
}