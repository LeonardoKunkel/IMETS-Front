import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

// import { GeoJson } from './MapaPage'

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  constructor( private http: HttpClient ) { }

}
