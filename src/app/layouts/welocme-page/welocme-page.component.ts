import { Component } from '@angular/core';

@Component({
  selector: 'app-welocme-page',
  templateUrl: './welocme-page.component.html',
  styleUrls: ['./welocme-page.component.css']
})
export class WelocmePageComponent {

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
