import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigTablaService {
  private tituloTabla$ = new Subject<any>();

  constructor() { }

  guardarTitulosTabla(titulos: any) {
    this.tituloTabla$.next(titulos);
  }

  getTitulos(): Observable<any> {
    return this.tituloTabla$.asObservable();
  }
}
