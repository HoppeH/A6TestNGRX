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
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
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

  rangeringForm: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  valgKonsistens: string[] = [
    'Hard',
    'Klumpete',
    'Grøt',
    'Klissete',
    'Sprut',
    'Myk'
  ];

  filtreteValgKonsistens: Observable<string[]>;

  loggFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loggFormGroup = this.fb.group({
      form: [''],
      konsistens: ['', Validators.maxLength(20)],
      blod: [false],
      slim: [false],

      kommentar: ['', [Validators.maxLength(250)]],
      signatur: ['TEF', Validators.required]
    });

    this.filtreteValgKonsistens = this.kommentar.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }

  onSubmit() {
    this.add.emit(this.loggFormGroup.value);
    console.log(this.loggFormGroup);
    this.loggFormGroup.reset({
      form: '',
      konsistens: '',
      blod: false,
      slim: false,
      signatur: 'TEF'
    });
  }

  resetTodos() {
    this.reset.emit();
  }

  filter(val: string): string[] {
    return this.valgKonsistens.filter(option =>
      option.toLowerCase().includes(val.toLowerCase())
    );
  }

  get kommentar() {
    return this.loggFormGroup.get('konsistens');
  }
}
