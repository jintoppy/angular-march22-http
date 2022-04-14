import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './models/user';
import { SearchResponse } from './models/search-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-client';
  users:User[] = []
  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      })
  }

  onSearch(searchText: string){
    console.log(searchText);
    this.userService.searchUsers(searchText)
      .subscribe((users: User[]) => {
        console.log(users);
        this.users = users;
      }, (err: any) => {
        console.log(err);
      });
  }
}
