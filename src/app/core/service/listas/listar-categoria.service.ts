import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ListarCategoriaService implements Resolve<any> {

  constructor(private _api: ApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<any>|Promise<any>|any {
    return this._api.get('/inventario-categorias');
  }
}
