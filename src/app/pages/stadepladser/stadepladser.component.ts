import { Component } from '@angular/core';
import { MapComponent } from "../../components/map/map.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { FormComponent } from "../../components/form/form.component";
import { BoothAvailabilityComponent } from "../../components/booth-availability/booth-availability.component";
import { CategoryFilterComponent } from "../../components/category-filter/category-filter.component";

@Component({
  selector: 'app-stadepladser',
  standalone: true,
  imports: [MapComponent, HeaderComponent, FooterComponent, FormComponent, BoothAvailabilityComponent, CategoryFilterComponent],
  templateUrl: './stadepladser.component.html',
  styleUrl: './stadepladser.component.css'
})
export class StadepladserComponent {

}