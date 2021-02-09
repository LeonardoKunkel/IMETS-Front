import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface Post {
  _id?: string;
  ubicacion: string;
  baja: number;
  cambio: number;
  cementados: number;
  chuecos: number;
  inspeccionar: number;
  maquinar: number;
  nuevos: number;
  perdidas: number;
  premium: number;
  sinRevestimiento: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  url = 'http://localhost:3000/inv';
  urlSpecs = 'http://localhost:3000/specs';

  constructor( private http: HttpClient ) { }

  getInventario() {
    return this.http.get(`${this.url}`);
  }

  getSpecs() {
    return this.http.get(`${this.urlSpecs}`);
  }

  getSpecsById(id: string) {
    return this.http.get(`${this.urlSpecs}/${id}`);
  }

  updateSpecs(id: string, post: Post) {
    return this.http.put(`${this.urlSpecs}/${id}`, post);
  }






  createPrueba(title: string, description: string) {
    return this.http.post(`${this.url}`, {
      title, description
    });
  }

  getPruebaById(id: string) {
    return this.http.get<Post>(`${this.urlSpecs}/${id}`);
  }

  updatePrueba(id: string, post: Post) {
    return this.http.put(`${this.urlSpecs}/${id}`, post);
  }

  deletePruebaById(id: string) {
    return this.http.delete(`${this.urlSpecs}/${id}`);
  }





  getSpecsId(id: string) {
    return this.http.get(`${this.urlSpecs}/${id}`);
  }

  postInventario(form) {
    return this.http.post(`${this.url}/create`, form);
  }

  filtroDiametro( param, type ) {
    console.log(param);
    return this.http.get(`${this.url}`).pipe(
      map((resp: any) => {
        if (type === 'diametro') {
          return resp.inv.filter(item => param === item.diametro);
        }
        else if (type === 'grado') {
          return resp.inv.filter(item => param === item.grado);
        }
        else if (type === 'libraje') {
          return resp.inv.filter(item => param === item.libraje);
        }
        else if (type === 'conexP') {
          return resp.inv.filter(item => param === item.conexP);
        }
      })
    );
  }

}
