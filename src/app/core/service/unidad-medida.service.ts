import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '.';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService implements Resolve<any> {

  constructor(private _api: ApiService) { }

  guardar(params: Object, id?: number) {
    if (id !== undefined) {
      return this._api.post('/unidad-medidas', params);
    }else{
      return this._api.put('/unidad-medidas/' + id, params);
    }
  }

  listar() {
    return this._api.get('/unidad-medidas');
  }

  buscar(params:any) {
    let httpParams = new HttpParams();
    httpParams = this._api.formatParams(httpParams, params);

    return this._api.get('/unidad-medidas', httpParams);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<any>|Promise<any>|any {
    return this._api.get('/unidad-medidas');
  }

}
