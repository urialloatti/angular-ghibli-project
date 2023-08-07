import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MinutesToStringPipe } from './pipes/minutes-to-string.pipe';



@NgModule({
  declarations: [
    MovieCardComponent,
    TopBarComponent,
    SearchBoxComponent,
    MinutesToStringPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieCardComponent,
    TopBarComponent,
    SearchBoxComponent,
    MinutesToStringPipe,
  ]
})
export class SharedModule { }
