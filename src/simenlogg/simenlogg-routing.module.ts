import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromContainers from './containers';
import * as fromComponents from './components';
const routes: Routes = [
  {
    path: '',
    component: fromContainers.LoggsComponent
  },
  {
    path: ':loggId',
    component: fromContainers.LoggInputEditComponent
  },
  {
    path: 'new',
    component: fromContainers.LoggInputEditComponent
  },
  {
    path: 'edit/:loggId',
    component: fromContainers.LoggInputEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimenloggRoutingModule {}
