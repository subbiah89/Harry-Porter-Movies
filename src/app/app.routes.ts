import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const routes: Routes = [
    {path:'', component: MoviesComponent},
    {path:'movies', component: MoviesComponent},
    {path:'movies/:id', component: MovieDetailsComponent},
    { path: '**', component: MoviesComponent }
];
