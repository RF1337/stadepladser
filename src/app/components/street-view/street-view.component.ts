import { Component, ElementRef, OnInit } from '@angular/core';
import { StreetViewService } from '../../services/street-view.service';

@Component({
  selector: 'app-street-view',
  standalone: true,
  imports: [],
  templateUrl: './street-view.component.html',
  styleUrl: './street-view.component.css'
})
export class StreetViewComponent implements OnInit {
  constructor(private streetViewService: StreetViewService, private el: ElementRef) {}

  ngOnInit(): void {
    // Initialize default Street View if needed, e.g., a default position
    this.streetViewService.initializeStreetView(this.el.nativeElement.querySelector('#street-view'), 55.0, 12.0, 0);
  }

  updateView(lat: number, lng: number, heading: number) {
    this.streetViewService.updateStreetViewPosition(lat, lng, heading);
  }
}