import { Component, Input } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';
import { MoviesListService } from 'src/app/services/movies-list.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private moviesListService: MoviesListService) {}

  moviesList: Movies[] = this.moviesListService.movieList

  selectedMovie: Movies | null = null


  movieReciver(id:string): void {
    const movie = this.moviesListService.movieList.filter(movie => movie.id === id)
    if (movie.length === 0) {
      this.selectedMovie = null
    }
    this.selectedMovie = movie[0]
  }
}
