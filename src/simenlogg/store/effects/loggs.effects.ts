import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as loggActions from '../actions';
import * as fromServices from '../../services';

@Injectable()
export class LoggsEffects {
  // getTodos$: any;
  constructor(
    private actions$: Actions,
    private loggService: fromServices.LoggsService
  ) {}

  @Effect()
  getTodos$ = this.actions$.ofType(loggActions.LOAD_LOGGS).pipe(
    switchMap(() => {
      console.log('loggEffects');
      return this.loggService.getLoggs().pipe(
        map(loggs => new loggActions.LoadLoggsSuccess(loggs)),
        catchError(error => of(new loggActions.LoadLoggsFail(error)))
      );
    })
  );
  // loadTodos$ = this.actions$.ofType(todoActions.LOAD_LOGGS).pipe(switchMap () => {
  // return this.todoService.getTodos().pipe(console.log('Effects - LOAD_TODOS');
  // map(todos => new todoActions.LoadTodosSuccess(todos)),
  // catchError(error => of(new todoActions.LoadTodoFail(e/rror)))
  // );
  // });

  // deleteLogg$ = this.actions$.ofType(loggActions.DELETE_LOGG).pipe(
  //     switchMap(() => {
  //       console.log('deleteLoggEffects');
  //       return this.loggService.deleteLogg().pipe(
  //         map(loggs => new loggActions.LoadLoggsSuccess(logg)),
  //         catchError(error => of(new loggActions.LoadLoggsFail(error)))
  //       );
  //     })
  //   );
}
