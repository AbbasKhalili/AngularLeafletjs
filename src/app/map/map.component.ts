import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  map : any;
  
  tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    this.tiles.addTo(this.map);
  }

  initMap(): void {
    this.map = L.map('map').setView([35.70, 51.35], 13);
    this.map.on('click', this.onMapClick);
  }

  popup = L.popup();

	onMapClick(e) : void{
    console.log(e);
    L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map)
		.bindPopup(e.latlng.toString()).openPopup();

		this.popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(this.map);
	}

}

