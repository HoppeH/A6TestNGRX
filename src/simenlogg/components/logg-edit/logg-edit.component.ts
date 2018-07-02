import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../../app/store';
import { Logg } from '../../models';

@Component({
  selector: 'app-logg-edit',
  templateUrl: './logg-edit.component.html',
  styleUrls: ['./logg-edit.component.scss']
})
export class LoggEditComponent implements OnInit {
  testObs$;
  // constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    // this.testObs$ = this.store.select(fromRoot.getUrlState);
  }
}
