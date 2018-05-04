import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from './counter.reducer';
import { DeleteTodo, AddTodo, ResetTodos } from './actions';
import { ChangeDetectionStrategy } from '@angular/core';
import * as actions from './actions';
import * as fromTodos from './counter.reducer';

import { Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  count$: Observable<number>;
  todos$: Observable<Todo[]>;
  formtodo = '';
  title = 'app';
  constructor(private store: Store<fromTodos.TodoState>) {
    this.count$ = store.pipe(select('count'));
    console.log(store.pipe(select(fromTodos.selectAll)));
    this.todos$ = store.pipe(select(fromTodos.selectAll));
  }

  addTodo(todo: Todo) {
    const TodoData: Todo = {
      id: new Date().getMilliseconds().toString(),
      name: todo.name,
      completed: todo.completed,
      CompletedTime: todo.CompletedTime
    };
    // const todo1 = Array.of(todo);
    this.store.dispatch(new AddTodo(TodoData));
  }

  deleteTodo(id: string) {
    this.store.dispatch(new DeleteTodo(id));
    console.log('DeleteTodo');
  }
  resetTodos() {
    this.store.dispatch(new ResetTodos());
  }
  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
