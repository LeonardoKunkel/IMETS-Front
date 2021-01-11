import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Anexo5PageRoutingModule } from './anexo5-routing.module';

import { Anexo5Page } from './anexo5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Anexo5PageRoutingModule
  ],
  declarations: [Anexo5Page]
})
export class Anexo5PageModule {}
