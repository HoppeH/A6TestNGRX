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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Logg } from '../../models';

@Component({
  selector: 'app-logg-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './logg-input.component.html',
  styleUrls: ['./logg-input.component.scss']
})
export class LoggInputComponent implements OnInit {
  @Output() add = new EventEmitter<Logg>();
  @Output() update = new EventEmitter<Logg>();
  @Output() reset = new EventEmitter<void>();
  @Output() navigateBack = new EventEmitter<void>();

  @Input() isEditMode: boolean;
  @Input() selectedLogg: Logg;
  @Input() routerParams: any;

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
    // console.log(this.routerUrlState);

    this.loggFormGroup = this.fb.group({
      id: '',
      tidspunkt: [''],
      form: [''],
      konsistens: ['', Validators.maxLength(20)],
      blod: [false],
      slim: [false],

      kommentar: ['', [Validators.maxLength(250)]],
      signatur: ['TEF', Validators.required]
    });

    console.log(this.selectedLogg);
    if (this.selectedLogg !== undefined) {
      console.log(this.selectedLogg);
      this.loggFormGroup.setValue(this.selectedLogg);
    }

    this.filtreteValgKonsistens = this.kommentar.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }

  onSubmit() {
    this.add.emit(this.loggFormGroup.value);
    console.log(this.loggFormGroup.value);
    this.loggFormGroup.reset({
      form: '',
      konsistens: '',
      blod: false,
      slim: false,
      signatur: 'TEF'
    });
  }

  onUpdate() {
    console.log('Update Logg', this.loggFormGroup.value);
    this.update.emit(this.loggFormGroup.value);
  }

  filter(val: string): string[] {
    return this.valgKonsistens.filter(option =>
      option.toLowerCase().includes(val.toLowerCase())
    );
  }

  onNavigateBack() {
    this.navigateBack.emit();
  }

  get kommentar() {
    return this.loggFormGroup.get('konsistens');
  }
}
