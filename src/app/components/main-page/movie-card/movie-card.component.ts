import { Component, Input } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';

@Component({
  selector: 'main-page-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input()
  currentMovie!: Movies;

  durationString(duration: number): string {
    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;
    return `${hours}h ${minutes}m`;
  }

}
