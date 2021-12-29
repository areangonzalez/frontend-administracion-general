import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
  ) { }

  private formatErrors(error: any) {
      return throwError(error);
  }

  public formatParams(httpParams: HttpParams = new HttpParams(),params:any){
    for (const key in params) {
      httpParams = httpParams.append(key.toString(), params[key].toString());
    }
    return httpParams;
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
      return this.http.get(`${environment.baseUrl}${path}`, { params })
          .pipe(
            catchError(this.formatErrors)
          );
  }

  put(path: string, body: Object = {}): Observable<any> {
      return this.http.put(
          `${environment.baseUrl}${path}`,
          body
      ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
      return this.http.post(
          `${environment.baseUrl}${path}`,
          body
      ).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
      return this.http.delete(
          `${environment.baseUrl}${path}`
      ).pipe(catchError(this.formatErrors));
  }

  getFile(path: string, body: object): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}${path}`,
      body
    ).pipe(catchError(this.formatErrors));
  }
}
