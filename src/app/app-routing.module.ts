import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListPageComponent } from './main/pages/movies-list-page/movies-list-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { Error404Component } from './shared/pages/error404/error404.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('src/app/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
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
