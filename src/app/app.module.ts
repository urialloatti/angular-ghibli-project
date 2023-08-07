import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MainPageComponent,
    SideBarComponent,
    MoviePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
