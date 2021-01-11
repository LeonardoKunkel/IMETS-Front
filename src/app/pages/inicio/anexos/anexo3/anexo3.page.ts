import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-anexo3',
  templateUrl: './anexo3.page.html',
  styleUrls: ['./anexo3.page.scss'],
})
export class Anexo3Page implements OnInit {

  anex3: any = {
    fecha1: '',
    division: '',
    unidadOp: '',
    plataforma: '',
    equipo: '',
    pozoLoc: '',
    fecha2: '',
  };

  constructor( private pdfMaker: PdfMakerService ) { }

  ngOnInit() {
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
                {text: 'PEMEX Exploración y Producción', alignment: 'center', bold: true},
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
          text: 'SOLICITUD DE APLICACIÓN DE PROTOCOLO DE REVISIÓN DE SEGURIDAD DE PREARRANQUE',
          bold: true,
          margin: [120, 0]
        },
        {text: '\n\n\n\n\n'},
        {
          table: {
            widths: [150, 100, 60, 120, 145, 120],
            body: [
              [
                {text: 'FECHA Y HORA SOLICITUD:', border: []},
                {text: `${this.anex3.fecha1}`, border: [false, false, false, true]},
                {text: 'DIVISIÓN:', border: []},
                {text: `${this.anex3.division}`, border: [false, false, false, true]},
                {text: 'UNIDAD OPERATIVA:', border: []},
                {text: `${this.anex3.unidadOp}`, border: [false, false, false, true]}
              ]
            ]
          },
        },
        {text: '\n\n\n\n\n'},
        {
          table: {
            widths: [80, 155, 50, 125, 130, 150],
            body: [
              [
                {text: 'PLATAFORMA:', border: []},
                {text: `${this.anex3.plataforma}`, border: [false, false, false, true]},
                {text: 'EQUIPO:', border: []},
                {text: `${this.anex3.equipo}`, border: [false, false, false, true]},
                {text: 'POZO/LOCALIZACIÓN:', border: []},
                {text: `${this.anex3.pozoLoc}`, border: [false, false, false, true]}
              ]
            ]
          },
        },
        {text: '\n\n\n\n\n'},
        {
          table: {
            widths: [250, 300],
            body: [
              [
                {text: 'FECHA Y HORA DE INICIO DE LA RSPA:', border: []},
                {text: `${this.anex3.fecha2}`, border: [false, false, false, true]}
              ]
            ]
          },
          margin: [100, 0]
        },
        {text: '\n\n\n\n\n\n\n'},
        {
          table: {
            widths: [100, 280, 100, 230],
            body: [
              [
                {text: 'SOLICITA:', alignment: 'right', border: []},
                {text: ``, border: [false, false, false, true]},
                {text: 'RECIBE:', alignment: 'right', border: []},
                {text: ``, border: [false, false, false, true]}
              ],
              [
                {text: '', border: []},
                {text: 'RESPONSABLE DE INGENIERÍA DE OPERACIÓN\nNOMBRE, FECHA Y FIRMA', alignment: 'center', border: []},
                {text: '', border: []},
                {text: 'COORDINADOR RSPA\nNOMBRE, FICHA Y FIRMA', alignment: 'center', border: []}
              ]
            ]
          }
        }
      ],
      pageSize: 'LETTER',
      pageOrientation: 'landscape',
      pageMargins: [22, 70]
    };
    this.pdfMaker.generate(dd, 'Anexo3');
  }

}
