import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  post = [
    {
      title: 'Personal Needs',
      username: '@personal',
      content: 'I think you need a new car!',
      imgUrl: 'assets/mustang.jpeg',
      profile: 'assets/profile.jpg',
      margin: 'margin-left: 0vw'
    },
    {
      title: 'Business Needs',
      username: '@yourbusiness',
      content: 'How about a headquarter?',
      imgUrl: 'assets/office.jpg',
      profile: 'assets/profile.jpg',
      margin: 'margin-left: 10vw'
    }
  ]
}
