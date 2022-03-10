import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LocalidadBackendService implements Resolve<any> {

  constructor(private _http: ApiService) { }

  guardar(params: object, id?: number) {
    if (id) { // Editar
      return this._http.put("/lugar-localidads/" + id, params);
    } else { // Crear
      return this._http.post("/lugar-localidads", params);
    }
  }

  buscar(params: object) {
    let httpParams = new HttpParams();
    httpParams = this._http.formatParams(httpParams, params);
    return this._http.get('/lugar-localidads', httpParams);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<any>|Promise<any>|any {
      let httpParams = new HttpParams();
      httpParams = this._http.formatParams(httpParams, { pagesize: 20, pages: 0 });
    return this._http.get('/lugar-localidads', httpParams);
  }
}
