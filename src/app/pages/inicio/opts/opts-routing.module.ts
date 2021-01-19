import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptsPage } from './opts.page';

const routes: Routes = [
  {
    path: '',
    component: OptsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptsPageRoutingModule {}
