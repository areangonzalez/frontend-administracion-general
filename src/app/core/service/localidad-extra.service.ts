import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class LocalidadExtraService implements Resolve<any> {

  constructor(private _api: ApiService) { }

  borrar(id: number) {
    return this._api.delete('/lugar-localidad-extras/' + id);
  }

  buscar(params: object) {
    let httpParams = new HttpParams();
    httpParams = this._api.formatParams(httpParams, params);
    return this._api.get('/lugar-localidad-extras', httpParams);
  }

  guardar(localidadid: number) {
    return this._api.post('/lugar-localidad-extras', { localidadid: localidadid });
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<any>|Promise<any>|any {
      let httpParams = new HttpParams();
      httpParams = this._api.formatParams(httpParams, { pagesize: 20, pages: 0 });
      return this._api.get('/lugar-localidad-extras', httpParams);
    }
}
