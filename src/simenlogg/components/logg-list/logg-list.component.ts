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
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { Logg } from '../../models';

@Component({
  selector: 'app-logg-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './logg-list.component.html',
  styleUrls: ['./logg-list.component.scss']
})
export class LoggListComponent {
  @Input() loggs: Logg[];

  @Output() add = new EventEmitter<Logg>();
  @Output() load = new EventEmitter();
  @Output() delete = new EventEmitter<Logg>();
  @Output() edit = new EventEmitter<Logg>();

  constructor() {}

  addTodo(logg: Logg) {
    this.add.emit(logg);
  }

  deleteLogg(logg: Logg) {
    this.delete.emit(logg);
  }
  loadLoggs() {
    this.load.emit();
  }

  onEditLogg(logg: Logg) {
    this.edit.emit(logg);
  }
}
