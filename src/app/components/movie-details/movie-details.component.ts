import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../models/movie';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';
import { CurrencyFormatPipe } from '../../pipes/currency-format.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [TimeFormatPipe, CurrencyFormatPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  constructor(private route:ActivatedRoute, private router: Router, private movieService: MoviesService ) { }

  protected movieId: string = '';
  protected movieDetails:MovieDetails = {
    id: '',
    title: '',
    duration: '',
    budget: '',
    release_date: '',
    box_office: '',
    cinematographers: [],
    poster: '',
    producers: [],
    summary: ''
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id) {
      this.movieId = id;
    this.getMovieDetails();
    } else {
      console.error('ID Not found');
    }
  }

  getMovieDetails(): void {
    this.movieService.getMovieDetails(this.movieId).subscribe(response => {
      this.movieDetails = response;
    })
  }

  namesFormat(nameList: string[]): string {
    return nameList.join(', ');
  } 
  
  navToMovie() {
    this.router.navigate(['/movies']);
  }
}
