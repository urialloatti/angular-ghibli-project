import { Component, Input } from '@angular/core';

import { Movies } from 'src/app/interfaces/movies';
import { MoviesListService } from 'src/app/services/movies-list.service';

@Component({
  selector: 'main-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  @Input()
  selectedMovie: Movies | null = null

  constructor(private moviesListService: MoviesListService){}

}
