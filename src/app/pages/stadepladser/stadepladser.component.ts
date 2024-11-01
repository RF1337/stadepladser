import { Component } from '@angular/core';
import { MapComponent } from "../../components/map/map.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { FormComponent } from "../../components/form/form.component";
import { BoothAvailabilityComponent } from "../../components/booth-availability/booth-availability.component";
import { CategoryFilterComponent } from "../../components/category-filter/category-filter.component";
import { BoothComponent } from "../../components/booth/booth.component";
import { CommonModule } from '@angular/common';
import { StreetViewService } from '../../services/street-view.service';
import { StreetViewComponent } from "../../components/street-view/street-view.component";

@Component({
  selector: 'app-stadepladser',
  standalone: true,
  imports: [MapComponent, HeaderComponent, FooterComponent, FormComponent, BoothAvailabilityComponent, CategoryFilterComponent, BoothComponent, CommonModule, StreetViewComponent],
  templateUrl: './stadepladser.component.html',
  styleUrl: './stadepladser.component.css'
})
export class StadepladserComponent {
  showForm = false;
  selectedBooth: { lat: number; lng: number; heading: number } | null = null;

  constructor(private streetViewService: StreetViewService) {}

  // Update the Street View position based on the booth clicked
  updateStreetView(lat: number, lng: number, heading: number): void {
    this.streetViewService.updateStreetViewPosition(lat, lng, heading);
    this.selectedBooth = { lat, lng, heading }; // Save selected booth for the form
    this.showForm = true; // Show the form
  }
}