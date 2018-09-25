import { Component } from '@angular/core';
import { INCREMENT, DECREMENT, RESET } from './counter.reducer';
import { DeleteTodo, AddTodo, ResetTodos } from './actions';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRouter from '../store';

import * as actions from './actions';
import * as fromTodos from './counter.reducer';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';

import { Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  formtodo = '';
  title = 'app';
  constructor(private store: Store<fromRouter.State>) {}

  navigate(route: string) {
    this.store.dispatch(
      new fromRouter.Go({
        path: [route],
        query: {},
        extras: { replaceUrl: false }
      })
    );
  }
}
