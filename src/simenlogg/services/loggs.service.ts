import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Logg } from '../models';

import * as loggActions from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class LoggsService {
  api: any = 'http://192.168.1.114:3000/api/v1';
  constructor(private http: HttpClient) {}

  getLoggs(): Observable<Logg[]> {
    console.log('GetLoggs');
    return this.http
      .get<Logg[]>(`${this.api}/simen`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  deleteLogg(id: string): Observable<any> {
    console.log('deleteLogg');
    return this.http
      .delete<number>(`${this.api}/simen/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  addLogg(logg: Logg): Observable<any> {
    console.log('AddLogg');

    let body = logg;

    return this.http
      .post<Logg>(`${this.api}/simen`, body)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateLogg(logg: Partial<Logg>): Observable<any> {
    console.log('AddLogg');

    let body = logg;

    return this.http
      .put<Partial<Logg>>(`${this.api}/simen`, body)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
