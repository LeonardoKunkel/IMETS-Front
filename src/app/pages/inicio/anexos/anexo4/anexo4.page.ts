import { PdfMakerService } from './../../../../services/pdf-maker.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { AnexosService } from 'src/app/services/anexos.service';

@Component({
  selector: 'app-anexo4',
  templateUrl: './anexo4.page.html',
  styleUrls: ['./anexo4.page.scss'],
})
export class Anexo4Page implements OnInit {

  newDatos: any[] = [];
  valores: any[] = [];
  datos: any = {
    fecha1: '',
    plataforma: '',
    equipo: '',
    pozoLoc: '',
    departamento1: '',
    departamento2: '',
    departamento3: '',
    nombre1: '',
    nombre2: '',
    nombre3: '',
    ficha1: '',
    ficha2: '',
    ficha3: '',
  };

  constructor(
    private pdfMaker: PdfMakerService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private a4Service: AnexosService
  ) { }

  ngOnInit() {
    this.getA4();
  }

  getA4() {
    this.a4Service.getA4().subscribe((data: any) => {
      console.log(data);
      this.newDatos = data;
    });
  }

  postA4() {
    this.a4Service.postA4(this.datos).subscribe((data: any) => {
      console.log(data);
    });
  }

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Selecciona función asignada',
      inputs: [
        {
          type: 'radio',
          label: 'Líder',
          value: 'Líder'
        },
        {
          type: 'radio',
          label: 'Vocal',
          value: 'Vocal'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Ok',
          handler: (data: string) => {
            JSON.stringify(data);
            this.valores.push(data);
          }
        }
      ]
    });
    alert.present();
  }

  async upload() {
    console.log(this.datos);
    console.log(this.valores);
    const toast = await this.toastCtrl.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  pdf() {
    const dd = {
      header() {
        return {
          table: {
            widths: [100, 550, 100],
            body: [
              [
                {},
                {text: 'PEMEX Exploración y Servicios\nAnexo 4', alignment: 'center', bold: true},
                {}
              ],
            ]
          },
          layout: 'noBorders',
          margin: [22, 10]
        };
      },
      content: [
        {
          text: 'INTEGRACIÓN DE GRUPO MULTIDISCIPLINARIO PARA APLICACIÓN DE PROTOCOLO DE REVISIÓN DE SEGURIDAD DE PREARRANQUE',
          bold: true,
          alignment: 'center'
        },
        {text: '\n\n\n'},
        {
          text: `FECHA Y HORA DE INICIO DE LA RSPA:    ${this.datos.fecha1}`
        },
        {text: '\n\n\n'},
        {
          table: {
            widths: [80, 135, 45, 145, 122, 140],
            body: [
              [
                {text: 'PLATAFORMA:', border: []},
                {text: `${this.datos.plataforma}`, border: [false, false, false, true]},
                {text: 'EQUIPO:', border: []},
                {text: `${this.datos.equipo}`, border: [false, false, false, true]},
                {text: 'POZO/LOCALIZACIÓN:', border: []},
                {text: `${this.datos.pozoLoc}`, border: [false, false, false, true]}
              ]
            ]
          }
        },
        {text: '\n\n\n'},
        {
          text: 'Relación de integrantes que conformaran el Grupo Multidisciplinario de Revisión de Seguridad de Pre-Arranque:'
        },
        {
          table: {
            widths: [140, 240, 100, 220],
            body: [
              [
                {text: 'DEPARTAMENTO', bold: true, alignment: 'center'},
                {text: 'NOMBRE', bold: true, alignment: 'center'},
                {text: 'FICHA', bold: true, alignment: 'center'},
                {text: 'FUNCIÓN ASIGNADA (MARCAR)', bold: true, alignment: 'center'},
              ],
              [
                {text: `${this.datos.departamento1}`},
                {text: `${this.datos.nombre1}`},
                {text: `${this.datos.ficha1}`},
                {text: `${this.valores[0]}`},
              ],
              [
                {text: `${this.datos.departamento2}`},
                {text: `${this.datos.nombre2}`},
                {text: `${this.datos.ficha2}`},
                {text: `${this.valores[1]}`},
              ],
              [
                {text: `${this.datos.departamento3}`},
                {text: `${this.datos.nombre3}`},
                {text: `${this.datos.ficha3}`},
                {text: `${this.valores[2]}`},
              ],
            ]
          }
        },
        {text: '\n\n'},
        {
          table: {
            widths: [56, 230, 50, 230],
            body: [
              [
                {text: 'ENTEGRA:', border: []},
                {text: ``, border: [false, false, false, true]},
                {text: 'RECIBE:', border: []},
                {text: ``, border: [false, false, false, true]}
              ],
              [
                {text: '', border: []},
                {text: 'COORDIADOR RSPA\nNOMBRE, FICHA Y FIRMA', alignment: 'center', border: []},
                {text: '', border: []},
                {text: 'LÍDER GRUPO MULTIDISCIPLINARIO RSPA\nNOMBRE, FICHA Y FIRMA', alignment: 'center', border: []}
              ]
            ]
          },
          margin: [50, 0]
        }
      ],
      pageSize: 'LETTER',
      pageOrientation: 'landscape',
      pageMargins: [22, 70]
    };
    this.pdfMaker.generate(dd, 'Anexo_4');
  }
}
