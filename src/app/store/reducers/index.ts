// import {
//   ActionReducerMap,
//   createSelector,
//   createFeatureSelector,
//   ActionReducer,
//   MetaReducer
// } from '@ngrx/store';
// import { environment } from '../../../environments/environment';
// import { RouterStateUrl } from '../../shared/utils';
// import * as fromRouter from '@ngrx/router-store';
//
// /**
//  * storeFreeze prevents state from being mutated. When mutation occurs, an
//  * exception will be thrown. This is useful during development mode to
//  * ensure that none of the reducers accidentally mutates the state.
//  */
// import { storeFreeze } from 'ngrx-store-freeze';
//
// /**
//  * Every reducer module's default export is the reducer function itself. In
//  * addition, each module should export a type or interface that describes
//  * the state of the reducer plus any selector functions. The `* as`
//  * notation packages up all of the exports into a single object.
//  */
//
// // import * as fromLayout from '../core/reducers/layout';
//
// import { LayoutActionTypes, LayoutActionsUnion } from '../actions/actions';
//
// export interface State {
//   showSidenav: boolean;
// }
//
// const initialState: State = {
//   showSidenav: false
// };
//
// export function reducer(
//   state: State = initialState,
//   action: LayoutActionsUnion
// ): State {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }
//
// // export const getShowSidenav = (state: State) => state.showSidenav;
//
// /**
//  * As mentioned, we treat each reducer like a table in a database. This means
//  * our top level state interface is just a map of keys to inner state types.
//  */
// export interface State {
//   layout: State;
//   router: fromRouter.RouterReducerState<RouterStateUrl>;
// }
//
// /**
//  * Our state is composed of a map of action reducer functions.
//  * These reducer functions are called with each dispatched action
//  * and the current or initial state and return a new immutable state.
//  */
// export const reducers: ActionReducerMap<State> = {
//   layout: reducer,
//   router: fromRouter.routerReducer
// };
//
// // console.log all actions
// export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
//   return function(state: State, action: any): State {
//     console.log('state', state);
//     console.log('action', action);
//
//     return reducer(state, action);
//   };
// }
//
// /**
//  * By default, @ngrx/store uses combineReducers with the reducer map to compose
//  * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
//  * that will be composed to form the root meta-reducer.
//  */
// export const metaReducers: MetaReducer<State>[] = !environment.production
//   ? [logger, storeFreeze]
//   : [];
//
// /**
//  * Layout Reducers
//  */
// // export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');
//
// // export const getShowSidenav = createSelector(
// //   getLayoutState,
// //   getShowSidenav
// // );
import {
  Action,
  createFeatureSelector,
  createSelector,
  StoreModule,
  ActionReducerMap
} from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}
export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export const getRouterState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>('router');

/**
 * Create new selector to watch change on selectedLoggId.
 * Feel lines above, you can see where we create the const selectedId
 */
export const getRouterUrl = createSelector(
  getRouterState,
  (state: RouterReducerState<RouterStateUrl>) => state.state && state.state.url
);

export const getRouterParams = createSelector(
  getRouterState,
  (state: RouterReducerState<RouterStateUrl>) => {
    // console.log('RouterParams', state.state && state.state.params);
    return state.state && state.state.params.loggId;
  }
);

export const getRouterLoggId = createSelector(
  getRouterState,
  (state: RouterReducerState<RouterStateUrl>) =>
    state.state && state.state.params.loggId
);
