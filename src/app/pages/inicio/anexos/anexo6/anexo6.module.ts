import { ComponentsModule } from './../../../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Anexo6PageRoutingModule } from './anexo6-routing.module';

import { Anexo6Page } from './anexo6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Anexo6PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Anexo6Page]
})
export class Anexo6PageModule {}
