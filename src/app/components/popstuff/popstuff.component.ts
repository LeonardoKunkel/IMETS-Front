import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popstuff',
  templateUrl: './popstuff.component.html',
  styleUrls: ['./popstuff.component.scss'],
})
export class PopstuffComponent implements OnInit {

  valores: any[] = [
    {
      valor: 'Si',
    },
    {
      valor: 'No'
    },
    {
      valor: 'No Aplica'
    }
  ];

  constructor( private popCtrl: PopoverController ) {   }

  ngOnInit() {}

  onClick1(event) {
    const popi = event.target.outerText;
    this.popCtrl.dismiss({
      popi
    });
  }

}
