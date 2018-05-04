// counter.ts
import { Action, createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

import * as fromTodos from './actions';
import { Todo } from './models';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}
export const todoAdapter = createEntityAdapter<Todo>();
export interface TodoState extends EntityState<Todo> {}

const defaultTodo = {};

export const initialTodoState: TodoState = todoAdapter.getInitialState(
  defaultTodo
);
export function TodoReducer(
  state = initialTodoState,
  action: fromTodos.TodoActions
) {
  switch (action.type) {
    case fromTodos.ADD_TODO:
      return todoAdapter.addOne(action.todo, state);

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
