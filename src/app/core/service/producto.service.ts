import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '.';


@Injectable({
  providedIn: 'root'
})
export class ProductoService implements Resolve<any> {

  constructor(private _api: ApiService) { }

  guardar(params: Object, id?: number) {
    if (id !== undefined) {
      return this._api.post('/inventario-productos', params);
    }else{
      return this._api.put('/inventario-productos/' + id, params);
    }
  }

  listar() {
    return this._api.get('/inventario-productos');
  }

  buscar(params:any) {
    let httpParams = new HttpParams();
    httpParams = this._api.formatParams(httpParams, params);

    return this._api.get('/inventario-productos', httpParams);
  }

  baja(id: number) {
    return this._api.delete('/inventario-productos/' + id);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<any>|Promise<any>|any {
    return this._api.get('/productos');
  }

}
