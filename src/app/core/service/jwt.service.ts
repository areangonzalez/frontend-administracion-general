import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getToken() {
    return JSON.parse(localStorage.getItem('token-nucleo')!);
  }

  saveToken(datosToken: object) {
      localStorage.setItem('token-nucleo', JSON.stringify(datosToken));
  }

  destroyToken() {
      localStorage.removeItem('token-nucleo');
  }
}
