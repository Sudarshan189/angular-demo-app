import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';

import { Post } from './../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  /// Specify type of body
  getAllPosts(): Observable<Post[]> {
    const headers = new HttpHeaders({
      name: 'Sudarshan'
    });

    const params = new HttpParams().append('age', '100').append('height', '189');

    return this.http.get<Post[]>('https://jsonplaceholder.typggicode.com/posts', {headers, params})
      .pipe(
        retry(3),
        //catchError(this.handleErrpr)
      );
  }

  handleErrpr(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }
}
