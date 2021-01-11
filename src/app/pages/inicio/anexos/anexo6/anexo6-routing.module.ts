import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Anexo6Page } from './anexo6.page';

const routes: Routes = [
  {
    path: '',
    component: Anexo6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Anexo6PageRoutingModule {}
