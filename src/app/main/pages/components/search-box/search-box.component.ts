import { Component, EventEmitter, Output, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Subject, debounceTime } from 'rxjs';
import { Movies } from 'src/app/interfaces/movies';
import { MoviesListService } from 'src/app/services/movies-list.service';

@Component({
  selector: 'main-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit{

  @Output()
  onEnterPress: EventEmitter<string> = new EventEmitter();
  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();
  @ViewChild('searchInput') inputName!: ElementRef;
  private debouncer: Subject<string> = new Subject;
  currentSearch: Movies[] = [];
  toggable:boolean = false;

  constructor (private moviesService: MoviesListService ) {}


  ngOnInit(): void {
    this.debouncerSuscribe();
  }

  searchEmitter(): void {
    this.moviesService.searchListener(this.inputName.nativeElement.value);
    this.inputName.nativeElement.value = '';
    this.debouncer.next(this.inputName.nativeElement.value);
  }

  searchKeyUp(term: string): void {
    this.debouncer.next(term)
  }

  debouncerSuscribe():void {
    this.debouncer
    .pipe(
      debounceTime(350)
    )
    .subscribe(
      value => {
        this.currentSearch = this.moviesService.movieList.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()));
        this.toggable = true;
        if (this.currentSearch.length == this.moviesService.movieList.length) {
          this.currentSearch = [];
          this.toggable = false;
        }
      }
    );
  }

}
