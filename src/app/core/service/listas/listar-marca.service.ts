import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ListarMarcaService implements Resolve<any> {

  constructor(private _api: ApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<any>|Promise<any>|any {
    return this._api.get('/inventario-marcas');
  }

}
