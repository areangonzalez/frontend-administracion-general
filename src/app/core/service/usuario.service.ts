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
    if (id !== undefined) { // editar
      return this._api.put('/usuarios/' + id, params);
    }else { // guardar
      return this._api.post('/usuarios', params);
    }
  }

  baja(id: number) {
    return this._api.put('/usuarios/baja/' + id);
  }

  public buscarPorId(id: number) {
    return this._api.get('/usuarios/' + id);
  }

  buscar(params: any) {
    let httpParams = new HttpParams();
    httpParams = this._api.formatParams(httpParams, params);

    return this._api.get('/usuarios', httpParams);
  }

  public buscarPorCuil(cuil: string) {
    return this._api.get('/usuarios/buscar-persona-por-cuil/' + cuil );
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
