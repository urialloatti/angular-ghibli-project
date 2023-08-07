import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './pages/log-in/log-in.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'movie/:id',
    component: MoviePageComponent
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
