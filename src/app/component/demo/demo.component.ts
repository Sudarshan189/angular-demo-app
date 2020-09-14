import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  firstName = 'Sudarshan';
  lastName = 'Shanbhag';
  city = 'Kumta';
  status: boolean;
  posts: object[];


  constructor() {
    console.log('Home component created');
    this.getUserStatus();

    this.posts = [
      {title: 'Post 1'},
      {title: 'Post 3'},
      {title: 'Post 4'},
      {title: 'Post 5'}
    ];
  }

  ngOnInit() {

  }

  displayFirstName() {
    return this.firstName;
  }

  getUserStatus() {
    this.status = !this.status;
  }

  greetUser() {
    console.log('Hi');
  }

}
