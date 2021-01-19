import { PdfMakerService } from './../../../../services/pdf-maker.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-anexo1',
  templateUrl: './anexo1.page.html',
  styleUrls: ['./anexo1.page.scss'],
})
export class Anexo1Page implements OnInit {

  footerImg = null;
  datos: any = {
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    C6: '',
    C7: '',
    C8: '',
    C9: '',
    C10: '',
    C11: '',
    C12: '',
    C13: '',
    C14: '',
    C15: '',
    C16: '',
    C17: '',
    C18: '',
    C19: '',
    C20: '',
    C21: '',
    C22: '',
    C23: '',
    C24: '',
    C25: '',
    C26: '',
    C27: '',
    C28: '',
    C29: '',
    C30: '',
    C31: '',
    C32: '',
    C33: '',
    C34: '',
    C35: '',
    C36: '',
    C37: '',
    C38: '',
    C39: '',
    C40: '',
    C41: '',
    C42: '',
    C43: '',
    C44: '',
    C45: '',
    C46: '',
    C47: '',
    C48: '',
    C49: '',
    C50: '',
    C51: '',
    C52: '',
    C53: '',
    C54: '',
    C55: '',
    C56: '',
    C57: '',
    C58: '',
    C59: '',
    C60: '',
    C61: '',
    C62: '',
    C63: '',
    C64: '',
    C65: '',
    C66: '',
    C67: '',
    C68: '',
    C69: '',
    C70: '',
    C71: '',
    C72: '',
    C73: '',
    C74: '',
    C75: '',
    C76: '',
    C77: '',
    C78: '',
    C79: '',
    C80: '',
    C81: '',
    C82: '',
    C83: '',
    C84: '',
    C85: '',
    C86: '',
    C87: '',
    T1: '',
    T2: '',
    T3: '',
    T4: '',
    T5: '',
    T6: '',
    T7: '',
    T8: '',
    T9: '',
    T10: '',
    T11: '',
    T12: '',
    T13: '',
    T14: '',
    T15: '',
    T16: '',
    T17: '',
    T18: '',
    T19: '',
    T20: '',
    T21: '',
    T22: '',
    T23: '',
    T24: '',
    T25: '',
    T26: '',
    T27: '',
    T28: '',
    T29: '',
    T30: '',
    T31: '',
    T32: '',
    T33: '',
    T34: '',
    T35: '',
    T36: '',
    T37: '',
    T38: '',
    T39: '',
    T40: '',
    T41: '',
    T42: '',
    T43: '',
    T44: '',
    T45: '',
    T46: '',
    T47: '',
    T48: '',
    T49: '',
    T50: '',
    T51: '',
    T52: '',
    T53: '',
    T54: '',
    T55: '',
    T56: '',
    T57: '',
    T58: '',
    T59: '',
    T60: '',
    T61: '',
    T62: '',
    T63: '',
    T64: '',
    T65: '',
    T66: '',
    T67: '',
    T68: '',
    T69: '',
    T70: '',
    T71: '',
    T72: '',
    T73: '',
    T74: '',
    T75: '',
    T76: '',
    T77: '',
    T78: '',
    T79: '',
    T80: '',
    T81: '',
    T82: '',
    T83: '',
    T84: '',
    T85: '',
    T86: '',
    T87: '',
    T88: '',
    T89: '',
    T90: '',
    T91: '',
    T92: '',
    J1: '',
    J2: '',
    J3: '',
    J4: '',
    J5: '',
    J6: '',
    J7: '',
    J8: '',
    J9: '',
    J10: '',
    J11: '',
    J12: '',
    J13: '',
    J14: '',
    J15: '',
    J16: '',
    J17: '',
    J18: '',
    J19: '',
    J20: '',
    J21: '',
    J22: '',
    J23: '',
    J24: '',
    J25: '',
    J26: '',
    J27: '',
    J28: '',
    J29: '',
    J30: '',
    J31: '',
    J32: '',
    J33: '',
    J34: '',
    J35: '',
    J36: '',
    J37: '',
    J38: '',
    J39: '',
    J40: '',
    J41: '',
    J42: '',
    J43: '',
    J44: '',
    J45: '',
    J46: '',
    J47: '',
    J48: '',
  };

  constructor( private pdfMaker: PdfMakerService ) { }

  ngOnInit() {
    this.image64();
  }

