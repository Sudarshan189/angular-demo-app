import { PostsService } from './../../service/posts.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: object = [];

  // accesser injecting services
  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postService.getAllPosts().subscribe(
      (data) => {
        this.posts = data;
      }, (error) => {
        console.log('error occured', error);
      }
    );
    console.log('Posts called');
  }


}
