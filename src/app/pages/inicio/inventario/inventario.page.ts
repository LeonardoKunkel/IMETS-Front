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
  diametro: any = [
    '2 7/8',
    '3 1/2',
    '4',
    '4 1/2',
    '5'
  ];
  grado: any = [
    'X-95',
    'G-105',
    'S-135',
    'E-75',
    'NA'
  ];
  libraje: any = [
    6.85,
    13.3,
    15.5,
    14,
    16.6,
    20,
    19.5,
    25.3,
    27,
    41,
    49.3,
    52
  ];
  conexP: any = [
    'NC-26',
    'NC-31',
    'NC-26(izq.)',
    'NC-31(izq.)',
    'NC-38',
    'NC-38(izq.)',
    'XT-39',
    'NC-46',
    'NC-46(izq.)',
    'NC-50',
  ];
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
