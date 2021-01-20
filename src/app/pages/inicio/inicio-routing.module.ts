import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'anexos',
    loadChildren: () => import('./anexos/anexos.module').then( m => m.AnexosPageModule)
  },
  {
    path: 'dti',
    loadChildren: () => import('./dti/dti.module').then( m => m.DTIPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./inventario/inventario.module').then( m => m.InventarioPageModule)
  },
  {
    path: 'opts',
    loadChildren: () => import('./opts/opts.module').then( m => m.OptsPageModule)
  },  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
