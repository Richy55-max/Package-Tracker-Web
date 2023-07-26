import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: any;

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat:  6.4503024, lng: 2.3468195 },
      zoom: 8,
    });
  }
}
