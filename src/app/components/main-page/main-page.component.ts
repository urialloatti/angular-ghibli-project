import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';
import { MoviesListService } from 'src/app/services/movies-list.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  // list: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  constructor(private moviesList: MoviesListService) {}

  list: Movies[] = this.moviesList.movieList
}
