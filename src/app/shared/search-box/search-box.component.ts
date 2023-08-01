import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MoviesListService } from '../../services/movies-list.service';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit{

  @Output()
  onEnterPress: EventEmitter<string> = new EventEmitter();
  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();
  private debouncer: Subject<string> = new Subject;

  constructor (private moviesService: MoviesListService) {}


  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(350)
    )
    .subscribe(
      value => this.moviesService.searchListener(value)
    );

  }

  searchEmitter(term: string): void {
    this.moviesService.searchListener(term)
  }

  searchKeyUp(term: string): void {
    this.debouncer.next(term)
  }


}
