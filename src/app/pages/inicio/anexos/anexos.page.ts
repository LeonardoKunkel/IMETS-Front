import { PdfMakerService } from './../../../services/pdf-maker.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-anexos',
  templateUrl: './anexos.page.html',
  styleUrls: ['./anexos.page.scss'],
})
export class AnexosPage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  anexo1() {
    this.navCtrl.navigateForward('/inicio/anexos/anexo1');
  }

  anexo2() {
    this.navCtrl.navigateForward('/inicio/anexos/anexo2');
  }

  anexo3() {
    this.navCtrl.navigateForward('/inicio/anexos/anexo3');
  }

  anexo4() {
    this.navCtrl.navigateForward('/inicio/anexos/anexo4');
  }

  anexo5() {
    this.navCtrl.navigateForward('/inicio/anexos/anexo5');
  }

  anexo6() {
    this.navCtrl.navigateForward('/inicio/anexos/anexo6');
  }
}
