import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { SearchResponse } from './models/search-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
    //return fetch('https://api.github.com/users');
    return this.http.get<User[]>('https://api.github.com/users');
  }

  searchUsers(searchTerm:string){
    const searchUrl = `https://api.github.com/search/users?q=${searchTerm}`;
    return this.http.get<SearchResponse>(searchUrl);
  }
}
