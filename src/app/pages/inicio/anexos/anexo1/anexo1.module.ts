import { ComponentsModule } from './../../../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Anexo1PageRoutingModule } from './anexo1-routing.module';

import { Anexo1Page } from './anexo1.page';
import { PopstuffComponent } from 'src/app/components/popstuff/popstuff.component';

@NgModule({
  entryComponents: [
    PopstuffComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Anexo1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Anexo1Page]
})
export class Anexo1PageModule {}
