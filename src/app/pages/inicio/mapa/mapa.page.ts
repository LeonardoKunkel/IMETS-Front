import { environment } from 'src/environments/environment.prod';
import { MapboxService, Feature } from './../../../services/mapbox.service';
import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  mapa: Mapboxgl.Map;

  constructor( private mapbox: MapboxService ) { }

  ngOnInit() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-100.3932607, 20.584429], // starting position
      zoom: 15 // starting zoom
    });
    // Add zoom and rotation controls to the map.
    // map.addControl(new mapboxgl.NavigationControl());
    this.markerCreate(-100.3932607, 20.584429);
  }

  markerCreate(lng: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([lng, lat])
    .addTo(this.mapa);
    marker.on('drag', () => {
      console.log(marker.getLngLat());
    });
  }

}
