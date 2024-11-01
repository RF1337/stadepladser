import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { booths } from '../../configs/booth-config';
import { BoothComponent } from "../booth/booth.component";
import { CommonModule } from '@angular/common';
import { CategoryFilterComponent } from "../category-filter/category-filter.component";
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [BoothComponent, CommonModule, CategoryFilterComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  booths = booths; // Original booths data
  filteredBooths = booths; // This will hold the filtered booths
  selectedCategory: string | null = null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    // Subscribe to the category changes from CategoryService
    this.categoryService.category$.subscribe((category: string) => {
      console.log("Category received in MapComponent:", category); // Confirm reception of event
      this.filterByCategory(category);
    });
  }

  filterByCategory(category: string) {
    console.log('Filtering by category:', category); // Confirm this method is reached
    if (this.selectedCategory === category) {
      console.log('Resetting filter');
      this.filteredBooths = this.booths;
      this.selectedCategory = null;
    } else {
      this.filteredBooths = this.booths.filter(booth => booth.category !== category);
      this.selectedCategory = category;
    }
    console.log('Filtered booths:', this.filteredBooths);
  }
}