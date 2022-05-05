import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { SearchResponse } from './models/search-response';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
    //return fetch('https://api.github.com/users');
    return this.http.get<User[]>('https://api.github.com/users');
  }

  searchUsers(searchTerm:string): Observable<User[]> {
    const searchUrl = `https://api.github.com/search/users?q=${searchTerm}`;
    return this.http
              .get<SearchResponse>(searchUrl)
              .pipe(
                map((result: SearchResponse) => result.items),
                catchError(err => of([]))         
              )
  }
}

// Observable(SearchResponse) => Observable(User[])
