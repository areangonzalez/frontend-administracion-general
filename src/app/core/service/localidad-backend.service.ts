import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LocalidadBackendService implements Resolve<any> {

  constructor(private _api: ApiService) { }

  guardar(params: object, id?: number) {
    if (id) { // Editar
      return this._api.put("/lugar-localidads/" + id, params);
    } else { // Crear
      return this._api.post("/lugar-localidads", params);
    }
  }

  buscar(params: object) {
    let httpParams = new HttpParams();
    httpParams = this._api.formatParams(httpParams, params);
    return this._api.get('/lugar-localidads', httpParams);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<any>|Promise<any>|any {
      let httpParams = new HttpParams();
      httpParams = this._api.formatParams(httpParams, { pagesize: 20, pages: 0 });
    return this._api.get('/lugar-localidads', httpParams);
  }
}
