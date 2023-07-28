import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './components/log-in/log-in.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SideBarComponent } from './components/main-page/side-bar/side-bar.component';

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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
