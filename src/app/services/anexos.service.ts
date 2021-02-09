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

  getA3() {
    return this.http.get(`${this.url}3`);
  }

  postA3(form) {
    return this.http.post(`${this.url}3`, form);
  }

  getA4() {
    return this.http.get(`${this.url}4`);
  }

  postA4(form) {
    return this.http.post(`${this.url}4`, form);
  }

  getA5() {
    return this.http.get(`${this.url}5`);
  }

  postA5(form) {
    return this.http.post(`${this.url}5`, form);
  }

  getA6() {
    return this.http.get(`${this.url}6`);
  }

  postA6(form) {
    return this.http.post(`${this.url}6`, form);
  }

}
