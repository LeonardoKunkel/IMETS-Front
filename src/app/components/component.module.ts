import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopstuffComponent } from './popstuff/popstuff.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        PopstuffComponent
    ],
    exports: [
        PopstuffComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ]
})

export class ComponentsModule { }
