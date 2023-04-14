import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  currentPage = 0;
  images = [
    {
      title: 'outside',
      imgUrl: 'assets/bank1.jpg'
    },
    {
      title: 'inside',
      imgUrl: 'assets/bank2.jpg'
    },
    {
      title: 'worker',
      imgUrl: 'assets/bank3.jpg'
    }
  ]
}