  convertFileDataURLviaFileReader(url: string) {
    return Observable.create(observer => {
      const xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onload = function() {
        const reader: FileReader = new FileReader();
        reader.onloadend = function() {
          observer.next(reader.result);
          observer.complete();
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    });
  }

  image64() {
    this.convertFileDataURLviaFileReader(`../../../../../assets/imagenes/copyright_footer.png`).subscribe(
      base64 => {
      this.footerImg = base64;
      }
    );
  }

  subir() {
    this.datos.C3 === 'No' ? this.datos.J1 = 'X' : this.datos.J1 = '';
    this.datos.C9 === 'No' ? this.datos.J2 = 'X' : this.datos.J2 = '';
    this.datos.C10 === 'No' ? this.datos.J3 = 'X' : this.datos.J3 = '';
    this.datos.C11 === 'No' ? this.datos.J4 = 'X' : this.datos.J4 = '';
    this.datos.C12 === 'No' ? this.datos.J5 = 'X' : this.datos.J5 = '';
    this.datos.C14 === 'No' ? this.datos.J6 = 'X' : this.datos.J6 = '';
    this.datos.C15 === 'No' ? this.datos.J7 = 'X' : this.datos.J7 = '';
    this.datos.C16 === 'No' ? this.datos.J8 = 'X' : this.datos.J8 = '';
    this.datos.C86 === 'No' ? this.datos.J9 = 'X' : this.datos.J9 = '';
    this.datos.C17 === 'No' ? this.datos.J10 = 'X' : this.datos.J10 = '';
    this.datos.C18 === 'No' ? this.datos.J11 = 'X' : this.datos.J11 = '';
    this.datos.C19 === 'No' ? this.datos.J12 = 'X' : this.datos.J12 = '';
    this.datos.C24 === 'No' ? this.datos.J13 = 'X' : this.datos.J13 = '';
    this.datos.C44 === 'No' ? this.datos.J14 = 'X' : this.datos.J14 = '';
    this.datos.C45 === 'No' ? this.datos.J15 = 'X' : this.datos.J15 = '';
    this.datos.C46 === 'No' ? this.datos.J16 = 'X' : this.datos.J16 = '';
    this.datos.C47 === 'No' ? this.datos.J17 = 'X' : this.datos.J17 = '';
    this.datos.C48 === 'No' ? this.datos.J18 = 'X' : this.datos.J18 = '';
    this.datos.C49 === 'No' ? this.datos.J19 = 'X' : this.datos.J19 = '';
    this.datos.C50 === 'No' ? this.datos.J20 = 'X' : this.datos.J20 = '';
    this.datos.C51 === 'No' ? this.datos.J21 = 'X' : this.datos.J21 = '';
    this.datos.C52 === 'No' ? this.datos.J22 = 'X' : this.datos.J22 = '';
    this.datos.C53 === 'No' ? this.datos.J23 = 'X' : this.datos.J23 = '';
    this.datos.C54 === 'No' ? this.datos.J24 = 'X' : this.datos.J24 = '';
    this.datos.C55 === 'No' ? this.datos.J25 = 'X' : this.datos.J25 = '';
    this.datos.C56 === 'No' ? this.datos.J26 = 'X' : this.datos.J26 = '';
    this.datos.C57 === 'No' ? this.datos.J27 = 'X' : this.datos.J27 = '';
    this.datos.C58 === 'No' ? this.datos.J28 = 'X' : this.datos.J28 = '';
    this.datos.C59 === 'No' ? this.datos.J29 = 'X' : this.datos.J29 = '';
    this.datos.C60 === 'No' ? this.datos.J30 = 'X' : this.datos.J30 = '';
    this.datos.C66 === 'No' ? this.datos.J31 = 'X' : this.datos.J31 = '';
    this.datos.C67 === 'No' ? this.datos.J32 = 'X' : this.datos.J32 = '';
    this.datos.C68 === 'No' ? this.datos.J33 = 'X' : this.datos.J33 = '';
    this.datos.C69 === 'No' ? this.datos.J34 = 'X' : this.datos.J34 = '';
    this.datos.C70 === 'No' ? this.datos.J35 = 'X' : this.datos.J35 = '';
    this.datos.C71 === 'No' ? this.datos.J36 = 'X' : this.datos.J36 = '';
    this.datos.C72 === 'No' ? this.datos.J37 = 'X' : this.datos.J37 = '';
    this.datos.C73 === 'No' ? this.datos.J38 = 'X' : this.datos.J38 = '';
    this.datos.C87 === 'No' ? this.datos.J39 = 'X' : this.datos.J39 = '';
    this.datos.C74 === 'No' ? this.datos.J40 = 'X' : this.datos.J40 = '';
    this.datos.C75 === 'No' ? this.datos.J41 = 'X' : this.datos.J41 = '';
    this.datos.C76 === 'No' ? this.datos.J42 = 'X' : this.datos.J42 = '';
    this.datos.C77 === 'No' ? this.datos.J43 = 'X' : this.datos.J43 = '';
    this.datos.C78 === 'No' ? this.datos.J44 = 'X' : this.datos.J44 = '';
    this.datos.C79 === 'No' ? this.datos.J45 = 'X' : this.datos.J45 = '';
    this.datos.C80 === 'No' ? this.datos.J46 = 'X' : this.datos.J46 = '';
    this.datos.C81 === 'No' ? this.datos.J47 = 'X' : this.datos.J47 = '';
    this.datos.C83 === 'No' ? this.datos.J48 = 'X' : this.datos.J48 = '';
    console.log(this.datos);
  }

  pdf() {
    const footer = this.footerImg;
    const dd = {
      header() {
        return {
          table: {
            widths: [95, 350, 95],
            body: [
              [
                {
                  // image: 'sampleImage.jpg',
                  // width: 50,
                  // height: 50,
                  // alignment: 'center',
                  // rowSpan: 2
                },
                {text: 'Exploración y Producción', alignment: 'center', bold: true},
                {}
              ],
              [
                {},
                {
                  text: [
                    'Unidad de Negocio de Perforación\nAdministración de la Seguridad de los Procesos (ASP)\n',
                    {text: 'Revisión de Seguridad de Pre-Arranque', bold: true}
                  ],
                  fontSize: 8,
                  alignment: 'center'
                },
                {}
              ],
              [
                {},
                {text: 'LISTA DE VERIFICACIÓN DE ASPECTOS ADMINISTRATIVOS (Anexo 1)', alignment: 'center', fontSize: 10, bold: true},
                {}
            ],
            ]
          },
          layout: 'noBorders',
          margin: [22, 10]
        };
      },
      footer(currentPage, pageCount) {
        return {
          table: {
            headerRows: 1,
            widths: [510],
            body: [
              [
                {
                  columns: [
                    'Página ' + currentPage.toString() + ' de ' + pageCount,
                  ]
                }
              ],
              [
                {
                  image: `${footer}`,
                  pageBreak: 'after',
                  width: 510,
                  height: 55
                }
              ],
              ['']
            ]
          },
          layout: 'headerLineOnly',
          margin: [72, 20]
        };
      },
      content: [
        {
          table: {
            widths: [70, 60, 100, 100, 80, 104],
            body: [
              [
                {text: 'Región'},
                {text: `${this.datos.T1}`},
                {text: 'Centro de Trabajo'},
                {text: `${this.datos.T3}`},
                {text: 'Fecha'},
                 {text: `${this.datos.F1}`}
              ],
              [
                {text: 'Plataforma'},
                {text: `${this.datos.T2}`},
                {text: 'Equipo'},
                {text: `${this.datos.T4}`},
                {text: 'Localización/Pozo'},
                {text: `${this.datos.T5}`}
              ],
            ]
          },
          layout: 'noBorders'
        },
        {text: '\n\n'},
        {
          table: {
            widths: [300, 80, 50, 83],
            body: [
              [
                {text: 'Requisitos de ASP', alignment: 'center', bold: true, fontSize: '10'},
                {text: '¿Cumple?', alignment: 'center', fontSize: '10'},
                {text: 'Req. P/Arranque (Tipo "A")', fontSize: '10'},
                {text: 'Observaciones', fontSize: '10', alignment: 'center'}
              ],
              [
                {text: '1.0 Tecnología del proceso', bold: true, colSpan: 4, color: 'white', fillColor: '#339966', fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: '1.1  ¿Se cuenta con el paquete tecnologico del proceso ?', fontSize: '10'},
                {text: `${this.datos.C1}`, alignment: 'center'},
                {},
                {text: `${this.datos.T6}`}
              ],
              [
                {text: '1.1.1. Bases de Diseño del Proceso', fontSize: '10'},
                {text: `${this.datos.C2}`, alignment: 'center'},
                {},
                {text: `${this.datos.T7}`}
              ],
              [
                {text: '1.1.1.a ¿Se cuenta con el programa autorizado del pozo a intervenir?', fontSize: '10'},
                {text: `${this.datos.C3}`, alignment: 'center'},
                {text: `${this.datos.J1}`, alignment: 'center'},
                {text: `${this.datos.T8}`}
              ],
              [
                {text: `1.1.1.b ¿Cuenta el programa al menos con las siguientes variables criticas: Profundidad total, Presión maxima esperada, Temperatura maxima esperada, Peso maximo esperado,Tipo de fluido a utilizar y contenido de H2S?`, fontSize: '10'},
                {text: `${this.datos.C4}`, alignment: 'center'},
                {},
                {text: `${this.datos.T9}`}
              ],
              [
                {text: '1.1.2.Bases de Diseño del Equipo', fontSize: '10'},
                {text: `${this.datos.C5}`, alignment: 'center'},
                {},
                {text: `${this.datos.T10}`}
              ],
              [
                {text: `1.1.2.a ¿Se cuenta con la ficha técnica del equipo ACTUALIZADA y cumple con las caracteristicas técnicas requeridas por el proceso, de acuerdo a las variables criticas esperadas?`, fontSize: '10'},
                {text: `${this.datos.C6}`, alignment: 'center'},
                {},
                {text: `${this.datos.T11}`}
              ],
              [
                {
                  text:
                    `1.1.2.b ¿Se cuenta con el diagrama  de la instalación y distribucion del equipo?
                    ¿Se encuentran actualizados?`,
                  fontSize: '10'
                },
                {text: `${this.datos.C7}`, alignment: 'center'},
                {},
                {text: `${this.datos.T12}`}
              ],
              [
                {text: '1.1.2.c  ¿Se cuenta con los diagramas unifilares y  DTIS actualizados?', fontSize: '10'},
                {text: `${this.datos.C8}`, alignment: 'center'},
                {},
                {text: `${this.datos.T13}`}
              ],
              [
                {text: '1.1.2.d ¿Se cuenta con el diagrama de clasificación de áreas eléctricas?', fontSize: '10'},
                {text: `${this.datos.C9}`, alignment: 'center'},
                {text: `${this.datos.J2}`, alignment: 'center'},
                {text: `${this.datos.T14}`}
              ],
              [
                {text: '1.1.2.e ¿Se cuenta con planos de la red de contraincendio (hidrantes, monitores, sistemas de aspersión y extintores)?', fontSize: '10'},
                {text: `${this.datos.C10}`, alignment: 'center'},
                {text: `${this.datos.J3}`, alignment: 'center'},
                {text: `${this.datos.T15}`}
              ],
              [
                {text: '1.1.2.f ¿Se cuenta con planos de localización de sistema de detección de humo,gas y fuego?', fontSize: '10'},
                {text: `${this.datos.C11}`, alignment: 'center'},
                {text: `${this.datos.J4}`, alignment: 'center'},
                {text: `${this.datos.T16}`}
              ],
              [
                {text: '1.1.2.g ¿Se cuenta con el plano de distribución de equipo de seguridad y salvamento?', fontSize: '10'},
                {text: `${this.datos.C12}`, alignment: 'center'},
                {text: `${this.datos.J5}`, alignment: 'center'},
                {text: `${this.datos.T17}`}
              ],
              [
                {text: '1.1.3 Hojas de Datos de Seguridad de los materiales del proceso?', fontSize: '10'},
                {text: `${this.datos.C13}`, alignment: 'center'},
                {},
                {text: `${this.datos.T18}`}
              ],
              [
                {text: '1.1.3.a ¿Se cuenta con las hojas de seguridad de productos químicos por utilizar en el proceso?', fontSize: '10'},
                {text: `${this.datos.C14}`, alignment: 'center'},
                {text: `${this.datos.J6}`, alignment: 'center'},
                {text: `${this.datos.T19}`}
              ],
              [
                {text: '2.0 Análisis de riesgos de procesos', bold: true, colSpan: 4, color: 'white', fillColor: '#339966', fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: '2.1 ¿ Se cuenta con el análisis de riesgos  de procesos que consta de:', fontSize: '10', colSpan: 4},
                {},
                {},
                {}
              ],
              [
                {text: '2.1.1 Análisis de riesgo de los sistemas operativos del equipo', fontSize: '10'},
                {text: `${this.datos.C15}`, alingment: 'center'},
                {text: `${this.datos.J7}`, alingment: 'center'},
                {text: `${this.datos.T20}`}
              ],
              [
                {text: '2.1.2 Análisis de riesgo del proceso de perforación del pozo', fontSize: '10'},
                {text: `${this.datos.C16}`, alingment: 'center'},
                {text: `${this.datos.J8}`, alingment: 'center'},
                {text: `${this.datos.T21}`}
              ],
              [
                {text: '2.1.3 Análisis de riesgo del medio ambiente', fontSize: '10'},
                {text: `${this.datos.C86}`, alingment: 'center'},
                {text: `${this.datos.J9}`, alingment: 'center'},
                {text: `${this.datos.T91}`}
              ],
              [
                {text: `2.2 ¿Se atendieron en tiempo y forma todas las recomendaciones derivadas de los analisis de riesgo ?`, fontSize: '10'},
                {text: `${this.datos.C17}`, alingment: 'center'},
                {text: `${this.datos.J10}`, alingment: 'center'},
                {text: `${this.datos.T22}`}
              ],
              [
                {text: `2.3 ¿El personal del equipo / instalación incluyendo los contratistas, conocen las recomendaciones del análisis de riesgo del proceso a desarrollarse?`, fontSize: '10'},
                {text: `${this.datos.C18}`, alingment: 'center'},
                {text: `${this.datos.J11}`, alingment: 'center'},
                {text: `${this.datos.T23}`}
              ],
              [
                {text: `2.4 ¿Se cuenta en el equipo / instalacion con la matriz de consecuencias y considera el  escenario mas catastrófico y probable contemplado para el proceso a desarrollar?`, fontSize: '10'},
                {text: `${this.datos.C19}`, alingment: 'center'},
                {text: `${this.datos.J12}`, alingment: 'center'},
                {text: `${this.datos.T24}`}
              ],
              [
                {text: '3.0 PROCEDIMIENTOS DE OPERACIÓN Y PRÁCTICAS SEGURAS DE TRABAJO', bold: true, colSpan: 4, color: 'white', fillColor: '#339966', fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: `3.1 ¿Se cuenta con el Manual de Operación del Equipo? Y este contempla procedimientos operativos que incluyen riesgos y capas de protección,así como las recomendaciones de los analisis  de riesgos de proceso?`, fontSize: '10'},
                {text: `${this.datos.C20}`, alignment: 'center'},
                {},
                {text: `${this.datos.T25}`}
              ],
              [
                {text: '3.2 ¿Se cuenta con los  procedimientos criticos que salvan vidas y están vigentes y actualizados?', fontSize: '10'},
                {text: `${this.datos.C21}`, alignment: 'center'},
                {},
                {text: `${this.datos.T26}`}
              ],
              [
                {text: `3.3 ¿Los procedimientos de operación normal y de emergencia estan disponibles y actualizados? ¿incluyen los límites de operación segura del proceso, así como las instrucciones para corregir o evitar desviaciones y las consecuencias de estas desviaciones?`, fontSize: '10'},
                {text: `${this.datos.C22}`, alignment: 'center'},
                {},
                {text: `${this.datos.T27}`}
              ],
              [
                {
                  text:
                    `3.4 ¿Los procedimientos contemplan  el manejo adecuado de los residuos que se generan
                    en el proceso a desarrollar?`,
                  fontSize: '10'
                },
                {text: `${this.datos.C23}`, alignment: 'center'},
                {},
                {text: `${this.datos.T28}`}
              ],
              [
                {text: `3.5 ¿Se cuenta con los instructivos de operación de los componentes criticos del equipo o instalación?`, fontSize: '10'},
                {text: `${this.datos.C24}`, alignment: 'center'},
                {text: `${this.datos.J13}`, alignment: 'center'},
                {text: `${this.datos.T29}`}
              ],
              [
                {
                  text: '4.0 ADMINISTRACIÓN DE CAMBIOS DE TECNOLOGÍA',
                  bold: true,
                  colSpan: 4,
                  color: 'white',
                  fillColor: '#339966',
                  fontSize: '10'
                },
                {},
                {},
                {}
              ],
              [
                {
                  text:
                    `4.1 ¿Se cuenta con el procedimiento para la administración de cambios de tecnología,
                    está vigente y actualizado?`,
                  fontSize: '10'
                },
                {text: `${this.datos.C25}`, alignment: 'center'},
                {},
                {text: `${this.datos.T30}`}
              ],
              [
                {text: `4.2 ¿Se cuenta con el registro de los cambios tecnológicos realizados al equipo / instalación? ¿Se dispone de la documentación respectiva que demuestre que se siguió el procedimiento mencionado?`, fontSize: '10'},
                {text: `${this.datos.C26}`, alignment: 'center'},
                {},
                {text: `${this.datos.T31}`}
              ],
              [
                {text: `4.3 ¿Se encuentra actualizado el paquete tecnológico con respecto a los cambios tecnológicos registrados en el SIAC ?`, fontSize: '10'},
                {text: `${this.datos.C27}`, alignment: 'center'},
                {},
                {text: `${this.datos.T32}`}
              ],
              [
                {text: `4.4 ¿Se llevó a cabo el análisis de riesgo del proceso, para contemplar los nuevos riesgos de acuerdo a la incorporación de los cambios de tecnología?`, fontSize: '10'},
                {text: `${this.datos.C28}`, alignment: 'center'},
                {},
                {text: `${this.datos.T33}`}
              ],
              [
                {text: `4.5 ¿El personal del equipo / instalación conoce estos cambios? ¿Los procedimientos operativos se actualizaron contemplando los riesgos generados por el cambio de tecnología y se contemplan sus medidas preventivas?`, fontSize: '10'},
                {text: `${this.datos.C29}`, alignment: 'center'},
                {},
                {text: `${this.datos.T34}`}
              ],
              [
                {
                  text: '5.0 ENTRENAMIENTO Y DESEMPEÑO DEL  PERSONAL',
                  bold: true,
                  colSpan: 4,
                  color: 'white',
                  fillColor: '#339966',
                  fontSize: '10'
                },
                {},
                {},
                {}
              ],
              [
                {text: `5.1 ¿Se cuenta con la relación  actualizada de los instructivos de trabajo que aplica a cada categoria del equipo / instalación?`, fontSize: '10'},
                {text: `${this.datos.C30}`, alignment: 'center'},
                {},
                {text: `${this.datos.T35}`}
              ],
              [
                {text: `5.2 ¿Existen evidencias de que el personal involucrado en la operación y mantenimiento ha sido entrenado o reentrenado  de acuerdo a los instructivos de trabajo?`, fontSize: '10'},
                {text: `${this.datos.C31}`, alignment: 'center'},
                {},
                {text: `${this.datos.T36}`}
              ],
              [
                {text: '6.0 SEGURIDAD EN CONTRATISTAS', bold: true, colSpan: 4, color: 'white', fillColor: '#339966', fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: `6.1 ¿Existen evidencias de que los contratistas fueron entrenados y conocen los aspectos de Seguridad, Salud y Protección Ambiental relacionados con las áreas de trabajo y actividades a desarrollar?`, fontSize: '10'},
                {text: `${this.datos.C32}`, alignment: 'center'},
                {},
                {text: `${this.datos.T37}`}
              ],
              [
                {text: `6.1.a ¿Los contratistas cuentan con la información de tecnología del proceso del pozo que se interviene?`, fontSize: '10'},
                {text: `${this.datos.C33}`, alignment: 'center'},
                {},
                {text: `${this.datos.T38}`}
              ],
              [
                {text: `6.1.b ¿Los contratistas cuentan con procedimientos de operación / mantenimiento de las actividades que realizarán dentro del proceso del pozo que se interviene?`, fontSize: '10'},
                {text: `${this.datos.C34}`, alignment: 'center'},
                {},
                {text: `${this.datos.T39}`}
              ],
              [
                {text: `6.1.c ¿Se cuenta con un censo de la capacitación del personal contratista que realiza funciones dentro del proceso del pozo que se interviene?`, fontSize: '10'},
                {text: `${this.datos.C35}`, alignment: 'center'},
                {},
                {text: `${this.datos.T40}`}
              ],
              [
                {text: `6.1.d ¿Los contratistas cumplen con el equipo de protección personal básico y especial que se requiere para las operaciones del proceso a desarrollar?`, fontSize: '10'},
                {text: `${this.datos.C36}`, alignment: 'center'},
                {},
                {text: `${this.datos.T41}`}
              ],
              [
                {text: `6.2 ¿El personal de contratistas conoce las recomendaciones del análisis de riesgo así como el plan de respuesta a emergencia del proceso a desarrollarse?`, fontSize: '10'},
                {text: `${this.datos.C37}`, alignment: 'center'},
                {},
                {text: `${this.datos.T42}`}
              ],
              [
                {text: '7.0 ADMINISTRACION DE CAMBIOS DE PERSONAL', bold: true, colSpan: 4, color: 'white', fillColor: '#339966', fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: `7.1 ¿Existe un mecanismo para asegurar que el perfil de candidatos a puestos de categorías críticas cumpla con el perfil de los puestos requeridos?`, fontSize: '10'},
                {text: `${this.datos.C38}`, alignment: 'center'},
                {},
                {text: `${this.datos.T43}`}
              ],
              [
                {text: `7.2 ¿Ha habido cambios de personas que tenían roles en emergencia o eran parte de las brigadas de respuesta a emergencias? ¿Los nuevos integrantes cumplen con el perfil requerido? ¿Han sido entrenados?`, fontSize: '10'},
                {text: `${this.datos.C39}`, alignment: 'center'},
                {},
                {text: `${this.datos.T44}`}
              ],
              [
                {text: `7.3 ¿Se cuenta con el procedimiento vigente y actualizado de la administración de cambios de personal?  ¿Se aplica en  los cambios de personal?`, fontSize: '10'},
                {text: `${this.datos.C40}`, alignment: 'center'},
                {},
                {text: `${this.datos.T45}`}
              ],
              [
                {
                  text: '8.0 INVESTIGACION DE INCIDENTES Y ACCIDENTES',
                  bold: true,
                  colSpan: 4,
                  color: 'white',
                  fillColor: '#339966',
                  fontSize: '10'
                },
                {},
                {},
                {}
              ],
              [
                {text: `8.1 ¿Se cuenta con el control estadístico de incidentes / accidentes? ¿Incluye las Metas y Objetivos de la UNP referentes al Indice de Gravedad y de Frecuencia?`, fontSize: '10'},
                {text: `${this.datos.C41}`, alignment: 'center'},
                {},
                {text: `${this.datos.T46}`}
              ],
              [
                {text: `8.2 ¿Los mismos fueron investigados conforme al procedimiento vigente? ¿Hay recomendaciones que no han sido cumplidas?`, fontSize: '10'},
                {text: `${this.datos.C42}`, alignment: 'center'},
                {},
                {text: `${this.datos.T47}`}
              ],
              [
                {text: `8.3 ¿Hubo una amplia difusión entre el personal de UNP?`, fontSize: '10'},
                {text: `${this.datos.C43}`, alignment: 'center'},
                {},
                {text: `${this.datos.T48}`}
              ],
              [
                {text: '9.0 PLAN DE RESPUESTA A EMERGENCIAS', bold: true, colSpan: 4, color: 'white', fillColor: '#339966', fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: `9.1 ¿Existe un plan de respuesta a emergencias autorizado y el personal designado en los roles correspondientes esta entrenado en los procedimientos de respuesta a emergencias?`, fontSize: '10'},
                {text: `${this.datos.C44}`, alignment: 'center'},
                {text: `${this.datos.J14}`, alignment: 'center'},
                {text: `${this.datos.T49}`}
              ],
              [
                {text: `9.2 ¿Se cuenta con croquis que muestre: la organización para la respuesta a emergencia del equipo / instalación, procedimientos para cada escenario, la ruta de evacuación, punto de reunión, localización de extintores, detectores y alarmas indicadas?`, fontSize: '10'},
                {text: `${this.datos.C45}`, alignment: 'center'},
                {text: `${this.datos.J15}`, alignment: 'center'},
                {text: `${this.datos.T50}`}
              ],
              [
                {text: `9.3 ¿El plan de respuesta a emergencia es consistente con los escenarios del ARP del equipo / instalación? ¿se actualiza conforme a la administración de cambios de tecnología y cambios menores?`, fontSize: '10'},
                {text: `${this.datos.C46}`, alignment: 'center'},
                {text: `${this.datos.J16}`, alignment: 'center'},
                {text: `${this.datos.T51}`}
              ],
              [
                {text: `9.4 ¿Se cuenta con programa de simulacros para cada escenario del plan de respuesta a emergencias? ¿Existen evidencias de cumplimiento del mencionado programa?`, fontSize: '10'},
                {text: `${this.datos.C47}`, alignment: 'center'},
                {text: `${this.datos.J17}`, alignment: 'center'},
                {text: `${this.datos.T52}`}
              ],
              [
                {
                  text: '10.0 INTEGRIDAD MECÁNICA Y ASEGURAMIENTO DE CALIDAD',
                  bold: true,
                  colSpan: 4,
                  color: 'white',
                  fillColor: '#339966',
                  fontSize: '10'
                },
                {},
                {},
                {}
              ],
              [
                {text: `10.1 ¿Se cuenta con el programa de mantenimiento preventivo y predictivo de los componentes críticos del equipo, autorizado?`, fontSize: '10'},
                {text: `${this.datos.C48}`, alignment: 'center'},
                {text: `${this.datos.J18}`, alignment: 'center'},
                {text: `${this.datos.T53}`}
              ],
              [
                {text: `10.2. ¿Se cuenta con planes y programas de las inspecciones y prueba de los componentes críticos para garantizar la integridad mecánica de los sistemas operacionales tales como: sistema de izaje y rotación, sistema de generación, sistema de bombeo de fluidos, sistema de control superficial y sistema de seguridad y salvamento?`, fontSize: '10'},
                {text: `${this.datos.C49}`, alignment: 'center'},
                {text: `${this.datos.J19}`, alignment: 'center'},
                {text: `${this.datos.T54}`}
              ],
              [
                {text: '10.2.a Sistema de izaje y rotación:', bold: true, colSpan: 4, fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: `- Registro de inspección de tambores y balatas de frenado / discos`, fontSize: '10'},
                {text: `${this.datos.C50}`, alignment: 'center'},
                {text: `${this.datos.J20}`, alignment: 'center'},
                {text: `${this.datos.T55}`}
              ],
              [
                {text: `- Registro de inspección y récord del cable de operación (ton/km) y ancla de la línea muerta`, fontSize: '10'},
                {text: `${this.datos.C51}`, alignment: 'center'},
                {text: `${this.datos.J21}`, alignment: 'center'},
                {text: `${this.datos.T56}`}
              ],
              [
                {text: `- Registro de inspeccion de corona`, fontSize: '10'},
                {text: `${this.datos.C52}`, alignment: 'center'},
                {text: `${this.datos.J22}`, alignment: 'center'},
                {text: `${this.datos.T57}`}
              ],
              [
                {text: `- Registro de inspección de paro de emergencia`, fontSize: '10'},
                {text: `${this.datos.C53}`, alignment: 'center'},
                {text: `${this.datos.J23}`, alignment: 'center'},
                {text: `${this.datos.T58}`}
              ],
              [
                {text: `- Registro de inspección de embragues de alta y baja`, fontSize: '10'},
                {text: `${this.datos.C54}`, alignment: 'center'},
                {text: `${this.datos.J24}`, alignment: 'center'},
                {text: `${this.datos.T59}`}
              ],
              [
                {text: `- Registro de inspección de calibración de poleas`, fontSize: '10'},
                {text: `${this.datos.C55}`, alignment: 'center'},
                {text: `${this.datos.J25}`, alignment: 'center'},
                {text: `${this.datos.T60}`}
              ],
              [
                {text: `- Registro de inspección de mástil/torre y subestructura`, fontSize: '10'},
                {text: `${this.datos.C56}`, alignment: 'center'},
                {text: `${this.datos.J26}`, alignment: 'center'},
                {text: `${this.datos.T61}`}
              ],
              [
                {text: `- Registro de inspección y calibración de indicador de peso`, fontSize: '10'},
                {text: `${this.datos.C57}`, alignment: 'center'},
                {text: `${this.datos.J27}`, alignment: 'center'},
                {text: `${this.datos.T62}`}
              ],
              [
                {text: `- Registro de inspección , pruebas y certificados de gruas`, fontSize: '10'},
                {text: `${this.datos.C58}`, alignment: 'center'},
                {text: `${this.datos.J28}`, alignment: 'center'},
                {text: `${this.datos.T63}`}
              ],
              [
                {text: `- Registro de inspección , pruebas y certificados de malacates neumáticos`, fontSize: '10'},
                {text: `${this.datos.C59}`, alignment: 'center'},
                {text: `${this.datos.J29}`, alignment: 'center'},
                {text: `${this.datos.T64}`}
              ],
              [
                {text: `- Registro  de permisos para trabajo con riesgo (izaje de mástil)`, fontSize: '10'},
                {text: `${this.datos.C60}`, alignment: 'center'},
                {text: `${this.datos.J30}`, alignment: 'center'},
                {text: `${this.datos.T65}`}
              ],
              [
                {text: '10.2.b Sistem de generación:', bold: true, colSpan: 4, fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: `- Registro de inspección de equipo de acuerdo a las áreas eléctricas clasificadas`, fontSize: '10'},
                {text: `${this.datos.C61}`, alignment: 'center'},
                {},
                {text: `${this.datos.T66}`}
              ],
              [
                {text: `- Registro de inspección  y medición de sistema de tierras`, fontSize: '10'},
                {text: `${this.datos.C62}`, alignment: 'center'},
                {},
                {text: `${this.datos.T67}`}
              ],
              [
                {text: `- Registro de aplicación de tarjeta-candado (certificados de aislamiento SPPTR)`, fontSize: '10'},
                {text: `${this.datos.C63}`, alignment: 'center'},
                {},
                {text: `${this.datos.T68}`}
              ],
              [
                {text: `- Órdenes de trabajo del mantenimiento de unidad de aire acondicionado en la PCR`, fontSize: '10'},
                {text: `${this.datos.C62}`, alignment: 'center'},
                {},
                {text: `${this.datos.T69}`}
              ],
              [
                {
                  text:
                    `- Registro de inspección y licencia de funcionamiento de recipientes sujetos a
                    presión, por cada recipente`,
                  fontSize: '10'
                },
                {text: `${this.datos.C65}`, alignment: 'center'},
                {},
                {text: `${this.datos.T70}`}
              ],
              [
                {text: '10.2.c Sistema de Bombeo de fluidos:', bold: true, colSpan: 4, fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: `- Registro de inspección y calibración de la válvula de seguridad`, fontSize: '10'},
                {text: `${this.datos.C66}`, alignment: 'center'},
                {text: `${this.datos.J31}`, alignment: 'center'},
                {text: `${this.datos.T71}`}
              ],
              [
                {text: `- Registro de inspección de bombas para lodo`, fontSize: '10'},
                {text: `${this.datos.C67}`, alignment: 'center'},
                {text: `${this.datos.J32}`, alignment: 'center'},
                {text: `${this.datos.T72}`}
              ],
              [
                {
                  text:
                    `- Registro de inspección y prueba del stand pipe, tubería, unión giratoria y mangera
                    de perforación`,
                  fontSize: '10'
                },
                {text: `${this.datos.C68}`, alignment: 'center'},
                {text: `${this.datos.J33}`, alignment: 'center'},
                {text: `${this.datos.T73}`}
              ],
              [
                {text: `- Registro de inspección y prueba del equipo de control de sólidos`, fontSize: '10'},
                {text: `${this.datos.C69}`, alignment: 'center'},
                {text: `${this.datos.J34}`, alignment: 'center'},
                {text: `${this.datos.T74}`}
              ],
              [
                {text: `- Registro de vida útil de los componetes del extremo hidráulico`, fontSize: '10'},
                {text: `${this.datos.C70}`, alignment: 'center'},
                {text: `${this.datos.J35}`, alignment: 'center'},
                {text: `${this.datos.T75}`}
              ],
              [
                {text: '10.2.d Sistema de control superficial:', bold: true, colSpan: 4, fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: `- Registro de inspección y prueba de preventores de acuerdo a etapa`, fontSize: '10'},
                {text: `${this.datos.C71}`, alignment: 'center'},
                {text: `${this.datos.J36}`, alignment: 'center'},
                {text: `${this.datos.T76}`}
              ],
              [
                {text: `- Registro de inspección y prueba de la bomba para operar preventores`, fontSize: '10'},
                {text: `${this.datos.C72}`, alignment: 'center'},
                {text: `${this.datos.J37}`, alignment: 'center'},
                {text: `${this.datos.T77}`}
              ],
              [
                {text: `- Registro de inspección y prueba del ensamble de estrangulación y consola`, fontSize: '10'},
                {text: `${this.datos.C73}`, alignment: 'center'},
                {text: `${this.datos.J38}`, alignment: 'center'},
                {text: `${this.datos.T78}`}
              ],
              [
                {text: `- Registro de inspección y prueba de línea de matar y estrangular`, fontSize: '10'},
                {text: `${this.datos.C87}`, alignment: 'center'},
                {text: `${this.datos.J39}`, alignment: 'center'},
                {text: `${this.datos.T92}`}
              ],
              [
                {text: `- Registro de inspección y prueba de separador de gas-lodo`, fontSize: '10'},
                {text: `${this.datos.C74}`, alignment: 'center'},
                {text: `${this.datos.J40}`, alignment: 'center'},
                {text: `${this.datos.T79}`}
              ],
              [
                {text: '10.2.e Sistema de seguridad y salvamento:', bold: true, colSpan: 4, fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: `- Registro de inspección y pruebas de Red  contra incendio, incluyendo Bombas `, fontSize: '10'},
                {text: `${this.datos.C75}`, alignment: 'center'},
                {text: `${this.datos.J41}`, alignment: 'center'},
                {text: `${this.datos.T80}`}
              ],
              [
                {text: `- Registro de inspección, pruebas y certificados de botes salvavidas`, fontSize: '10'},
                {text: `${this.datos.C76}`, alignment: 'center'},
                {text: `${this.datos.J42}`, alignment: 'center'},
                {text: `${this.datos.T81}`}
              ],
              [
                {text: `- Registro de inspección y pruebas del sistema de detección de humo, gas y fuego`, fontSize: '10'},
                {text: `${this.datos.C77}`, alignment: 'center'},
                {text: `${this.datos.J43}`, alignment: 'center'},
                {text: `${this.datos.T82}`}
              ],
              [
                {text: `- Registro de inspección, pruebas  y certificados de vigencia en los extintores portátiles`, fontSize: '10'},
                {text: `${this.datos.C78}`, alignment: 'center'},
                {text: `${this.datos.J44}`, alignment: 'center'},
                {text: `${this.datos.T83}`}
              ],
              [
                {text: `- Registro de inspección, pruebas y certificados de vigencia de los equipos fijo y semifijo de extinción`, fontSize: '10'},
                {text: `${this.datos.C79}`, alignment: 'center'},
                {text: `${this.datos.J45}`, alignment: 'center'},
                {text: `${this.datos.T84}`}
              ],
              [
                {text: `- Registro de inspección y pruebas de lava ojos y regaderas de emergencias`, fontSize: '10'},
                {text: `${this.datos.C80}`, alignment: 'center'},
                {text: `${this.datos.J46}`, alignment: 'center'},
                {text: `${this.datos.T85}`}
              ],
              [
                {text: `- Registro de inspección y pruebas de equipo de respiración autónomo`, fontSize: '10'},
                {text: `${this.datos.C81}`, alignment: 'center'},
                {text: `${this.datos.J47}`, alignment: 'center'},
                {text: `${this.datos.T86}`}
              ],
              [
                {text: '11.0 ADMINISTRACIÓN DE CAMBIOS MENORES', bold: true, colSpan: 4, color: 'white', fillColor: '#339966', fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: `11.1 ¿Los cambios realizados durante la operación, modificación, rehabilitación, instalación y desmantelamiento de los equipos estan documentados, autorizados, realizados y difundidos?`, fontSize: '10'},
                {text: `${this.datos.C82}`, alignment: 'center'},
                {},
                {text: `${this.datos.T87}`}
              ],
              [
                {text: '12.0 MEDIO AMBIENTE', bold: true, colSpan: 4, color: 'white', fillColor: '#339966', fontSize: '10'},
                {},
                {},
                {}
              ],
              [
                {text: `12.1 ¿Todas las licencias y permisos ambientales requeridas han sido obtenidas?`, fontSize: '10'},
                {text: `${this.datos.C83}`, alignment: 'center'},
                {text: `${this.datos.J48}`, alignment: 'center'},
                {text: `${this.datos.T88}`}
              ],
              [
                {text: `12.2 ¿Existen procedimientos para disposición de residuos peligrosos de manejo especial  y sólidos urbanos?. ¿Se aplican? Presentar evidencias`, fontSize: '10'},
                {text: `${this.datos.C84}`, alignment: 'center'},
                {},
                {text: `${this.datos.T89}`}
              ],
              [
                {
                  text: '13.0 SALUD EN EL TRABAJO (SALUD OCUPACIONAL)',
                  bold: true,
                  colSpan: 4,
                  color: 'white',
                  fillColor: '#339966',
                  fontSize: '10'
                },
                {},
                {},
                {}
              ],
              [
                {
                  text:
                    `13.1 ¿Se cuenta con el Atlas de Riesgo vigente y autorizado de la instalación y es
                    conocido por el personal?`,
                  fontSize: '10'
                },
                {text: `${this.datos.C85}`, alignment: 'center'},
                {},
                {text: `${this.datos.T90}`}
              ],
            ]
          }
        },
        {text: '\n\n'},
        {
          text: 'Notas:', fontSize: '10', pageBreak: 'before'
        },
        {
          table: {
            widths: [560],
            body: [
              [
                {
                  text: `1.- Las actividades marcadas en la columna Req. p/arranque (Tipo "A") son impeditivas y no podra iniciar la operación en caso de incumplir con alguna de ellas.`,
                  fontSize: '8'
                }
              ],
              [
                {
                  text: `2.- Los hallazgos tipo "B" deberán ser corregidos en un plazo menor o igual al tiempo que dure la intervención en esa localización`,
                  fontSize: '8'
                }
              ],
              [
                {
                  text: `3.- Documentar todos los hallazgos derivados de la Revisión de Seguridad de Pre-Arranque`,
                  fontSize: '8'
                }
              ],
            ],
          },
          layout: 'noBorders'
        },
        {text: '\n'},
        {
          table: {
            widths: [200, 100],
            body: [
              [
                {text: 'RESUMEN DE HALLAZGOS', alignment: 'center', fillColor: '#339966', color: 'white', fontSize: '10', bold: true},
                {text: 'Cantidad', alignment: 'center', fillColor: '#339966', color: 'white', fontSize: '10', bold: true}
              ],
              [
                {text: 'HALLAZGOS TIPO "A"', alignment: 'center', fontSize: '10', bold: true},
                {}
              ],
              [
                {text: 'HALLAZGOS TIPO "B"', alignment: 'center', fontSize: '10', bold: true},
                {}
              ],
              [
                {text: 'TOTAL', alignment: 'center', fontSize: '10', bold: true},
                {}
              ],
            ]
          },
          margin: [125, 10]
        },
        {text: '\n\n\n'},
        {
          text: `A).- Todos los hallazgos tipo "A" han sido corregidos?`, fontSize: '10'
        },
        {text: '\n'},
        {
          text: 'B).- Aprobación de inicio de operaciones de la instalación revisada mediante esta lista de verificación ASP: ', fontSize: '10'
        },
        {text: '\n'},
        {
          table: {
            widths: [180, 40, 30, 80, 30, 50],
            body: [
              [
                {text: '¿Se autoriza el inicio de operaciones?', fontSize: '10'},
                {},
                {text: 'Fecha:', fontSize: '10'},
                {},
                {text: 'Hora:', fontSize: '10'},
                {}
              ]
            ]
          },
          margin: [20, 0],
          layout: 'noBorders'
        },
        {text: '\n'},
        {
          text: `C).- Relación de los miembros del Grupo Multidisciplinario que participaron en la aplicación de la Revisión de Seguridad de Pre-Arranque`, fontSize: '10'
        },
        {
          table: {
            widths: [200, 50, 160, 120],
            body: [
              [
                {text: 'Nombre', alignment: 'center', fillColor: '#339966', color: 'white', fontSize: '10', bold: true},
                {text: 'Ficha', alignment: 'center', fillColor: '#339966', color: 'white', fontSize: '10', bold: true},
                {text: 'Especialidad', alignment: 'center', fillColor: '#339966', color: 'white', fontSize: '10', bold: true},
                {text: 'Firma', alignment: 'center', fillColor: '#339966', color: 'white', fontSize: '10', bold: true}
              ],
              [
                {},
                {},
                {text: 'Líder del Grupo Multidisciplnario', alignment: 'center', fontSize: '10'},
                {}
              ],
              [
                {},
                {},
                {text: 'Coordinador de Operación', alignment: 'center', fontSize: '10'},
                {}
              ],
              [
                {},
                {},
                {text: 'Coordinador de Mantenimiento', alignment: 'center', fontSize: '10'},
                {}
              ],
              [
                {},
                {},
                {text: 'Ingeniería de Proyecto', alignment: 'center', fontSize: '10'},
                {}
              ],
              [
                {},
                {},
                {text: 'Ingeniero de Proyecto', alignment: 'center', fontSize: '10'},
                {}
              ],
              [
                {},
                {},
                {text: 'Ingeniero de Pozo', alignment: 'center', fontSize: '10'},
                {}
              ],
              [
                {},
                {},
                {text: 'Línea de mando de Operación (Superintendente/ITPI/ITR)', alignment: 'center', fontSize: '10'},
                {}
              ],
              [
                {},
                {},
                {text: 'Línea de mando Mantenimiento (ETASM/Supervisor)', alignment: 'center', fontSize: '10'},
                {}
              ],
              [
                {},
                {},
                {text: 'Residencia de Contratos', alignment: 'center', fontSize: '10'},
                {}
              ],
              [
                {},
                {},
                {text: 'Fluidos', alignment: 'center', fontSize: '10'},
                {}
              ],
              [
                {},
                {},
                {text: 'GMSSPA', alignment: 'center', fontSize: '10'},
                {}
              ],
              [
                {text: 'Observación: Si algún hallazgo no fue solventado como estaba previsto originalmente, se debe documentar la solución alternativa adoptada, en anexo 5', fontSize: '10', colSpan: 4},
                {},
                {},
                {}
              ]
            ]
          }
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 100]
    };
    this.pdfMaker.generate(dd, 'Anexo1');
  }

}
