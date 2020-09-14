import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  post = {
    title:  ''
  };

  constructor(private http: HttpClient) {
    console.log('Contact component created');
   }

  ngOnInit(): void {
  }

  formSubmit(theForm: NgForm) {
   this.post.title = theForm.value.title;

   this.http.post('https://jsonplaceholder.typicode.com/posts', {
     userId: Math.random(),
     id: Math.random(),
     title: this.post.title,
     body: this.post.title
   }).subscribe(res => {
      console.log(res);
   }, error => {
     console.log('Error response');
   });
  }

}
