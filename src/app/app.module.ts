import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchBarComponent } from './components/top-bar/search-bar/search-bar.component';
import { SideBarComponent } from './components/main-page/side-bar/side-bar.component';
import { MovieCardComponent } from './components/main-page/movie-card/movie-card.component';


@NgModule({
  declarations: [
    AppComponent,

    LogInComponent,
    MainPageComponent,
    TopBarComponent,
    SearchBarComponent,
    SideBarComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
