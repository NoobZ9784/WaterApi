import { Component } from '@angular/core';
declare function reaMoreBtn():any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  readMore(){
    reaMoreBtn();
  }
}
