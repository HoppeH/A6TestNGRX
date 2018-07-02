import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as fromRouterStore from '../../../app/store';
import * as fromLoggStore from '../../store';
import { Logg } from '../../models/';

@Component({
  selector: 'app-logg-input-edit',
  templateUrl: './logg-input-edit.component.html',
  styleUrls: ['./logg-input-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggInputEditComponent implements OnInit {
  routerUrl$: Observable<any>;
  routerParams$: Observable<any>;
  selectedLogg$: Observable<Logg>;

  constructor(
    private store: Store<fromLoggStore.LoggState>,
    private routerStore: Store<fromRouterStore.State>
  ) {}

  ngOnInit() {
    this.routerUrl$ = this.routerStore.select(fromRouterStore.getRouterUrl);
    this.routerParams$ = this.routerStore.select(
      fromRouterStore.getRouterParams
    );
    this.selectedLogg$ = this.store.pipe(select(fromLoggStore.getSelectedLogg));
  }

  addLogg(logg: Logg) {
    console.log('Logg-input-edit', logg);
    this.store.dispatch(new fromLoggStore.AddLogg(logg));
    this.routerStore.dispatch(
      new fromRouterStore.Go({
        path: ['simenlogg'],
        query: {},
        extras: { replaceUrl: false }
      })
    );
  }

  navigateBack() {
    this.routerStore.dispatch(new fromRouterStore.Back());
  }

  editLogg(logg: Logg) {
    // console.log(this.routerUrlState$.subscribe(state => console.log(state)));
    console.log('edit logg container');

    this.routerStore.dispatch(
      new fromRouterStore.Go({
        path: ['simenlogg', logg.id],
        query: {},
        extras: { replaceUrl: false }
      })
    );
  }
}
