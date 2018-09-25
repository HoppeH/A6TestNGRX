// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Angular CLI environemnt

// environment variables
import { environment } from '../environments/environment';

// Angular material
import { MaterialModule } from './material/material.module';

// Flexbox
import { FlexLayoutModule } from '@angular/flex-layout';

// Custom components
import { AppComponent } from './core/app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

// NGRX
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// NGRX Custom
import { RouterEffects } from './store/effects';
import { counterReducer } from './core/counter.reducer';
import { reducers, CustomSerializer } from './store/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([RouterEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
