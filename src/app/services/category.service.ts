import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categorySource = new Subject<string>(); // Subject for emitting category changes
  category$ = this.categorySource.asObservable(); // Observable for components to subscribe to

  // Method to emit a category change
  selectCategory(category: string) {
    this.categorySource.next(category);
  }
}