import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { AnexosService } from 'src/app/services/anexos.service';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-anexo6',
  templateUrl: './anexo6.page.html',
  styleUrls: ['./anexo6.page.scss'],
})
export class Anexo6Page implements OnInit {

  information: any[];
  automaticClose = false;

  newDatos: any[] = [];
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
    public alertCtrl: AlertController,
    private http: HttpClient,
    private a6Service: AnexosService
  ) {
    this.http.get('/assets/data/information.json').subscribe(res => {
      this.information = res['items'];

      this.information[0].open = true;
    });
  }

  ngOnInit() {
    this.getAnexo6();
  }

  getAnexo6() {
    this.a6Service.getA6().subscribe((data: any) => {
      console.log(data);
      this.datos = data;
    });
  }

  postAnexo6() {
    this.a6Service.postA6(this.datos).subscribe((data: any) => {
      console.log(data);
    });
  }

  toggleSection(index) {
    this.information[index].open = !this.information[index].open;

    if (this.automaticClose && this.information[index].open) {
      this.information
      .filter((item, itemIndex) => itemIndex !== index)
      .map(item => item.open = false);
    }
  }

  toggleItem(index, childIndex) {
    this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;
  }

  async auth() {
    const alert = await this.alertCtrl.create({
      header: '¿Se autoriza el inicio de operaciones?',
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
        }
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
                {text: 'PEMEX Exploración y Producción\nUnidad de Negocio de Perforación\nAnexo 6', alignment: 'center', bold: true},
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
           text: 'INFORME ATENCIÓN DE HALLAZGOS IMPEDITIVOS Y SOLICITUD DE AUTORIZACIÓN DE INICIO DE OPERACIONES',
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
        {text: '\n\n'},
        {
          text: 'Resumen de hallazgos tipo "A" derivados de la Revisión de Seguridad de Pre-Arranque que fueron atendidos.'
        },
        {
          table: {
            widths: [170, 140, 160, 150, 80],
            body: [
              [
                {text: 'HALLAZGO', alignment: 'center', bold: true},
                {text: 'ACCIÓN CORRECTIVA', alignment: 'center', bold: true},
                {text: 'DPTO. RESPONSABLE', alignment: 'center', bold: true},
                {text: 'FECHA DE ATENCIÓN', alignment: 'center', bold: true},
                {text: 'EVIDENCIA', alignment: 'center', bold: true}
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
        {text: 'Se anexan copias de evidencias de atención de hallazgos impeditivos.'},
        {text: '\n'},
        {
          table: {
            widths: [85, 630],
            body: [
              [
                {text: 'Observaciones:', border: []},
                {text: `${this.datos.observaciones}`, border: [false, false, false, true]}
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
                {text: 'SE AUTORIZA EL INICIO DE OPERACIONES:', border: []},
                {text: `${this.valor[0]}`, border: [false, false, false, true], alignment: 'center'}
              ]
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
    this.pdfMaker.generate(dd, 'Anexo_6');
  }

}
