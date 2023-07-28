import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchBoxComponent } from './search-box/search-box.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    TopBarComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieCardComponent,
    TopBarComponent,
    SearchBoxComponent,
  ]
})
export class SharedModule { }
