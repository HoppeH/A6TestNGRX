import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import * as fromStore from '../../store';
import { Logg } from '../../models/';

@Component({
  selector: 'app-loggs',
  templateUrl: './loggs.component.html',
  styleUrls: ['./loggs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggsComponent implements OnInit {
  todos$: Observable<Logg[]>;
  todosCount$: Observable<number>;
  todosLoading$: Observable<boolean>;
  todosLoaded$: Observable<boolean>;
  todosError$: Observable<any>;

  constructor(private store: Store<fromStore.LoggState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadLoggs());
    this.todos$ = this.store.select(fromStore.selectAll);
    this.todosCount$ = this.store.select(fromStore.selectTotal);
    this.todosLoading$ = this.store.select(fromStore.getLoggsLoading);
    this.todosLoaded$ = this.store.select(fromStore.getLoggsLoading);
    this.todosError$ = this.store.select(fromStore.getLoggsError);
  }
}
