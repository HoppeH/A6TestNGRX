import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Angular Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// routing
import { SimenloggRoutingModule } from './simenlogg-routing.module';

// store
import { LoggReducer } from './store';
import { effects } from './store/effects';

// services
import { services } from './services';

// containers
import { LoggsComponent } from './containers/loggs/loggs.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SimenloggRoutingModule,
    StoreModule.forFeature('simenlogg', LoggReducer),
    EffectsModule.forFeature(effects),
    MatProgressSpinnerModule
  ],
  providers: [services],
  declarations: [LoggsComponent]
})
export class SimenloggModule {}
