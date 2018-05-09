import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import * as fromTodos from '../actions';
import { Todo } from '../../models/todo.models';

export interface TodoState extends EntityState<Todo> {
  loaded: boolean | null;
  loading: boolean;
  error: boolean;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();
const initialState = {
  loaded: false,
  loading: false,
  error: false
};

export const initialTodoState: TodoState = adapter.getInitialState(
  initialState
);
export function TodoReducer(
  state = initialTodoState,
  action: fromTodos.TodoActions
) {
  switch (action.type) {
    case fromTodos.LOAD_TODOS:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false
      };

    case fromTodos.LOAD_TODOS_SUCCESS:
      return adapter.addMany(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    case fromTodos.LOAD_TODOS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true
      };

    case fromTodos.ADD_TODO:
      return adapter.addOne(action.todo, state);

    case fromTodos.UPDATE_TODO:
      return adapter.updateOne(action.payload.todo, state);

    case fromTodos.DELETE_TODO:
      return adapter.removeOne(action.id, state);

    case fromTodos.RESET_TODOS:
      return adapter.removeAll(state);

    default:
      return state;
  }
}

export const getTodosState = createFeatureSelector<TodoState>('todos');

export const todosLoaded = (state: TodoState) => state.loaded;
export const todosLoading = (state: TodoState) => state.loading;
export const todosError = (state: TodoState) => state.error;

/**
 * Create new selector to watch change on selectedTodoId.
 * Feel lines above, you can see where we create the const selectedId
 */
export const getTodosLoaded = createSelector(getTodosState, todosLoaded);
export const getTodosLoading = createSelector(getTodosState, todosLoading);
export const getTodosError = createSelector(getTodosState, todosError);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(getTodosState);
