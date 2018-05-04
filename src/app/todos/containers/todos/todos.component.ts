import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

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

  constructor(private store: Store<fromStore.TodoState>) {}

  ngOnInit() {
    this.todos$ = this.store.select(fromStore.selectAll);
    console.log(this.todos$);
  }

  addTodo(todo: Todo) {
    const TodoData: Todo = {
      id: new Date().getMilliseconds().toString(),
      name: todo.name,
      completed: todo.completed,
      CompletedTime: todo.CompletedTime
    };
    // const todo1 = Array.of(todo);
    this.store.dispatch(new fromStore.AddTodo(TodoData));
  }

  deleteTodo(id: string) {
    this.store.dispatch(new fromStore.DeleteTodo(id));
    console.log('DeleteTodo');
  }
  resetTodos() {
    this.store.dispatch(new fromStore.ResetTodos());
  }
}
