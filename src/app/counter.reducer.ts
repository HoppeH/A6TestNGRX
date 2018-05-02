// counter.ts
import { Action } from '@ngrx/store';

import * as fromTodos from './actions';
import { Todo } from './models';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

// export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const RESET_TODOS = 'RESET_TODOS';

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

export function TodoReducer(
  state: Todo[] = [
    { id: 1, name: 'InitialState', completed: true, CompletedTime: new Date() }
  ],
  action: fromTodos.TodoActions
) {
  switch (action.type) {
    case fromTodos.ADD_TODO:
      console.log(action.todo);
      const todo = action.todo;
      return [...state, todo];

    // case REMOVE_TODO:
    // return state.filter(todos => action.id !== todos.id );

    case fromTodos.RESET_TODOS:
      return [];

    default:
      return state;
  }
}
