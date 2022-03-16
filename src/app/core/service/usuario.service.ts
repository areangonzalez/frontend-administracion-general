import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _api: ApiService) { }

  guardar(params: object, id?:number) {
    if (id !== undefined) { // guardar
      return this._api.post('/usaurios', params);
    }else { // editar
      return this._api.put('/usuarios/' + id, params);
    }
  }

  baja(id: number) {
    return this._api.put('/usuarios/baja/' + id);
  }

  buscar(params: any) {
    let httpParams = new HttpParams();
    httpParams = this._api.formatParams(httpParams, params);

    return this._api.get('/usuarios', httpParams);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<any>|Promise<any>|any {
    let httpParams = new HttpParams();
    httpParams = this._api.formatParams(httpParams, { pagesize: 20 });
    return this._api.get('/usuarios', httpParams);
  }
}
