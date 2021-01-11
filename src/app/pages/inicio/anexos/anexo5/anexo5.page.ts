import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-anexo5',
  templateUrl: './anexo5.page.html',
  styleUrls: ['./anexo5.page.scss'],
})
export class Anexo5Page implements OnInit {

  valor: any[] = [];
  datos: any = {
    fecha1: '',
    fecha2: '',
    plataforma: '',
    equipo: '',
    pozoLoc: '',
    observaciones: ''
  };

  constructor(
    private pdfMaker: PdfMakerService,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async auth() {
    const alert = await this.alertCtrl.create({
      header: '¿Se autorizó el inicio de operaciones?',
      inputs: [
        {
          type: 'radio',
          label: 'Si',
          value: 'Si'
        },
        {
          type: 'radio',
          label: 'No',
          value: 'No'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (data: string) => {
            JSON.stringify(data);
            this.valor.push(data);
            console.log(this.valor);
          }
        }
      ]
    });
    alert.present();
  }

  async upload() {
    console.log(this.datos);
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
                {text: 'PEMEX Exploración y Producción\nAnexo 5', alignment: 'center', bold: true},
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
           text: 'REPORTE DE APLICACIÓN DE PROTOCOLO DE REVISIÓN DE SEGURIDAD DE PREARRANQUE',
           bold: true,
           alignment: 'center'
        },
        {text: '\n\n'},
        {
          table: {
            widths: [145, 170, 200, 195],
            body: [
              [
                {text: 'FECHA DE ELABORACIÓN:', border: []},
                {text: `${this.datos.fecha1}`, border: [false, false, false, true]},
                {text: 'FECHA DE APLICACIÓN DE LA RSPA: ', border: []},
                {text: `${this.datos.fecha2}`, border: [false, false, false, true]}
              ]
            ]
          }
        },
        {text: '\n\n'},
        {
          table: {
            widths: [80, 145, 45, 150, 123, 150],
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
        {text: '\n'},
        {
          table: {
            widths: [233, 60],
            body: [
              [
                {text: 'SE AUTORIZÓ EL INICIO DE OPERACIONES:', border: []},
                {text: `${this.valor[0]}`, border: [false, false, false, true], alignment: 'center'},
              ]
            ]
          }
        },
        {text: '\n\n'},
        {
          text: 'Resumen de hallazgos derivados de la Revisión de Seguridad de Pre-Arranque.'
        },
        {
          table: {
            widths: [160, 70, 160, 150, 150],
            body: [
              [
                {text: 'DESCRIPCIÓN DEL HALLAZGO', alignment: 'center', bold: true},
                {text: 'TIPO A/B', alignment: 'center', bold: true},
                {text: 'ACCIÓN CORRECTIVA', alignment: 'center', bold: true},
                {text: 'DEPTO. RESPONSABLE', alignment: 'center', bold: true},
                {text: 'FECHA COMPROMISO', alignment: 'center', bold: true}
              ],
              [
                {},
                {},
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {},
                {},
                {}
              ],
            ]
          }
        },
        {text: '\n'},
        {text: 'Documentación generada en la Revisión de Seguridad de Pre-Arranque que se anexa:'},
        {text: '\n'},
        {
          table: {
            widths: [260, 130, 35, 110, 35, 110],
            body: [
              [
                {text: 'Listas de Verificación Administrativa y Operativa:', border: []},
                {text: ``, border: [false, false, false, true]},
                {text: 'Fotos:', border: []},
                {text: ``, border: [false, false, false, true]},
                {text: 'Otros:', border: []},
                {text: ``, border: [false, false, false, true]}
              ]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [85, 630],
            body: [
              [
                {text: 'Observaciones:', border: []},
                {text: `${this.datos.observaciones}`, border: [false, false, false, true]}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [60, 250, 50, 250],
            body: [
              [
                {text: 'ENTREGA:', border: []},
                {text: ``, border: [false, false, false, true]},
                {text: 'RECIBE:', border: []},
                {text: ``, border: [false, false, false, true]}
              ],
              [
                {text: '', border: []},
                {text: 'LÍDER GRUPO MULTIDISCIPLINARIO RSPA\nNOMBRE, FICHA Y FIRMA', alignment: 'center', border: []},
                {text: '', border: []},
                {text: 'COORDINADOR RSPA\nNOMBRE, FICHA Y FIRMA', alignment: 'center', border: []}
              ]
            ]
          },
          margin: [30, 0]
        }
      ],
      pageSize: 'LETTER',
      pageOrientation: 'landscape',
      pageMargins: [22, 70]
    };
    this.pdfMaker.generate('Anexo_5', dd);
  }
}
