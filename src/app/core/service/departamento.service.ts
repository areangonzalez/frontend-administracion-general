import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private _api: ApiService) { }

  public buscarPorProvinciaId(provinciaid: number) {
    let httpParams = new HttpParams();
    httpParams = this._api.formatParams(httpParams, {"provinciaid": provinciaid});
    return this._api.get("/departamentos", httpParams);
  }
}
