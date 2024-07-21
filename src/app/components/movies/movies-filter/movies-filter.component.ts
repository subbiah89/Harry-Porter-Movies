import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesFilters } from '../../../models/movie';

@Component({
  selector: 'app-movies-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './movies-filter.component.html',
  styleUrl: './movies-filter.component.css'
})
export class MoviesFilterComponent {

  protected titleFilter: string = '';
  protected yearFilter: string = '';

  @Output() filterInputValues = new EventEmitter<MoviesFilters>();


  filterInputs(): void {
    let filters = {
      title: this.titleFilter,
      year: this.yearFilter

    }
    this.filterInputValues.emit(filters);
  }

}
