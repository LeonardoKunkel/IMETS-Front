import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as Chart from 'chart.js';
import { DtiService } from 'src/app/services/dti.service';

@Component({
  selector: 'app-chart-modal',
  templateUrl: './chart-modal.page.html',
  styleUrls: ['./chart-modal.page.scss'],
})
export class ChartModalPage implements OnInit {

  datosX: any = [];
  datosYIdeal: any[] = [];
  datosYIdeal2: any[] = [];
  datosYReal: any[] = [];
  datosYReal2: any[] = [];

  constructor(
    public modalCtrl: ModalController,
    private dti: DtiService
  ) { }

  ngOnInit() {
    this.createChart();
    this.getIdeal();
    this.getReal();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  createChart() {
    const ctx = 'myChart';
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Día1', 'Día2', 'Día3', 'Día4', 'Día5'],
        datasets: [
          {
            label: 'Ideal',
            data: this.datosYIdeal,
            fill: false,
            lineTension: 0,
            backgroundColor: ['rgb(0, 69, 139, 0.5)'],
            borderColor: 'rgb(0, 69, 139, 1)',
            borderCapStyle: 'butt',
            borderDashOfset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(34, 56, 13, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(34, 56, 111, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10
          },
          {
            label: 'Real',
            data: this.datosYReal,
            fill: false,
            lineTension: 0,
            backgroundColor: ['rgb(255, 196, 9, 0.5)'],
            borderColor: 'rgb(255, 196, 9, 1)',
            borderCapStyle: 'butt',
            borderDashOfset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(34, 56, 13, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(255, 196, 9, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    const ctx2 = 'myChart2';
    const myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Día1', 'Día2', 'Día3', 'Día4', 'Día5'],
        datasets: [
          {
            label: 'Ideal',
            data: this.datosYIdeal2,
            fill: false,
            lineTension: 0,
            backgroundColor: ['rgb(0, 69, 139, 0.5)'],
            borderColor: 'rgb(0, 69, 139, 1)',
            borderCapStyle: 'butt',
            borderDashOfset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(34, 56, 13, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(34, 56, 111, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10
          },
          {
            label: 'Real',
            data: this.datosYReal2,
            fill: false,
            lineTension: 0,
            backgroundColor: ['rgb(255, 196, 9, 0.5)'],
            borderColor: 'rgb(255, 196, 9, 1)',
            borderCapStyle: 'butt',
            borderDashOfset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(34, 56, 13, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(255, 196, 9, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  getIdeal() {
    this.dti.getDtiDatos().subscribe((data: any) => {
      console.log(data);
      const conteo = data;
      for (let i = 0; i < 5; i++) {
        const element = conteo[i].porcentaje;
        this.datosYIdeal.push(conteo[i].porcentaje);
      }
      console.log(this.datosYIdeal);
      for (let i = 5; i < 17; i++) {
        const element = conteo[i].porcentaje;
        this.datosYIdeal2.push(conteo[i].porcentaje);
      }
      console.log(this.datosYIdeal2);
    });
  }

  getReal() {
    this.dti.getDti().subscribe((data: any) => {
      console.log(data.dti);
      const conteo = data.dti;
      conteo.forEach((elemento) => {
        if (elemento.tipo === 'transporte') {
          this.datosYReal.push(elemento.porcentaje);
        } else {
          this.datosYReal2.push(elemento.porcentaje);
        }
      });
      console.log(this.datosYReal2);
    });
  }

  print() {
    
  }

}
