import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Angular Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
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

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SimenloggRoutingModule,
    StoreModule.forFeature('simenlogg', LoggReducer),
    EffectsModule.forFeature(effects),
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [services],
  declarations: [LoggsComponent, LoggListComponent]
})
export class SimenloggModule {}
