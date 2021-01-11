import { InventarioService } from './../../../services/inventario.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {
  specs: any = [];
  opcion: '';
  datos: any = {
    diametro: '',
    grado: '',
    libraje: '',
    conexP: ''
  };

  constructor(
    private inventario: InventarioService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.inventario.getInventario()
      .subscribe( (data: any) => {
        console.log(data);
        this.specs = data.inv;
      });
  }

  getDiametros() {
    this.aux(this.datos);
  }

  aux(datos) {
    if (datos.diametro) {
      this.inventario.filtroDiametro(datos.diametro, 'diametro').subscribe((data: any) => {
        this.specs = data;
      });
    }
    if (datos.grado) {
      this.inventario.filtroDiametro(datos.grado, 'grado').subscribe((data: any) => {
        this.specs = data;
      });
    }
    if (datos.libraje) {
      this.inventario.filtroDiametro(datos.libraje, 'libraje').subscribe((data: any) => {
        this.specs = data;
      });
    }
    if (datos.conexionPinon) {
      this.inventario.filtroDiametro(datos.conexionPinon, 'conexionPinon').subscribe((data: any) => {
        this.specs = data;
      });
    }
  }

  dimetroFilter(diametro) {
    this.specs = this.specs.filter( spec => {
      console.log(diametro);
      return diametro === spec.diametro;
    });
  }

  goGestion() {
    this.navCtrl.navigateForward('/inicio/inventario/gestion');
  }

}
