import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DTIPageRoutingModule } from './dti-routing.module';

import { DTIPage } from './dti.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DTIPageRoutingModule,
    PipesModule
  ],
  declarations: [DTIPage]
})
export class DTIPageModule {}
