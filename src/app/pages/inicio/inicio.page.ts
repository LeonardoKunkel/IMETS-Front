import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  cerrarSesion() {
    this.navCtrl.navigateBack('/login');
  }

  goAnexos() {
    this.navCtrl.navigateForward('/inicio/anexos');
  }

  goDti() {
    this.navCtrl.navigateForward('/inicio/dti');
  }

  goInvent() {
    this.navCtrl.navigateForward('/inicio/inventario');
  }

  config() {
    this.navCtrl.navigateForward('/inicio/opts');
  }
}
