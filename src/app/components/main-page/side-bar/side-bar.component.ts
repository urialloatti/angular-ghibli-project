import { Component, Input } from '@angular/core';

import { MoviesListService } from '../../../services/movies-list.service';
import { Movies } from 'src/app/interfaces/movies';

@Component({
  selector: 'main-page-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  @Input()
  selectedMovie: Movies | null = null

  constructor(private moviesListService: MoviesListService){}

  durationString(duration: number): string {
    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;
    return `${hours}h ${minutes}m`;
  }

}
