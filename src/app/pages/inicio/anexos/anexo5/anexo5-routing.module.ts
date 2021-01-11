import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Anexo5Page } from './anexo5.page';

const routes: Routes = [
  {
    path: '',
    component: Anexo5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Anexo5PageRoutingModule {}
