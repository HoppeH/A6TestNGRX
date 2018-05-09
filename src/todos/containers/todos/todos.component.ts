import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import * as fromStore from '../../store';
import { Todo } from '../../models/';

@Component({
  selector: 'app-todos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;
  todosCount$: Observable<number>;
  todosLoading$: Observable<boolean>;
  todosLoaded$: Observable<boolean>;
  todosError$: Observable<any>;

  constructor(private store: Store<fromStore.TodoState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadTodos());
    this.todos$ = this.store.select(fromStore.selectAll);
    this.todosCount$ = this.store.select(fromStore.selectTotal);
    this.todosLoading$ = this.store.select(fromStore.getTodosLoading);
    this.todosLoaded$ = this.store.select(fromStore.getTodosLoading);
    this.todosError$ = this.store.select(fromStore.getTodosError);
  }

  addTodo(todo: Todo) {
    const TodoData: Todo = {
      id: new Date().getMilliseconds().toString(),
      name: todo.name,
      completed: todo.completed,
      completedTime: todo.completedTime
    };
    // const todo1 = Array.of(todo);
    this.store.dispatch(new fromStore.AddTodo(TodoData));
  }

  loadTodos() {
    this.store.dispatch(new fromStore.LoadTodos());
  }

  deleteTodo(id: string) {
    this.store.dispatch(new fromStore.DeleteTodo(id));
  }

  toggleTodo(todo: Todo) {
    const newTodo = todo;
    newTodo.completed = !todo.completed;

    if (todo.completed === false) {
      newTodo.completedTime = null;
    } else {
      newTodo.completedTime = new Date();
    }

    this.store.dispatch(
      new fromStore.UpdateTodo({ todo: { id: newTodo.id, changes: newTodo } })
    );
  }

  resetTodos() {
    this.store.dispatch(new fromStore.ResetTodos());
  }
}
