import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  
  url ="http://localhost:3000/restaurants";
  //url="https://jsonmock.hackerrank.com/datetime";
  constructor(private _http:HttpClient) { }
  getList():Observable<any>{
    return this._http.get(this.url)
    .pipe(
      catchError(this.handler)
    );
  }
  handler(error:HttpErrorResponse){
    return throwError(error.message)
  }
}
