import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as actions from './actions';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  // @Effect();
  // insertTodo$: Observable<Action> = this.actions$.pipe(
  //   ofType('LOAD_TODOS'),
  //   mergeMap(action =>
  //      this.http.get('http://localhost:3000/todos').pipe(
  //        map(data => {type: LOAD_TODOS_SUCCESS, payload: data)}
  //        catchError(() => of({type: 'LOAD_TODOS_FAIL'}));
  //      )
  //    )
  // )
}
