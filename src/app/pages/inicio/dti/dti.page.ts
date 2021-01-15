import { ChartModalPage } from './chart-modal/chart-modal.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSegment, ModalController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DtiService } from 'src/app/services/dti.service';

@Component({
  selector: 'app-dti',
  templateUrl: './dti.page.html',
  styleUrls: ['./dti.page.scss'],
})
export class DTIPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

  hyperDatos: Observable<any>;
  porcentajeTotal: any = [];
  probados: '';
  tipo = '';
  datos: any = {
    descripcion: '',
    dia: '',
    porcentaje: '',
    tipo: ''
  };
  actividades: any[] = [];

  constructor(
    public alertCtrl: AlertController,
    private dtiService: DtiService,
    public toast: ToastController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.hyperDatos = this.dtiService.getDtiDatos();
    this.getDti();
  }

  segmentChanged( event: any ) {
    const valorSeg = event.detail.value;
    this.tipo = valorSeg;
    console.log(valorSeg);
  }

  postDti() {
    this.datos.tipo = this.tipo;
    console.log(this.datos);
    this.dtiService.postDti(this.datos).subscribe((data: any) => {
      console.log(data);
    });
  }

  getDti() {
    this.dtiService.getDti().subscribe((data: any) => {
      console.log(data);
      this.actividades = data.dti;
    });
  }

  async delete(id: string) {
    this.dtiService.deleteDtiId(id).subscribe((data: any) => {
      console.log(data);
    });
    const toast = await this.toast.create({
      message: 'Actividad eliminada',
      duration: 1500
    });
    toast.present();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ChartModalPage
    });
    await modal.present();
  }
}
