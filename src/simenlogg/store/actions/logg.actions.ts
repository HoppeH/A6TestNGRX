import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Logg } from '../../models/logg.models';

export const LOAD_LOGGS = '[Loggs] Load Loggs';
export const LOAD_LOGGS_FAIL = '[Loggs] Load Loggs Fail';
export const LOAD_LOGGS_SUCCESS = '[Loggs] Load Loggs Success';

export const ADD_LOGG = '[Loggs] Add Logg';
export const ADD_LOGG_FAIL = '[Loggs] Add Logg Fail';
export const ADD_LOGG_SUCCESS = '[Loggs] Add Logg Success';

export const TOGGLE_LOGG = '[Loggs] Toggle Logg';

export const UPDATE_LOGG = '[Loggs] Update Logg';
export const UPDATE_LOGG_FAIL = '[Loggs] Update Logg Fail';
export const UPDATE_LOGG_SUCCESS = '[Loggs] Update Logg Success';

export const RESET_LOGGS = '[Loggs] Reset Loggs';

export const DELETE_LOGG = '[Loggs] Delete Logg';
export const DELETE_LOGG_FAIL = '[Loggs] Delete Logg Fail';
export const DELETE_LOGG_SUCCESS = '[Loggs] Delete Logg Success';

// Load loggs
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

//Add Loggs
export class AddLogg implements Action {
  readonly type = ADD_LOGG;
  constructor(public payload: Logg) {}
}
//Add Loggs
export class AddLoggFail implements Action {
  readonly type = ADD_LOGG_FAIL;
  constructor(public payload: any) {}
}
//Add Loggs
export class AddLoggSuccess implements Action {
  readonly type = ADD_LOGG_SUCCESS;
  constructor(public logg: Logg) {}
}

export class UpdateLogg implements Action {
  readonly type = UPDATE_LOGG;
  constructor(public payload: Logg) {}
}

export class UpdateLoggSuccess implements Action {
  readonly type = UPDATE_LOGG_SUCCESS;
  constructor(public payload: { logg: Update<Logg> }) {}
}
export class UpdateLoggFail implements Action {
  readonly type = UPDATE_LOGG_FAIL;
  constructor(public payload: any) {}
}

export class DeleteLogg implements Action {
  readonly type = DELETE_LOGG;
  constructor(public payload: Logg) {}
}

export class DeleteLoggFail implements Action {
  readonly type = DELETE_LOGG_FAIL;
  constructor(public payload: any) {}
}

export class DeleteLoggSuccess implements Action {
  readonly type = DELETE_LOGG_SUCCESS;
  constructor(public payload: Logg) {}
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
  | AddLoggFail
  | AddLoggSuccess
  | DeleteLogg
  | DeleteLoggFail
  | DeleteLoggSuccess
  | UpdateLogg
  | UpdateLoggSuccess
  | UpdateLoggFail
  | ResetLoggs
  | ToggleLogg
  | LoadLoggs
  | LoadLoggsFail
  | LoadLoggsSuccess;
