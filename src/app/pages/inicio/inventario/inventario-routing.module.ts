import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioPage } from './inventario.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioPage
  },
  {
    path: 'gestion',
    loadChildren: () => import('./gestion/gestion.module').then( m => m.GestionPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioPageRoutingModule {}
