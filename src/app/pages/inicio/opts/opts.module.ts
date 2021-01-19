import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptsPageRoutingModule } from './opts-routing.module';

import { OptsPage } from './opts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptsPageRoutingModule
  ],
  declarations: [OptsPage]
})
export class OptsPageModule {}
