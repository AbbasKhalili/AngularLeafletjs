import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { newArray } from '@angular/compiler/src/util';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map : L.map;
  myMarker : L.marker;
  popup = L.popup();
  

  tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 30,
		attribution: '',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	});

  poly : number[][];

  constructor() {
    this.poly = newArray(0);
   }

  ngOnInit(){

  }
   

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([35.69979085412715, 51.337995529174805], 17);
    this.tiles.addTo(this.map);    

    this.map.on("click", e => {
      
      if (this.myMarker) { 
        this.map.removeLayer(this.myMarker); 
      }   
      this.myMarker = new L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map); 

      this.addCircle(e.latlng.lat, e.latlng.lng)

      this.popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
      .openOn(this.map);
      
      debugger;
      
      this.poly.push([e.latlng.lat, e.latlng.lng]);
      
      

      //let polygons = L.polygon(this.poly, {color: 'red'}).addTo(this.map);
      //this.map.fitBounds(polygons.getBounds());


      var polyline = L.polyline(this.poly, {color: 'red'}).addTo(this.map);
      this.map.fitBounds(polyline.getBounds());
    });

  }
 
  addCircle(lat: number, lng : number){
    L.circleMarker([lat , lng],{ radius: 20}).addTo(this.map);
  }
}
