import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as todoActions from '../actions';
import * as fromServices from '../../services';

@Injectable()
export class TodosEffects {
  // getTodos$: any;
  constructor(
    private actions$: Actions,
    private todoService: fromServices.TodosService
  ) {}

  @Effect()
  getTodos$ = this.actions$.ofType(todoActions.LOAD_TODOS).pipe(
    switchMap(() => {
      console.log('todoEffects');
      return this.todoService
        .getTodos()
        .pipe(
          map(todos => new todoActions.LoadTodosSuccess(todos)),
          catchError(error => of(new todoActions.LoadTodosFail(error)))
        );
    })
  );
  // loadTodos$ = this.actions$.ofType(todoActions.LOAD_TODOS).pipe(switchMap () => {
  // return this.todoService.getTodos().pipe(console.log('Effects - LOAD_TODOS');
  // map(todos => new todoActions.LoadTodosSuccess(todos)),
  // catchError(error => of(new todoActions.LoadTodoFail(e/rror)))
  // );
  // });
}
