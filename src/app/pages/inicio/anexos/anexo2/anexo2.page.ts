import { PdfMakerService } from './../../../../services/pdf-maker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anexo2',
  templateUrl: './anexo2.page.html',
  styleUrls: ['./anexo2.page.scss'],
})



export class Anexo2Page implements OnInit {

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
    C88: '',
    C89: '',
    C90: '',
    C91: '',
    C92: '',
    C93: '',
    C94: '',
    C95: '',
    C96: '',
    C97: '',
    C98: '',
    C99: '',
    C100: '',
    C101: '',
    C102: '',
    C103: '',
    C104: '',
    C105: '',
    C106: '',
    C107: '',
    C108: '',
    C109: '',
    C110: '',
    C111: '',
    C112: '',
    C113: '',
    C114: '',
    C115: '',
    C116: '',
    C117: '',
    C118: '',
    C119: '',
    C120: '',
    C121: '',
    C122: '',
    C123: '',
    C124: '',
    C125: '',
    C126: '',
    C127: '',
    C128: '',
    C129: '',
    C130: '',
    C131: '',
    C132: '',
    C133: '',
    C134: '',
    C135: '',
    C136: '',
    C137: '',
    C138: '',
    C139: '',
    C140: '',
    C141: '',
    C142: '',
    C143: '',
    C144: '',
    C145: '',
    C146: '',
    C147: '',
    C148: '',
    C149: '',
    C150: '',
    C151: '',
    C152: '',
    C153: '',
    C154: '',
    C155: '',
    C156: '',
    C157: '',
    C158: '',
    C159: '',
    C160: '',
    C161: '',
    C162: '',
    C163: '',
    C164: '',
    C165: '',
    C166: '',
    C167: '',
    C168: '',
    C169: '',
    C170: '',
    C171: '',
    C172: '',
    C173: '',
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
    T93: '',
    T94: '',
    T95: '',
    T96: '',
    T97: '',
    T98: '',
    T99: '',
    T100: '',
    T101: '',
    T102: '',
    T103: '',
    T104: '',
    T105: '',
    T106: '',
    T107: '',
    T108: '',
    T109: '',
    T110: '',
    T111: '',
    T112: '',
    T113: '',
    T114: '',
    T115: '',
    T116: '',
    T117: '',
    T118: '',
    T119: '',
    T120: '',
    T121: '',
    T122: '',
    T123: '',
    T124: '',
    T125: '',
    T126: '',
    T127: '',
    T128: '',
    T129: '',
    T130: '',
    T131: '',
    T132: '',
    T133: '',
    T134: '',
    T135: '',
    T136: '',
    T137: '',
    T138: '',
    T139: '',
    T140: '',
    T141: '',
    T142: '',
    T143: '',
    T144: '',
    T145: '',
    T146: '',
    T147: '',
    T148: '',
    T149: '',
    T150: '',
    T151: '',
    T152: '',
    T153: '',
    T154: '',
    T155: '',
    T156: '',
    T157: '',
    T158: '',
    T159: '',
    T160: '',
    T161: '',
    T162: '',
    T163: '',
    T164: '',
    T165: '',
    T166: '',
    T167: '',
    T168: '',
    T169: '',
    T170: '',
    T171: '',
    T172: '',
    T173: '',
    T174: '',
    T175: '',
    T176: '',
    T177: '',
    T178: '',
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
    J49: '',
    J50: '',
    J51: '',
    J52: '',
    J53: '',
    J54: '',
    J55: '',
  };


  currentPopover = null;

  constructor( private pdfMaker: PdfMakerService ) { }

  ngOnInit() {
  }

  subir() {
    console.log(this.datos);
  }

  pdf() {
    const dd = {
      header(){
        return {
          table: {
            widths: [740],
            heights: [50, 15, 15],
            body: [
              [{text:''}],
              [{text:'II. IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN DE RIESGOS Y DE IMPACTOS AMBIENTALES',alignment:'center',bold:true}],
              [{text:'EVALUACIÓN DE ASPECTOS AMBIENTALES',alignment:'center',bold:true,fillColor:'#ddd'}],
            ]
          },
          margin: [22,15]
        };
      },
      content: [
        {
          columns: [
            {
              text:'Región'
            },
            {
              canvas:[{ type: 'line', x1: -80, y1: 10, x2: 20, y2: 10, lineWidth: 2 }],bold:true,fillColor:'#a5c3dd',fonSize:10,border:[false,false,false,false]
            },
            {
              text:'Centro de Trabajo'
            },
            {
              canvas:[{ type: 'line', x1: -20, y1: 10, x2: 120, y2: 10, lineWidth: 2 }],bold:true,fillColor:'#a5c3dd',fonSize:10,border:[false,false,false,false]
            },
            {
                  
            },
            {
              text:'Fecha'
            },
            {
              canvas:[{ type: 'line', x1: -80, y1: 10, x2: 20, y2: 10, lineWidth: 2 }],bold:true,fillColor:'#a5c3dd',fonSize:10,border:[false,false,false,false]
            },
          ]
        },
        {text: '\n'},
        {
          columns: [
              {
                text: 'Plataforma'
              },
              {
                canvas:[{ type: 'line', x1: -55, y1: 10, x2: 30, y2: 10, lineWidth: 2 }],bold:true,fillColor:'#a5c3dd',fonSize:10,border:[false,false,false,false]
              },
              {
                text: 'Equipo'
              },
              {
                canvas:[{ type: 'line', x1: -70, y1: 10, x2: 120, y2: 10, lineWidth: 2 }],bold:true,fillColor:'#a5c3dd',fonSize:10,border:[false,false,false,false]
              },
              {
                  
              },
              {
                  text:'Localización'
              },
              {
                  canvas:[{ type: 'line', x1: -50, y1: 10, x2: 20, y2: 10, lineWidth: 2 }],bold:true,fillColor:'#a5c3dd',fonSize:10,border:[false,false,false,false]
              },
          
        ]
          },
          {text:'\n'},
          {
        columns: [
              {
                  text:'Origen de la RSPA:'
              },
              {
                  text:'Instalacion Nueva:'
              },
              {
                  table:{
                      widths:[10],
                      heigths:[15],
                      body:[
                            [{text:`.`}]
                          ]
                  }
              },
              {
                  text:'Instalacion Fuera Operación:'
              },
              {
                  table:{
                      widths:[10],
                      heigths:[15],
                      body:[
                            [{text:`.`}]
                          ]
                  }
              },
              {
                  text:'Cambio de localizacion:'
              },
              {
                  table:{
                      widths:[10],
                      heigths:[15],
                      body:[
                            [{text:`.`}]
                          ]
                  }
              }
          
        ]
          },
            {
              table:
                {
                  widths: [400, 80, 60, 170],
                  body: [
                    [
                      {text: 'Requisitos de ASP', bold: true, alignment: 'center', fontSize: 10},
                      {text: '¿Cumple?', bold: true, alignment: 'center', fontSize: 10},
                      {text: 'Req. p/Arranque (Tipo "A")', bold: true, alignment: 'center', fontSize: 10},
                      {text: 'Observaciones', bold: true, alignment: 'center', fontSize: 10}
                    ],
                    [
                      {text: '1.0 SISTEMA DE GENERACION, CONTROL Y DISTRIBUCION Y CONVERSION DE ENERGIA ELECTRICA', fontSize: 10, fillColor: '#48a058', color: '#ffffff', colSpan: 4},
                      {text: ''},
                      {text: ''},
                      {text: ''}
                    ],
                    [
                      {text: `1.1 GRUPO ELECTROGENOS`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.1 Instrumentos de medición de los motores de combustión Interna se encuentran operando correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.2 Dispositivos de protección del Motor de Combustion Interna, Probados e inspeccionados de acuerdo a programa.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.3 Motores de Combustión Interna con sistema supresor de chispa instalados.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.3.a. Líneas de escape de gases de los Motores de Combustión Interna con aislamiento térmico instalados.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.3.b. Líneas de suministro de Aire, Combustible y Refrigerante de los Motores de Combustión Interna identificadas con código de colores y sentido del flujo`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.3.c. Tuberías conduit para cableado de los Motores de Combustión Interna y generadores eléctricos en buen estado y con tapas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.3.d. Tolvas o guardas de protección de partes móviles los Motores de Combustión Interna y generadores eléctricos estén instaladas correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text:
                        [
                          {text: '1.1.3.e. Motores de Combustión Interna y generadores eléctricos se encuentren aterrizados correctamente.', fontSize: 10},
                          {text: '(EQUIPO ROTATIVO Y COMPONENTES ESTRUCTURALES) PARARRAYOS Y TIERRAS FISICAS', fontSize: 10, bold: true}
                        ]
                      },
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.3.f. Instrumentos y sistemas eléctricos (interruptores, botoneras, controles locales) de los Motores de (C.A. Y C.D.)Combustión Interna y generadores eléctricos se encuentren correctamente identificados en español`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.3.g. Señalización alusiva a riesgos y precauciones de los Motores de (C.A. Y C.D.)Combustión Interna y generadores electricos este disponible.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.3.h. Motores de Combustión Interna y generadores eléctricos se encuentren debidamente identificados de acuerdo a los criterios de ASP y rotulado como equipo crítico (CC).`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.3.i. Area de los Motores de Combustión Interna y generadores eléctricos se encuentre en orden y limpieza.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.3.j. Área de motogeneradores con un nivel de iluminación requerido, para llevar a cabo inspecciones nocturnas en el tablero de instrumentos.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.1.3.k. Pasillos y escaleras de área motogeneradores deberán contar con barandales de acuerdo a normatividad aplicable y el piso con material antiderrapante.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.2 PCR / PDR / CASETA PLANTA DE LUZ`, bold: true, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.2.1 Tapete dieléctrico instalado.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.2.2 Unidades de aire acondicionado en condiciones y operando.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.2.3 Instrumentos y sistemas eléctricos (interruptores, botoneras, controles locales) operando correctamente y se encuentren identificados en español`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.2.4 Tuberías conduit para cableado interno y externo en buen estado y con tapas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.2.4.a Instrumentos y sistemas eléctricos (tableros de control, CCM, SCR) aterrizados correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.2.4.b Señalización alusiva a riesgos y precauciones de los Motores de Combustión Interna y generadores eléctricos esté disponible en sitio.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.3. CABINA INTEGRAL DE PERFORADOR (CONSOLA DE INSTRUMENTOS)`, bold: true, fontSize: 10, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.3.1 Instrumentos de medición y controles se encuentran identificados en español y operando correctamente (Eléctrica, Mecánica e Instrumentos)`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.3.1.a.- Válvulas neumáticas de control operando e identificadas en español.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.3.1.b.- Indicador de Peso, Torquímetro, contador de Emboladas e indicadores de presión de operación, instalados, operando, e identificadas en español`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.4. CASETA DE COMPRESORES`, bold: true, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `1.4.1 Revisar físicamente el arranque y paro de los compresores de aire`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.0 SISTEMA DE IZAJE Y ROTACION`, fontSize: 10, fillColor: '#48a058', color: '#ffffff', colSpan: 4, bold: true},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1 IZAJE (TORRE O MÁSTIL Y SUBESTRUCTURA`, bold: true, fontSize: 10, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.1 Vientos del mástil instalados.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.1.a.-  Bridas de izaje retiradas o sujetadas a mástil correctamente`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text:
                        [
                          {text: `2.1.1.b.-  Sistema de izaje hidráulico (gatos) sujetados a mástil con`, fontSize: 10},
                          {text: ' Pernos y Seguros adecuados.', bold: true, fontSize: 10}
                        ]
                      },
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.1.c.-  Sistema de alumbrado y cableado sujetos a mástil correctamente con cable de seguridad.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text:
                        [
                          {text: `2.1.1.d.-  Mástil aterrizado correctamente con sistema de apartarrayos y`, fontSize: 10},
                          {text: ' Luz de situación.', bold: true, fontSize: 10}
                        ]
                      },
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text:`2.1.2. Escalera de acceso a la plataforma elevada (changuero) y área de la corona en buenas condiciones.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.2.a. Escalera de acceso a la plataforma elevada (changuero) y área de la corona con dispositivo de seguridad (retráctil o arresto vertical), desde el nivel del piso de perforación.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.3 Sistema de escape de emergencia del chango en condiciones de operación.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.4. Sistema de línea de vida horizontal de 7 mts. (latch way) para chango en condiciones de operación.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.5. Peines y parrillas asegurados con cable o cadena de seguridad (Changuero).`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.6 Sistema de achique o recuperación de fluidos a presas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.7. Verificar que se cuente con andamios y cables de vida para el uso en área de contrapozo, de acuerdo a normatividad aplicable`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.8.- Escaleras de acceso a piso, presas, rampa, piso de malacate, estén sujetas correctamente y de acuerdo a la normatividad aplicable.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.9.- Verificar que no existan accesorios o herramientas sueltas en alturas o instalaciones provisionales y que toda línea o equipo soportado en la subestructura esté debidamente instalado.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.10.- Verificar que la guarda de seguridad de la salida a la rampa de tubería esté instalada.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.11.- Verificar visualmente los elementos del mástil y la subestructura, así como pernos, chaveteros y chavetas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.1.12.- Verificar que el Top Drive (Sistema de Impulsión Superior) ya sea hidraúlico o eléctrico, esté completo y proporcione un torque continuo.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.2 MALACATE PRINCIPAL`, fontSize: 8, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.2.1 Verificar que el freno de protección de la corona esté calibrado y opere adecuadamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.2.2. Guardas del malacate principal instaladas y en condiciones de uso.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.2.3. Sistema de frenos principales del malacate en condiciones.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.2.4. Cable de operación del malacate en buen estado.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.2.5.- Revisar presión de aire de embrague de baja/alta y su funcionamiento adecuado.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.2.6.- Guardas de la transmisión entre motores de accionamiento (eléctricos o combustión interna al malacate) instaladas correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.2.7.- Motores de accionamiento (eléctricos o combustión interna al malacate) funcionando correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.2.8.- Ancla de la línea muerta en buen estado.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.2.9.- Señalización alusiva a riesgos y precauciones disponible y visible.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.2.10.- Verificar funcionamiento del embrague y ausencia de fugas en el freno auxiliar.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.3 ROTARIA`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.3.1. Seguros de buje de rotaria instalados.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.3.2. Tapete antiderrapante instalado.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.3.3. Mesa rotaria instalada al mismo nivel del piso de trabajo.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.3.3.a.- Guarda de transmisión de malacate-rotaria instalada correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.3.4.- Verificar el funcionamiento de la rotaria y transmisión.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                      ],
                    [
                      {text: `2.4. POLEA VIAJERA Y GANCHO`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.4.1. Verificar el funcionamiento adecuado del seguro, polea,sistema de amortiguación y gancho (muñeco).`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.5 GRÚA / MALACATE DE MANIOBRAS`, fontSize: 8, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.5.1. Malacates de maniobras con guía y guarda de protección.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.5.2. Indicadores de peso y de ángulo de grúas fijas operando correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.5.3. Sistemas de alarma y bloqueo de grúas fijas operando adecuadamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.5.4. Cables y estrobos para maniobras en buen estado.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.5.5. Malacates de maniobras cuentan con etiqueta conteniendo las categorías autorizadas para operarlos.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `2.5.5.a. Líneas de suministro de aire, identificadas con código de colores y sentido del flujo.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.0 SISTEMA DE BOMBEO Y FLUIDOS DE CONTROL`, fontSize: 10, fillColor: '#48a058', color: '#ffffff', colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.1. MOTOBOMBA PARA LODOS`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.1.1 Válvula de seguridad instalada y con certificado de calibración.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.1.2. Línea de desfogue asegurada con abrazadera y cadena.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.1.3. Mangueras succión y descarga asegurada en ambos extremos con abrazadera y cadena de seguridad.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.1.4. Amortiguador de pulsaciones cuenta con la presión de precarga adecuada e indicador en buen estado.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.1.5. Área de lubricación de porta vástagos con la parrilla de protección instalada.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.1.5.a.- Guardas en general instaladas correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.1.5.b.- Motores de accionamiento (eléctricos o combustión interna al malacate) funcionando correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.1.5.c.- Convertidor de torsión funcionando correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.1.5.d.- Embrague de transmisión de motobomba funcionando correctamente y con guarda de protección.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.1.5.e.- Señalización alusiva a a riesgos y precauciones de ésta área disponible.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.2. UNIÓN GIRATORIA`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.2.1. Abrazaderas de la manguera de alta presión de la unión giratoria se encuentran en buen estado y sujetas correctamente en ambos extremos.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.2.2. Unidad con sistema protector contra golpes instalado.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.3. STAND PIPE`, fontSize: 8, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.3.1. Manómetro (tecolote) en condiciones y de la capacidad requerida.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.3.1.a.- Tubos verticales para 5,000 psi, correctamente asegurado a la estructura del mástil.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `3.3.1.b.- Arreglo de válvulas para comunicar los tubos verticales en condiciones de operación.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.0 SISTEMA DE CONTROL SUPERFICIAL`, fontSize: 10, fillColor: '#48a058', color: '#ffffff', colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.1 PREVENTORES`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.1.1 Arreglo de preventores de acuerdo al programa inicial del pozo.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.1.2. Interconexión de las líneas de alta presión de la unidad hidraúlica para operar a los preventores.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.1.3. Verificar se encuentren instalados el arreglo de volantes y crucetas para el accionamiento manual de los preventores.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.2. UNIDAD PARA OPERAR PREVENTORES`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.2.1 Calibración de arranque/paro de la bomba neumática y eléctrica de bomba para operar preventores, funcionando correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.2.2. Válvula de corte de tubería (protegida contra operación involuntaria).`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.2.3. Acumuladores principales y de respaldo con la presión de precarga adecuada.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.2.4. Arrancador del motor eléctrico de la bomba triplex a prueba de explosión.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.2.5. Dispositivos de regulación y seguridad instalados; funcionando adecuadamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.2.6. Tablero de control remoto operando adecuadamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.2.7. Verificar que el cable de control remoto esté instalado y sin fugas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.2.8. Verificar que exista el sistema de respaldo de Nitrógeno, con manómetro y presión normal de trabajo.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.2.9 Líneas para operar preventores adecuadas y funcionando correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.3 ÁRBOL DE VÁLVULAS`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.3.1 Arboles de válvulas de otros pozos en el sitio (macroperas), con protección metálica instalada y con indicadores de presión en condiciones de operación.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.3.1.a.- Pozos abandonados en el sitio (macroperas), con protección metálica instalada y con indicadores de presión en condiciones de operación.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.3.1.b.- Cabezales y Líneas de producción de Pozos en el sitio (macroperas), con protección metálica instalada, identificados y con indicadores de presión en condiciones de operación.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.4 ENSAMBLE DE ESTRANGULACIÓN`, bold: true, fontSize: 10, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.4.1. Líneas de desfogue aseguradas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.4.2. Válvulas con su volante debidamente señalizado (abierto/cerrado).`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.4.3. Válvula y consola de estrangulación instalada.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.4.4. Instrumentos de la consola de control en condiciones y de la capacidad requerida.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.4.5. Capacidad del múltiple de estrangulación igual a la del preventor.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.4.6. Línea de Estrangular y matar instaladas correctamente y en buenas condiciones.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.5 SEPARADOR GAS/LODO`, bold: true, fontSize: 10, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `4.5.1.Separador gas/lodo aprobado de acuerdo a norma aplicable.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.0 SISTEMA DE SEGURIDAD Y SALVAMENTO`, fontSize: 10, fillColor: '#48a058', color: '#ffffff', colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.1. SALVAMENTO (BOTES Y BALSAS SALVAVIDAS) `, fontSize: 10, bold: true},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.1.1. Avituallamiento de acuerdo a la capacidad.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.1.2. Rutas de acceso libres.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.1.3. Sistema de liberación de botes operando de forma adecuada.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.1.4. Sistema de arranque de botes en condiciones.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.1.5. Balsas de salvamento con certificación vigentes (no caducas) colocadas en las áreas correspondientes.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.1.6. Dotación de chalecos salvavidas con sistema (acústica y lumínica) de acuerdo a la normatividad vigente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.2. CONTRAINCENDIO (MOTOBOMBA Y ELECTROBOMBA) MARINA`, bold: true, fontSize: 10, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.2.1 Sistemas de arranque y paro operando adecuadamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.2.2. Sistemas de medición de presión instalados y de acuerdo a la norma de referencia.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.2.3 Monitores de contra incendio operando, ubicados correctamente y con libre acceso.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.3. ALARMAS (HUMO Y FUEGO, GAS H2S y CH4)`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.3.1. Sistema de Alarmas instalados en las áreas correspondientes, con las características necesarias y funcionando adecuadamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.3.2. Sensores de H2S y CH4 con la calibración adecuada  a la concentración permitida.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.3.3. Detector portátil de gases disponible en la instalación.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `5.3.4 Sistema de botoneras con la clasificación y división de áreas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.0. SISTEMA AUXILIAR`, fontSize: 10, fillColor: '#48a058', color: '#ffffff', colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.1. Planta tratadora de aguas residuales operando adecuadamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.2. Planta potabilizadora operando adecuadamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3. ÁREAS COMPLEMENTARIAS Y COMUNES`, fontSize: 10, fillColor: '#48a058', color: '#ffffff', colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.1 ÁREA ELÉCTRICA`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.1.1. Integridad de condulets, cajas de conexiones, sellos y glándulas, completas, sin tornillos o tapas faltantes, aprobadas para el área.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.1.2. Sistema de pararrayos instalado.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.1.3. Sistema de iluminación adecuado y funcionando correctamente de acuerdo a clasificación de áreas, clase y división.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.1.4. Caja de conexiones de motores eléctricos con tapa y glándula.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.1.5. Unidades aterrizadas contra descargas eléctricas y atmosféricas (sistema de tierras).`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.1.6. Verificar que se cuente con juego (kit) de bloqueo eléctrico con candados y etiquetas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.1.7 Ventilador aspersor de gases en condiciones.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.1.8 Verificar que los cables de alimentación eléctrica se conduzcan en tubería conduit o en charola con tapa para tal fin. `, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.1.8 Verificar que se cuente con señalización alusiva a riesgo de alto voltaje y precauciones en las área donde exista presencia de esta condición.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2. ÁREA ESTRUCTURAL`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2.1. Elementos estructurales de mástil-subestructura libres de corrosión y en buen estado, sin elementos doblados o golpeados.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2.2. Escaleras, pasillos, pisos y barandales en buen estado, cumpliendo con la normatividad y libres de obstáculos.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2.3 Cobertizos instalados correctamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2.4. Pisos y pasillos en las diferentes áreas de trabajo de acuerdo a las actividades que se realizan.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2.5. Piso de trabajo limpio y ordenado con barandales y borde contenedor instalado.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2.6. Pernos cumpliendo con el diseño, dimensiones adecuadas y con seguros instalados.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2.7. Tanque general de combustible contando con dispositivo de contención de acuerdo a normatividad aplicable.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2.8. Área designada para almacenamiento y despacho de lubricantes, contando con charolas para derrames.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2.9. Área de acopio provisional de aceites gastados disponible.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2.10. Jaula de cilindros de oxígeno/acetileno con separación para vacíos y llenos, rotulados y con capuchones de protección.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2.11 Charola recolectora de lodos instalada en subestructura.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.2.12 Tuberías debidamente soportadas y aseguradas, así como identificadas de acuerdo al código de colores y con la dirección del flujo.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.3 ÁREA MECÁNICA`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.3.1 Áreas calientes debidamente localizadas e identificadas, de ser posible aisladas. `, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.3.2 Componentes rotatorios cuentan con guardas de protección instaladas adecuadamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.3.2.a Verificar que se cuente con señalización alusiva a riesgo y precauciones en las áreas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.3.2.a Verificar que se cuente con orden y limpieza en las áreas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.3 ÁREA MECÁNICA`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.3.1 Áreas calientes debidamente localizadas e identificadas, de ser posible aisladas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.3.2 Componentes rotatorios cuentan con guardas de protección instaladas adecuadamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.3.2.a Verificar que se cuente con señalización alusiva a riesgo y precauciones en las áreas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.3.2.a Verificar que se cuente con orden y limpieza en las áreas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.4 RESPUESTA A EMERGENCIAS`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.4.1 Verificar que se cuenta con las unidades lavaojos presurizadas en condiciones, en las áreas que apliquen.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.4.2 Extintores colocados estratégicamente, con su señalamiento de ubicación y verificacion vigente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.4.3 Verificar que los materiales químicos clasificados y distribuidos de acuerdo a su composición y uso se encuentren sobre tarimas de madera.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.4.3.a Verificar que se disponga de las hojas de seguridad de los materiales peligrosos en idioma español, usados en el proceso, debidamente identificado y clasificado.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                      ],
                    [
                      {text: `6.3.4.4. Botiquín de primeros auxilios con instructivo para aplicarlos.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.4.5. Equipos de respiración autónoma disponibles, calibrados, con certificación vigente y en condiciones de uso.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.4.6. Tablero de plan de emergencias instalado y visible. (Números telefónicos de hospital, ambulancia y departamento contraincendio).`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.4.7. Equipo de seguridad disponible (arneses para trabajos de altura, bandas de posicionamiento, bandas de anclaje).`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.4.8. Camilla para transporte de lesionados disponible.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.4.9. Puertas de acceso principal al area habitacional (Division Marina) y PCR con sistema antipánico de apertura.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.5. IDENTIFICACIÓN`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.5.1. Verificar los señalamientos alusivos de seguridad (preventivos, restrictivos, informativos y obligatorios) adecuados y distribuidos estratégicamente en la instalación.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.5.2. Líneas de conducción con identificación de la dirección del flujo y pintada de acuerdo al código de colores.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.5.3. Cilindros acumuladores (Nitrógeno. Oxígeno y Acetileno) rotulados con rombo de comunicación de riesgos.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.5.4. Tanques de combustible rotulados (fluido contenido y capacidad) y con rombo de comunicación de riesgos.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.5.5 Acceso a la localización identificado con nombre del pozo, No. de equipo y letrero de días sin accidentes.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.5.6 Área de estacionamiento identificada y delimitada. (Terrestre)`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.5.7 Área o punto de reunión de la localización identificada.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.5.8 Salidas de emergencias de la localización señaladas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.5.9 Contenedores de residuos se encuentren identificados de acuerdo a la clasificación .`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.5.10 Equipos críticos rotulados en lugar visible.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.5.11 Verificar que los sistemas de emergencia como estaciones lavaojos, regaderas, estén señalizados para su fácil localización.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6 VARIOS`, fontSize: 10, bold: true, colSpan: 4},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.a Identificar riesgos externos o próximos a la localización donde se desarrollará el proceso.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.a.1 Verificar ausencia de líneas de alta tensión (CFE) en el área de la localización, acceso y maniobras. (Terrestre)`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.1 Condiciones generales de disciplina, órden y limpieza en todas las áreas.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.2 Válvulas con sus volantes instalados.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.4 Sistema de comunicación en buenas condiciones de funcionamiento (Radio, Teléfono y Voceo).`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.5 Traileres asegurados y aterrizados apropiadamente al terreno.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.6 Control de acceso a la localización disponible.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.7 Cercado perimetral en la localización completo.(Terrestre)`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.8 Conos de viento instalados en la localización.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.9 Presa de quema con quemador ecológico y mampára.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.10 Cárcamo y cunetas adecuadas. (Terrestre)`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.10.a Sistema cerrado de drenaje. (Marino)`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.11 Servicios sanitarios (letrinas portátiles) en buenas condiciones, aseguradas y aterrizadas. (Terrestre)`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.12 Sistema de aire acondicionado del área habitacional funcionando adecuadamente.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                    [
                      {text: `6.3.6.13 Recipientes sujetos a presión con válvula de seguridad y purga de condensados con licencia de funcionamiento de la STPS.`, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10},
                      {text: ``, fontSize: 10}
                    ],
                  ]
                }
              },
              {text: '\nNotas:\n'},
              {
                ol: [
                  { text: 'Las actividades marcadas en la columna Req. p/arranque (Tipo "A") son impeditivas y no podra iniciar la operación en caso de incumplir con alguna de ellas.', fontSize: 9 },
                  { text: 'Los hallazgos tipo "B" deberán ser corregidos en un plazo menor o igual al tiempo que dure la intervención en esa localización', fontSize: 9 },
                  { text: 'Documentar todos los hallazgos derivados de la Revisión de Seguridad de Pre-Arranque.', fontSize: 9 },
                ]
              },
              {text: '\nSeguridad de Pre-Arranque\n'},
              {
                table: {
                  widths: [300, 150],
                  margins: [20, 30],
                  body: [
                    [
                      {text: `RESUMEN DE HALLAZGOS`, alignment: 'center'},
                      {text: `Cantidad`, alignment: 'center'}
                    ],
                    [
                      {text: `HALLAZGOS TIPO "A"`, alignment: 'center'},
                      {text: ``, alignment: 'center'}
                    ],
                    [
                      {text: `HALLAZGOS TIPO "B"`, alignment: 'center'},
                      {text: ``, alignment: 'center'}
                    ],
                    [
                      {text: `TOTAL`, alignment: 'center'},
                      {text: ``, alignment: 'center'}
                    ],
                  ]
                },
                alignment: 'center'
              },
              {
                text: '\nA).- Todos los hallazgos tipo "A" han sido corregidos?\n'
              },
              {
                text: '\nB).- Aprobación de inicio de operaciones de la instalación revisada mediante esta lista de verificación ASP:\n'
              }
            ],
            pageOrientation: 'landscape',
            pageSize: 'LETTER',
            pageMargins: [22, 120]
    };
  }

}
