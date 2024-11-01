import { Component, Output, EventEmitter } from '@angular/core';
import { categories } from '../../configs/categories-config';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent {
  categories = categories;

  constructor(private categoryService: CategoryService) {}

  selectCategory(category: string) {
    console.log('Category selected in CategoryFilterComponent:', category); // Confirm selection
    this.categoryService.selectCategory(category); // Emit the category through the service
  }
}