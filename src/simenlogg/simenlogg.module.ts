import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Angular Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
// routing
import { SimenloggRoutingModule } from './simenlogg-routing.module';

// store
import { LoggReducer } from './store';
import { effects } from './store/effects';

// services
import { services } from './services';

// containers
import { LoggsComponent } from './containers/loggs/loggs.component';
import { LoggListComponent } from './components/logg-list/logg-list.component';
import { LoggInputComponent } from './components/logg-input/logg-input.component';
import { LoggEditComponent } from './components/logg-edit/logg-edit.component';
import { LoggInputEditComponent } from './containers/logg-input-edit/logg-input-edit.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SimenloggRoutingModule,
    StoreModule.forFeature('simenlogg', LoggReducer),
    EffectsModule.forFeature(effects),
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [services],
  declarations: [
    LoggsComponent,
    LoggListComponent,
    LoggInputComponent,
    LoggEditComponent,
    LoggInputEditComponent
  ]
})
export class SimenloggModule {}
