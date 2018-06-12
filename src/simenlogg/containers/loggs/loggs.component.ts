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
  loggs$: Observable<Logg[]>;
  loggsCount$: Observable<number>;
  loggsLoading$: Observable<boolean>;
  loggsLoaded$: Observable<boolean>;
  loggsError$: Observable<any>;

  constructor(private store: Store<fromStore.LoggState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadLoggs());
    this.loggs$ = this.store.select(fromStore.selectAll);
    this.loggsCount$ = this.store.select(fromStore.selectTotal);
    this.loggsLoading$ = this.store.select(fromStore.getLoggsLoading);
    this.loggsLoaded$ = this.store.select(fromStore.getLoggsLoading);
    this.loggsError$ = this.store.select(fromStore.getLoggsError);
  }

  addLogg(logg: Logg) {
    // const LoggData: Logg = {
    // id: new Date().getMilliseconds().toString(),
    // name: logg.name,
    // completed: logg.completed,
    // completedTime: logg.completedTime
    // };
    // const logg1 = Array.of(logg);
    // this.store.dispatch(new fromStore.AddLogg(LoggData));
  }

  loadLoggs() {
    this.store.dispatch(new fromStore.LoadLoggs());
  }

  deleteLogg(logg: Logg) {
    this.store.dispatch(new fromStore.DeleteLogg(logg));
  }

  // toggleLogg(logg: Logg) {
  //   const newLogg = logg;
  //   newLogg.completed = !logg.completed;
  //
  //   if (logg.completed === false) {
  //     newLogg.completedTime = null;
  //   } else {
  //     newLogg.completedTime = new Date();
  //   }
  //
  //   this.store.dispatch(
  //     new fromStore.UpdateLogg({ logg: { id: newLogg.id, changes: newLogg } })
  //   );
  // }

  resetLoggs() {
    this.store.dispatch(new fromStore.ResetLoggs());
  }
}
