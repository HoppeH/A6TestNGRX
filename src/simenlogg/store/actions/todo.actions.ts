import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Logg } from '../../models/logg.models';

export const LOAD_LOGGS = '[Loggs] Load Loggs';
export const LOAD_LOGGS_FAIL = '[Loggs] Load Loggs Fail';
export const LOAD_LOGGS_SUCCESS = '[Loggs] Load Loggs Success';

export const ADD_LOGG = '[Loggs] Add Logg';
export const TOGGLE_LOGG = '[Loggs] Toggle Logg';
export const DELETE_LOGG = '[Loggs] Delete Logg';
export const UPDATE_LOGG = '[Loggs] Update Logg';
export const RESET_LOGGS = '[Loggs] Reset Loggs';

export class LoadLoggs implements Action {
  readonly type = LOAD_LOGGS;
}

export class LoadLoggsFail implements Action {
  readonly type = LOAD_LOGGS_FAIL;
  constructor(public payload: any) {}
}

export class LoadLoggsSuccess implements Action {
  readonly type = LOAD_LOGGS_SUCCESS;
  constructor(public payload: Logg[]) {}
}

export class AddLogg implements Action {
  readonly type = ADD_LOGG;
  constructor(public logg: Logg) {}
}

export class UpdateLogg implements Action {
  readonly type = UPDATE_LOGG;
  constructor(public payload: { logg: Update<Logg> }) {}
}

export class DeleteLogg implements Action {
  readonly type = DELETE_LOGG;
  constructor(public id: string) {}
}

export class ToggleLogg implements Action {
  readonly type = TOGGLE_LOGG;
  constructor(public logg: Logg) {}
}

export class ResetLoggs implements Action {
  readonly type = RESET_LOGGS;
}

export type LoggActions =
  | AddLogg
  | DeleteLogg
  | UpdateLogg
  | ResetLoggs
  | ToggleLogg
  | LoadLoggs
  | LoadLoggsFail
  | LoadLoggsSuccess;
