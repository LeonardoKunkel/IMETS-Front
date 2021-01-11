import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  url = 'http://localhost:3000/inv';

  constructor( private http: HttpClient ) { }

  getInventario() {
    return this.http.get(`${this.url}`);
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
