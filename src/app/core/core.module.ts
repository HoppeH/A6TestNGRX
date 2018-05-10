import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppComponent } from './app.component';

import { counterReducer } from './counter.reducer';
import { AppEffects } from './effects';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent],
  exports: [AppComponent]
})
export class CoreModule {}
