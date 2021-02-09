import { Router, ActivatedRoute } from '@angular/router';
import { InventarioService, Post } from './../../../../services/inventario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  post: Post = {
    _id: '',
    ubicacion: '',
    baja: 0,
    cambio: 0,
    cementados: 0,
    chuecos: 0,
    inspeccionar: 0,
    maquinar: 0,
    nuevos: 0,
    perdidas: 0,
    premium: 0,
    sinRevestimiento: 0,
    total: 0,
  };

  constructor(
    private inventario: InventarioService,
    private router: Router,
    private actiRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actiRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.inventario.getSpecsById(paramMap.get('id'))
        .subscribe((res: any) => {
          this.post = res.findSpecs;
          console.log(this.post);
        });
      }
    });
  }

  updateSpecs() {
    // console.log(this.post._id);
    this.inventario.updateSpecs(this.post._id, {
      ubicacion: this.post.ubicacion,
      premium: this.post.premium,
      baja: this.post.baja,
      cambio: this.post.cambio,
      cementados: this.post.cementados,
      chuecos: this.post.chuecos,
      inspeccionar: this.post.inspeccionar,
      maquinar: this.post.maquinar,
      nuevos: this.post.nuevos,
      perdidas: this.post.perdidas,
      sinRevestimiento: this.post.sinRevestimiento,
      total: this.post.total
    }).subscribe(res => {
      this.router.navigate(['/inicio/inventario']);
    });
  }

}
