import { Action, createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

import * as fromTodos from '../actions';
import { Todo } from '../../models/todo.models';

export const todoAdapter = createEntityAdapter<Todo>();
export interface TodoState extends EntityState<Todo> {}

const defaultTodo = {
  loaded: false,
  loading: false
};

export const initialTodoState: TodoState = todoAdapter.getInitialState(
  defaultTodo
);
export function TodoReducer(
  state = initialTodoState,
  action: fromTodos.TodoActions
) {
  switch (action.type) {
    case fromTodos.LOAD_TODOS:
      return { ...state, loading: true };

    case fromTodos.LOAD_TODOS_SUCCESS:
      return todoAdapter.addMany(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    case fromTodos.LOAD_TODOS_FAIL:
      return todoAdapter.addOne(action.payload, state);

    case fromTodos.ADD_TODO:
      return todoAdapter.addOne(action.todo, state);

    case fromTodos.UPDATE_TODO:
      return todoAdapter.updateOne(action.payload.todo, state);

    case fromTodos.DELETE_TODO:
      return todoAdapter.removeOne(action.id, state);

    case fromTodos.RESET_TODOS:
      return todoAdapter.removeAll(state);

    default:
      return state;
  }
}

export const getTodoState = createFeatureSelector<TodoState>('todos');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = todoAdapter.getSelectors(getTodoState);
