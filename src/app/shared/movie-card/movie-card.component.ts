import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input()
  currentMovie!: Movies;

  @Output()
  onSelectedMovie: EventEmitter<string> = new EventEmitter();

  idEmitter(id: string): void {
    this.onSelectedMovie.emit(id)
  }

}
