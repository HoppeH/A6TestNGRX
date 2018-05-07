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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

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
  @Output() toggle = new EventEmitter<Todo>();

  @Output() delete = new EventEmitter<string>();

  constructor() {}

  addTodo(todo: Todo) {
    this.add.emit(todo);
  }

  deleteTodo(id: string) {
    this.delete.emit(id);
  }

  toggleCompleted(todo: Todo) {
    // console.log(todo);
    this.toggle.emit(todo);
  }
}
