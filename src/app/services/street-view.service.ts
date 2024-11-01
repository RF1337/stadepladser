import { Injectable } from '@angular/core';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class StreetViewService {
  private panorama: any;

  initializeStreetView(container: HTMLElement, lat: number, lng: number, heading: number) {
    this.panorama = new google.maps.StreetViewPanorama(container, {
      position: { lat, lng },
      pov: { heading, pitch: 0 },
      zoom: 1
    });
  }

  updateStreetViewPosition(lat: number, lng: number, heading: number) {
    if (this.panorama) {
      this.panorama.setPosition({ lat, lng });
      this.panorama.setPov({ heading, pitch: 0 });
    }
  }
}