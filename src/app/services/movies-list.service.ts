import { Injectable } from '@angular/core';
import { Movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {

  private List: Movies[] = [
    {
      title: `Howl's Moving Castle`,
      releaseYear: 2004,
      director: 'Hayao Miyazaki',
      durationMinutes: 119,
      imgSrc: 'https://i.pinimg.com/564x/7a/3f/52/7a3f5262919d65c6e7d5f323ddb412f0.jpg',
      MPARating: 'PG',
    },

    {
      title: `Spirited Away`,
      releaseYear: 2001,
      director: 'Hayao Miyazaki',
      durationMinutes: 125,
      imgSrc: 'https://i.pinimg.com/564x/8d/3f/01/8d3f01ea4b4db9affdbcdbe61ceaf56b.jpg',
      MPARating: 'PG',
    },

    {
      title: `My Neighbor Totoro`,
      releaseYear: 1988,
      director: 'Hayao Miyazaki',
      durationMinutes: 86,
      imgSrc: 'https://i.pinimg.com/564x/f7/3e/ca/f73eca98ae27d6ae174c707f44c610bb.jpg',
      MPARating: 'G',
    },
  ]
  constructor() { }
  get movieList(): Movies[] {
    return this.List
  }

}
