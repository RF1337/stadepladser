import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import Lenis from 'lenis'; // Import Lenis from the Lenis package

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stadepladser';
  private lenis!: Lenis; // Use non-null assertion

  ngOnInit(): void {
    // Initialize Lenis with the correct configuration
    this.lenis = new Lenis({
      duration: 1.2, // Scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Optional easing function
      lerp: 0.1, // Smoothness factor between 0 and 1
      orientation: 'horizontal', // Scroll orientation
      smoothWheel: true, // Enables smooth scrolling for mouse wheel
      infinite: false // Disables infinite scrolling
    });

    // Start the smooth scroll loop
    this.lenis.start();

    // Request animation frame loop to update Lenis
    const update = (time: number) => { // Define time as a number
      this.lenis.raf(time);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }

  ngOnDestroy(): void {
    // Cleanup to avoid memory leaks
    if (this.lenis) {
      this.lenis.destroy();
    }
  }
}