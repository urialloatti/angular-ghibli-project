import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid'
import { Movies } from '../interfaces/movies';
import { BehaviorSubject, Observable } from 'rxjs';

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
      id: uuid(),
      synopsis: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle."
    },

    {
      title: `My Neighbor Totoro`,
      releaseYear: 1988,
      director: 'Hayao Miyazaki',
      durationMinutes: 86,
      imgSrc: 'https://i.pinimg.com/564x/f7/3e/ca/f73eca98ae27d6ae174c707f44c610bb.jpg',
      MPARating: 'G',
      id: uuid(),
      synopsis: "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby."
    },

    {
      title: `Princess Mononoke`,
      releaseYear: 1997,
      director: 'Hayao Miyazaki',
      durationMinutes: 134,
      imgSrc: 'https://i.pinimg.com/736x/9f/dc/2d/9fdc2da3e286acb2c1ad7734ff11fc59.jpg',
      MPARating: 'PG-13',
      id: uuid(),
      synopsis: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime."
    },
    {
      title: `Spirited Away`,
      releaseYear: 2001,
      director: 'Hayao Miyazaki',
      durationMinutes: 125,
      imgSrc: 'https://i.pinimg.com/564x/8d/3f/01/8d3f01ea4b4db9affdbcdbe61ceaf56b.jpg',
      MPARating: 'PG',
      id: uuid(),
      synopsis: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts."
    },

    {
      title: `The Secret World of Arrietty`,
      releaseYear: 2010,
      director: 'Hiromasa Yonebayashi',
      durationMinutes: 94,
      imgSrc: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx7711-IDDzqp6d3tQz.jpg',
      MPARating: 'G',
      id: uuid(),
      synopsis: "The Clock family are four-inch-tall people who live anonymously in another family's residence, borrowing simple items to make their home. Life changes for the Clocks when their teenage daughter Arrietty is discovered."
    },
  ]

  private searchEmmited: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }


  get movieList(): Movies[] {
    return this.List.sort((a, b) => a.releaseYear - b.releaseYear);
  }

  emitListener(): Observable<string> {
    return this.searchEmmited.asObservable();
  }

  searchListener(term:string): void {
    this.searchEmmited.next(term)
  }
}
