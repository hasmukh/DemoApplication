import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dragulaService: DragulaService) {
    /* dragulaService.setOptions('boxes', {
      moves: function (el, container, handle) {
        return handle.className === 'handle';
      }
    }); */
  }

  ngOnInit() {
  }

}
