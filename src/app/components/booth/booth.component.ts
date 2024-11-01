import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booth.component.html',
  styleUrl: './booth.component.css'
})
export class BoothComponent {
  // Website map coords
  @Input() id!: number;
  @Input() x!: number;
  @Input() y!: number;
  @Input() status!: string;
  @Input() category!: string;
}