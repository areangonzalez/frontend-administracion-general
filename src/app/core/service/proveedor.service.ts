import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '.';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService implements Resolve<any> {

  constructor(private _api: ApiService) { }

  guardar(params: Object, id?: number) {
    if (id !== undefined) {
      return this._api.post('/inventario-proveedors', params);
    }else{
      return this._api.put('/inventario-proveedors/' + id, params);
    }
  }

  listar() {
    return this._api.get('/inventario-proveedors');
  }

  borrar(id: number) {
    return this._api.delete('/inventario-proveedors/baja/' + id);
  }

  buscar(params:any) {
    let httpParams = new HttpParams();
    httpParams = this._api.formatParams(httpParams, params);

    return this._api.get('/inventario-proveedors', httpParams);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<any>|Promise<any>|any {
    let httpParams = new HttpParams();
    httpParams = this._api.formatParams(httpParams, { pagesize: 20 });
    return this._api.get('/inventario-proveedors', httpParams);
  }

}

