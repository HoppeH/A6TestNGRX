import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { Todo } from '../../models';

@Component({
  selector: 'app-todos-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  @Input() todos: Todo[];

  @Output() add = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<string>();
  @Output() reset = new EventEmitter<void>();

  constructor() {}

  addTodo(todo: Todo) {
    this.add.emit(todo);
  }

  deleteTodo(id: string) {
    this.delete.emit(id);
  }

  resetTodos() {
    this.reset.emit();
  }
}
