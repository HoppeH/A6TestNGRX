import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'simenlogg' },
  {
    path: 'todos',
    loadChildren: '../todos/todos.module#TodosModule'
  },
  {
    path: 'simenlogg',
    loadChildren: '../simenlogg/simenlogg.module#SimenloggModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
