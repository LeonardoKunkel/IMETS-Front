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
  datosY: any = [];

  constructor(
    public modalCtrl: ModalController,
    private dti: DtiService
  ) { }

  ngOnInit() {
    this.createChart();
    this.getReal();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  getReal() {
    this.dti.getDtiDatos().subscribe(res => {
      console.log(res);
    });
  }

  createChart() {
    const ctx = 'myChart';
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['col1', 'col2', 'col3'],
        datasets: [{
          label: 'DTI',
          data: [10, 9, 15],
          // backgroundColor: [
          //   'rgb(66, 134, 24, 0.5)',
          //   'rgb(34, 56, 111, 0.5)',
          //   'rgb(142, 64, 80, 0.5)',
          // ]
        }]
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

  print() {
    
  }

}
