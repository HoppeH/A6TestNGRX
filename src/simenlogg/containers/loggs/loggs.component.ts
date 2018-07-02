import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as fromRouterStore from '../../../app/store';
import * as fromLoggStore from '../../store';
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
  loggEdit: Logg = null;
  isEditMode: boolean = true;
  routerUrl$: Observable<any>;
  routerParams$: Observable<any>;
  selectedLogg$: Observable<Logg>;

  constructor(
    private store: Store<fromLoggStore.LoggState>,
    private routerStore: Store<fromRouterStore.State>
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromLoggStore.LoadLoggs());
    this.loggs$ = this.store.select(fromLoggStore.selectAll);
    this.loggsCount$ = this.store.select(fromLoggStore.selectTotal);
    this.loggsLoading$ = this.store.select(fromLoggStore.getLoggsLoading);
    this.loggsLoaded$ = this.store.select(fromLoggStore.getLoggsLoading);
    this.loggsError$ = this.store.select(fromLoggStore.getLoggsError);
    this.routerUrl$ = this.routerStore.select(fromRouterStore.getRouterUrl);
    this.routerParams$ = this.routerStore.select(
      fromRouterStore.getRouterParams
    );
    this.selectedLogg$ = this.store.pipe(select(fromLoggStore.getSelectedLogg));
  }

  loadLoggs() {
    this.store.dispatch(new fromLoggStore.ResetLoggs());
    this.store.dispatch(new fromLoggStore.LoadLoggs());
  }

  deleteLogg(logg: Logg) {
    this.store.dispatch(new fromLoggStore.DeleteLogg(logg));
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
  //     new fromLoggStore.UpdateLogg({ logg: { id: newLogg.id, changes: newLogg } })
  //   );
  // }

  routerGotoNew() {
    this.routerStore.dispatch(
      new fromRouterStore.Go({
        path: ['simenlogg', 'new'],
        query: {},
        extras: { replaceUrl: false }
      })
    );
  }

  editLogg(logg: Logg) {
    // console.log(this.routerUrlState$.subscribe(state => console.log(state)));
    console.log('edit logg container');
    this.isEditMode = true;
    this.loggEdit = logg;
    this.routerStore.dispatch(
      new fromRouterStore.Go({
        path: ['simenlogg', logg.id],
        query: {},
        extras: { replaceUrl: false }
      })
    );
  }

  resetLoggs() {
    this.store.dispatch(new fromLoggStore.ResetLoggs());
  }
}
