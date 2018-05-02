import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from './counter.reducer';
import { DeleteTodo, AddTodo, ResetTodos } from './actions';
import { ChangeDetectionStrategy } from '@angular/core';

interface Todo {
  name: string;
  completed: boolean;
  CompletedTime: Date;
}

interface AppState {
  Todos: Todo[];
  counter: number;
}

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
  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
    this.todos$ = store.pipe(select('todos'));
  }

  addTodo(todo: Todo) {
    // const todo1 = Array.of(todo);
    this.store.dispatch(new AddTodo(todo));
    console.log(todo);
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch(new DeleteTodo(todo));
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
