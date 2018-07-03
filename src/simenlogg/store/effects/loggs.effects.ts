import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as loggActions from '../actions';
import * as fromServices from '../../services';

import { Logg } from '../../models';

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
  @Effect()
  deleteLogg$ = this.actions$.ofType(loggActions.DELETE_LOGG).pipe(
    map((action: loggActions.DeleteLogg) => action.payload),
    switchMap(Logg => {
      console.log('deleteLoggEffects');
      return this.loggService.deleteLogg(Logg.id).pipe(
        map(loggs => new loggActions.DeleteLoggSuccess(Logg)),
        catchError(error => of(new loggActions.LoadLoggsFail(error)))
      );
    })
  );

  @Effect()
  addLogg$ = this.actions$.ofType(loggActions.ADD_LOGG).pipe(
    map((action: loggActions.AddLogg) => action.payload),
    switchMap(logg => {
      console.log('AddLoggEffects');
      return this.loggService.addLogg(logg).pipe(
        map(
          returnLogg => new loggActions.AddLoggSuccess(returnLogg.recordset[0])
        ),
        catchError(error => of(new loggActions.LoadLoggsFail(error)))
      );
    })
  );

  @Effect()
  updateLogg$ = this.actions$.ofType(loggActions.UPDATE_LOGG).pipe(
    map((action: loggActions.UpdateLogg) => action.payload),
    switchMap(logg => {
      console.log('UpdateLoggEffects', logg);
      return this.loggService.updateLogg(logg).pipe(
        map(
          returnLogg =>
            new loggActions.UpdateLoggSuccess({
              logg: {
                id: returnLogg.recordset[0].id,
                changes: returnLogg.recordset[0]
              }
            })
        ),
        catchError(error => of(new loggActions.UpdateLoggFail(error)))
      );
    })
  );
}
