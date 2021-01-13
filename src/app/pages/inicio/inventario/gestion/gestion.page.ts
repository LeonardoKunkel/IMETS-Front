import { InventarioService } from './../../../../services/inventario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {

  superDatos: any = [];
  datos: any = {
    ubicacion: '',
    nuevos: '',
    premium: '',
    maquinar: '',
    cambio: '',
    inspeccionar: '',
    baja: '',
    perdidas: '',
    cementados: '',
    chuecos: '',
    sinRevestimiento: '',
    total: '',
  };

  constructor( private inventario: InventarioService ) { }

  ngOnInit() {
    this.getInventario();
  }

  getInventario() {
    this.inventario.getInventario().subscribe((data: any) => {
      this.superDatos = data.inv;
      console.log(data.inv);
    });
  }

  postInventario() {
    this.inventario.postInventario(this.datos).subscribe((data: any) => {
      console.log(data);
    });
  }

  totalFinal() {
    const valores = this.datos;
    let suma = 0;
    valores.forEach(valor => {
      suma += valor;
      console.log(suma);
    });
  }

}
