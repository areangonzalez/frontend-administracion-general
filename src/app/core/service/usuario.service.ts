import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _api: ApiService) { }
}
