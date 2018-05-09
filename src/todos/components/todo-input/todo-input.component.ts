import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { Todo } from '../../models';
@Component({
  selector: 'app-todo-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  @Input() todosCount: any;

  @Output() add = new EventEmitter<Todo>();
  @Output() reset = new EventEmitter<void>();

  todoFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.todoFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      completed: [false],
      completedTime: [null]
    });
  }

  onSubmit() {
    this.add.emit(this.todoFormGroup.value);
    this.todoFormGroup.reset({ completed: false });
  }

  resetTodos() {
    this.reset.emit();
  }

  get name() {
    return this.todoFormGroup.get('name');
  }
}
