import { Component, OnInit } from '@angular/core';
import { Movie, MoviesFilters } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';
import { CurrencyFormatPipe } from '../../pipes/currency-format.pipe';
import { Router } from '@angular/router';
import { MoviesFilterComponent } from './movies-filter/movies-filter.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule, TimeFormatPipe, MoviesFilterComponent, CurrencyFormatPipe],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})

export class MoviesComponent implements OnInit {
  protected movies: Movie[] = [];
  protected filteredMovies: Movie[] = [];
  protected titleFilterTxt: string = '';
  protected yearFilterTxt: string = '';

  constructor(private route: Router, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getMoviesList();
  }

  getMoviesList(): void {
    this.movieService.getMoviesList().subscribe(response => {
      this.movies = response;
      this.filteredMovies = this.movies;
    });
  }

  movieFilter(movie: Movie): boolean {
    return (this.filterTitle(movie) && this.filterYear(movie));
  }

  filterTitle(movie: Movie): boolean {
    if (!this.titleFilterTxt || movie.title.toLowerCase().includes(this.titleFilterTxt.toLowerCase())) {
      return true;
    }
    return false;
  }

  filterYear(movie: Movie): boolean {
    let year = movie.release_date.split('-')
    if ((!this.yearFilterTxt) || (this.yearFilterTxt.toString().length < 4) || (this.yearFilterTxt.toString().length >= 4 && year[0].includes(this.yearFilterTxt))) {
      return true;
    }
    return false;
  }

  filterSearch(filters: MoviesFilters): void {
    this.titleFilterTxt = filters.title;
    this.yearFilterTxt = filters.year;
  }

  navToMovieDetails(movieId: string) {
    this.route.navigate(['/movies', movieId]);
  }

}
