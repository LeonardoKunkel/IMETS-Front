import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnexosService {

  url = 'http://localhost:3000/anexo';

  constructor( private http: HttpClient ) { }

  getA1() {
    return this.http.get(`${this.url}1`);
  }

  postA1(form) {
    return this.http.post(`${this.url}1`, form);
  }


}
