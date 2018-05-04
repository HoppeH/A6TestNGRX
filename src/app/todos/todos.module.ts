import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { TodosRoutingModule } from './todos-routing.module';

import { TodoReducer } from './store';
import { TodosComponent } from './containers/todos/todos.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    StoreModule.forFeature('todos', TodoReducer),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [TodosComponent, TodosListComponent]
})
export class TodosModule {}
