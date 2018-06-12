import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import * as fromLoggs from '../actions';
import { Logg } from '../../models/logg.models';

export interface LoggState extends EntityState<Logg> {
  loaded: boolean | null;
  loading: boolean;
  error: boolean;
}

export const adapter: EntityAdapter<Logg> = createEntityAdapter<Logg>();
const initialState = {
  loaded: false,
  loading: false,
  error: false
};

export const initialLoggState: LoggState = adapter.getInitialState(
  initialState
);
export function LoggReducer(
  state = initialLoggState,
  action: fromLoggs.LoggActions
) {
  switch (action.type) {
    case fromLoggs.LOAD_LOGGS:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false
      };

    case fromLoggs.LOAD_LOGGS_SUCCESS:
      return adapter.addMany(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    case fromLoggs.LOAD_LOGGS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true
      };

    case fromLoggs.ADD_LOGG:
      return adapter.addOne(action.logg, state);

    case fromLoggs.UPDATE_LOGG:
      return adapter.updateOne(action.payload.logg, state);

    // case fromLoggs.DELETE_LOGG:
    //   return adapter.removeOne(action.id, state);

    case fromLoggs.DELETE_LOGG_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true
      };

    case fromLoggs.DELETE_LOGG_SUCCESS: {
      return adapter.removeOne(action.payload.id, state);
    }

    case fromLoggs.RESET_LOGGS:
      return adapter.removeAll(state);

    default:
      return state;
  }
}

export const getLoggsState = createFeatureSelector<LoggState>('simenlogg');

// export const todosLoaded = (state: LoggState) => state.loaded;
// export const todosLoading = (state: LoggState) => state.loading;
// export const todosError = (state: LoggState) => state.error;

/**
 * Create new selector to watch change on selectedLoggId.
 * Feel lines above, you can see where we create the const selectedId
 */
export const getLoggsLoaded = createSelector(
  getLoggsState,
  (state: LoggState) => state.loaded
);
export const getLoggsLoading = createSelector(
  getLoggsState,
  (state: LoggState) => state.loading
);
export const getLoggsError = createSelector(
  getLoggsState,
  (state: LoggState) => state.error
);

/**
 * Default selectors from Entities
 *
 */
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(getLoggsState);
