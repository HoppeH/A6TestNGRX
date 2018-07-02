import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

// export enum LayoutActionTypes {
//   OpenSidenav = '[Layout] Open Sidenav',
//   CloseSidenav = '[Layout] Close Sidenav'
// }
//
// export class OpenSidenav implements Action {
//   readonly type = LayoutActionTypes.OpenSidenav;
// }
//
// export class CloseSidenav implements Action {
//   readonly type = LayoutActionTypes.CloseSidenav;
// }
//
// export type LayoutActionsUnion = OpenSidenav | CloseSidenav;

export const GO = '[Router] Go';
export const BACK = '[Router] Back';
export const FORWARD = '[Router] Forward';

export class Go implements Action {
  readonly type = GO;

  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Back implements Action {
  readonly type = BACK;
}

export class Forward implements Action {
  readonly type = FORWARD;
}

export type RouterActionsUnion = Go | Back | Forward;
