import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-popup',
  templateUrl: './map-popup.html',
  styleUrls: ['./map-popup.scss']
})
export class MapPopupComponent implements AfterViewInit {
  @Input() lat = 59.925628;
  @Input() lng = 30.340563;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const map = L.map(this.el.nativeElement.querySelector('#map'), {
      center: [this.lat, this.lng],
      zoom: 13,
      attributionControl: false,
      zoomControl: true,
      dragging: true,
      scrollWheelZoom: true,
      touchZoom: true,
      doubleClickZoom: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([this.lat, this.lng]).addTo(map);
  }
}
