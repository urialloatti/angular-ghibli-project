import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MovieCardComponent } from './pages/components/movie-card/movie-card.component';
import { MoviesListPageComponent } from './pages/movies-list-page/movies-list-page.component';
import { SearchBoxComponent } from './pages/components/search-box/search-box.component';
import { TopBarComponent } from './pages/components/top-bar/top-bar.component';
import { SharedModule } from '../shared/shared.module';
import { SideBarComponent } from './pages/components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    MovieCardComponent,
    MoviesListPageComponent,
    SearchBoxComponent,
    TopBarComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }
