import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
