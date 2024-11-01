import { Component } from '@angular/core';
import { availabilityInfo } from '../../configs/availability-info';
import { AvailabilityPopupComponent } from '../availability-popup/availability-popup.component';

@Component({
  selector: 'app-booth-availability',
  standalone: true,
  imports: [AvailabilityPopupComponent],
  templateUrl: './booth-availability.component.html',
  styleUrl: './booth-availability.component.css'
})
export class BoothAvailabilityComponent {
  popupVisible: boolean = false;
  popupData = { title: '', description: '', example: '' };

  showPopup(status: string) {
    const info = (availabilityInfo as any)[status];
    this.popupData = {
      title: info.title,
      description: info.description,
      example: info.example
    };
    this.popupVisible = true;
  }
  

  closePopup() {
    this.popupVisible = false;
  }
}