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

import { Logg } from '../../models';

@Component({
  selector: 'app-logg-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './logg-input.component.html',
  styleUrls: ['./logg-input.component.scss']
})
export class LoggInputComponent implements OnInit {
  @Output() add = new EventEmitter<Logg>();
  @Output() reset = new EventEmitter<void>();

  loggFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loggFormGroup = this.fb.group({
      form: ['0'],
      konsistens: [''],
      blod: [false],
      slim: [false],
      matKommentar: [''],
      kommentar: [''],
      signatur: ['TEF']
    });
  }

  onSubmit() {
    this.add.emit(this.loggFormGroup.value);
    console.log(this.loggFormGroup);
    // this.loggFormGroup.reset({ completed: false });
  }

  resetTodos() {
    this.reset.emit();
  }

  get name() {
    return this.loggFormGroup.get('name');
  }
}
