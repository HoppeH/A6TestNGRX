import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  api: any = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    console.log('GetTodos');
    return this.http
      .get<Todo[]>(`${this.api}/todos`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
