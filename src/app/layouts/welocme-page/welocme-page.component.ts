import { Component } from '@angular/core';

@Component({
  selector: 'app-welocme-page',
  templateUrl: './welocme-page.component.html',
  styleUrls: ['./welocme-page.component.css']
})
export class WelocmePageComponent {


  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

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
