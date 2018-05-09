import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from '../../models/todo.models';

export const LOAD_TODOS = '[Todos] Load Todos';
export const LOAD_TODOS_FAIL = '[Todos] Load Todos Fail';
export const LOAD_TODOS_SUCCESS = '[Todos] Load Todos Success';

export const ADD_TODO = '[Todos] Add Todo';
export const TOGGLE_TODO = '[Todos] Toggle Todo';
export const DELETE_TODO = '[Todos] Delete Todo';
export const UPDATE_TODO = '[Todos] Update Todo';
export const RESET_TODOS = '[Todos] Reset Todos';

export class LoadTodos implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadTodosFail implements Action {
  readonly type = LOAD_TODOS_FAIL;
  constructor(public payload: any) {}
}

export class LoadTodosSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: Todo[]) {}
}

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public todo: Todo) {}
}

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;
  constructor(public payload: { todo: Update<Todo> }) {}
}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;
  constructor(public id: string) {}
}

export class ToggleTodo implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public todo: Todo) {}
}

export class ResetTodos implements Action {
  readonly type = RESET_TODOS;
}

export type TodoActions =
  | AddTodo
  | DeleteTodo
  | UpdateTodo
  | ResetTodos
  | ToggleTodo
  | LoadTodos
  | LoadTodosFail
  | LoadTodosSuccess;
