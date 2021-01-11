import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DtiService {

  url = 'http://localhost:3000/dti';

  constructor( private http: HttpClient ) { }

  getDtiDatos() {
    return this.http.get('/assets/data/dtiDatos.json');
  }

  postDti(form) {
    return this.http.post(`${this.url}/create`, form);
  }

  getDti() {
    return this.http.get(`${this.url}/`);
  }

  getDtiId(id: string, body) {
    return this.http.get(`${this.url}/${id}`, body);
  }

  deleteDtiId(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
