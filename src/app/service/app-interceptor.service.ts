import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor {

  constructor() { }


  handleError(error: HttpErrorResponse) {
    console.log('error occured');
    return throwError(error);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      Authorization: 'sudarshanshanbhag'
    });

    const clone = req.clone({
      headers
    });

    return next.handle(clone)
    .pipe(
      catchError(this.handleError)
    );
  }
}
