import { Component} from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: '<h1>Ooops!!! Requested page does not exist !!!</h1>',
  styleUrls: ['./pagenotfound.component.css']
})
export class PageNotFoundComponent {
  constructor() { }
}
