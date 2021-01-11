import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnexosPage } from './anexos.page';

const routes: Routes = [
  {
    path: '',
    component: AnexosPage
  },
  {
    path: 'anexo1',
    loadChildren: () => import('./anexo1/anexo1.module').then( m => m.Anexo1PageModule)
  },
  {
    path: 'anexo2',
    loadChildren: () => import('./anexo2/anexo2.module').then( m => m.Anexo2PageModule)
  },
  {
    path: 'anexo4',
    loadChildren: () => import('./anexo4/anexo4.module').then( m => m.Anexo4PageModule)
  },
  {
    path: 'anexo3',
    loadChildren: () => import('./anexo3/anexo3.module').then( m => m.Anexo3PageModule)
  },
  {
    path: 'anexo5',
    loadChildren: () => import('./anexo5/anexo5.module').then( m => m.Anexo5PageModule)
  },
  {
    path: 'anexo6',
    loadChildren: () => import('./anexo6/anexo6.module').then( m => m.Anexo6PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnexosPageRoutingModule {}
