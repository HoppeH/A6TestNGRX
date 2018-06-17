import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { TodosRoutingModule } from './todos-routing.module';

import { TodoReducer } from './store';
import { effects } from './store/effects';

import { services } from './services';

import { TodosComponent } from './containers/todos/todos.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TodosRoutingModule,
    StoreModule.forFeature('todos', TodoReducer),
    EffectsModule.forFeature(effects),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    TodosRoutingModule,
    MatProgressSpinnerModule
  ],
  providers: [services],
  declarations: [TodosComponent, TodosListComponent, TodoInputComponent]
})
export class TodosModule {}
