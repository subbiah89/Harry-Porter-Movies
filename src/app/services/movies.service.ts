import { Injectable } from '@angular/core';
import { Movie, MovieDetails } from '../models/movie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMoviesList(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/movies');
  }

  getMovieDetails(id:string): Observable<MovieDetails> {
    const url = '/movies/'+ id;
    return this.http.get<MovieDetails>(url);
  }


}
