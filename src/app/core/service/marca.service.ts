import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '.';

@Injectable({
  providedIn: 'root'
})
export class MarcaService implements Resolve<any> {

  constructor(private _api: ApiService) { }

  guardar(params: Object, id?: number) {
    if (id == undefined) {
      return this._api.post('/inventario-marcas', params);
    }else{
      return this._api.put('/inventario-marcas/' + id, params);
    }
  }

  listar() {
    return this._api.get('/inventario-marcas');
  }

  borrar(id: number, params: any) {
    return this._api.put('/inventario-marcas/baja/' + id, params);
  }

  buscar(params:any) {
    let httpParams = new HttpParams();
    httpParams = this._api.formatParams(httpParams, params);

    return this._api.get('/inventario-marcas', httpParams);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<any>|Promise<any>|any {
    let httpParams = new HttpParams();
    httpParams = this._api.formatParams(httpParams, { pagesize: 20 });
    return this._api.get('/inventario-marcas', httpParams);
  }

}
