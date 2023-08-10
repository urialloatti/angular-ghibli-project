import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinutesToStringPipe } from './pipes/minutes-to-string.pipe';
import { Error404Component } from './pages/error404/error404.component';



@NgModule({
  declarations: [
    MinutesToStringPipe,
    Error404Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinutesToStringPipe,
  ]
})
export class SharedModule { }
