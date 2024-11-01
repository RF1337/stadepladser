import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-availability-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './availability-popup.component.html',
  styleUrl: './availability-popup.component.css'
})
export class AvailabilityPopupComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() example!: string;
  @Input() visible!: boolean; // Visibility now completely controlled by the parent component

  closePopup() {
    this.visible = false;
  }
}