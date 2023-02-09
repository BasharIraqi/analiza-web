import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-mode',
  templateUrl: './page-mode.component.html',
  styleUrls: ['./page-mode.component.scss']
})
export class PageModeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changePageColor(color){
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }

}
