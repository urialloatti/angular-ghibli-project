import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router){}

  callUrl():string {
    return this.router.url
  }
  preventDefault(event: Event){
    event.preventDefault()
  }
}
