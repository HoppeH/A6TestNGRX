import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Logg } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoggsService {
  api: any = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient) {}

  getLoggs(): Observable<Logg[]> {
    console.log('GetLoggs');
    return this.http
      .get<Logg[]>(`${this.api}/simen`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  deleteLogg(id: string): any {
    console.log('deleteLogg');
    return this.http
      .delete<number>(`${this.api}/simen/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
