import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DTIPage } from './dti.page';

const routes: Routes = [
  {
    path: '',
    component: DTIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DTIPageRoutingModule {}
