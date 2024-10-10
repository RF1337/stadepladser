import { Component } from '@angular/core';
import { BoothAvailabilityComponent } from "../booth-availability/booth-availability.component";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [BoothAvailabilityComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

}
