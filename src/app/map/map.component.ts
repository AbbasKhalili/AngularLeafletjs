import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { newArray } from '@angular/compiler/src/util';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: L.map;
  myMarker: L.marker;
  popup = L.popup();


  tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 30,
    attribution: '',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
  });

  poly: number[][];

  company: any;

  constructor(private route: ActivatedRoute) {
    this.poly = newArray(0);
    this.company = { name: "", id: 0, cityId: 0 };
  }



  ngOnInit() {

    this.route.data
      .subscribe((data: { crisis: any }) => {
        this.company = data.crisis;
      });

    //this.company = this.route.snapshot.data.crisis;
  }


  ngAfterViewInit(): void {

    this.map = L.map('map').setView([35.69979085412715, 51.337995529174805], 17);
    this.tiles.addTo(this.map);

    this.map.on("click", e => {

      if (this.myMarker) {
        this.map.removeLayer(this.myMarker);
      }

      /*
      let myIcon = L.icon({
        iconUrl: 'my-icon.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: 'my-icon-shadow.png',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
      });
      this.myMarker = new L.marker([e.latlng.lat, e.latlng.lng], {icon: myIcon}).addTo(this.map); 
      */

      this.myMarker = new L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);

      this.addCircle(e.latlng.lat, e.latlng.lng)

      this.popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(this.map);



      this.poly.push([e.latlng.lat, e.latlng.lng]);



      //let polygons = L.polygon(this.poly, {color: 'red'}).addTo(this.map);
      //this.map.fitBounds(polygons.getBounds());


      var polyline = L.polyline(this.poly, { color: 'red' }).addTo(this.map);
      this.map.fitBounds(polyline.getBounds());
    });

  }

  addCircle(lat: number, lng: number) {
    L.circleMarker([lat, lng], { radius: 20 }).addTo(this.map);
  }
}
