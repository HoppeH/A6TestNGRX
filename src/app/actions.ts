import { Action } from '@ngrx/store';

import { Todo } from './models';

export const ADD_TODO = '[Todos] Add Todo';
export const DELETE_TODO = '[Todos] Delete Todo';
export const UPDATE_TODO = '[Todos] Update Todo';
export const RESET_TODOS = '[Todos] Reset Todos';

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public todo: Todo) {}
}

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;
  constructor(public id: string, public changes: Partial<Todo>) {}
}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;
  constructor(public id: string) {}
}

export class ResetTodos implements Action {
  readonly type = RESET_TODOS;
}

export type TodoActions = AddTodo | DeleteTodo | UpdateTodo | ResetTodos;
