import { Component, OnInit } from '@angular/core';
import {RandomUserService} from './services/random-user.service';
import { RandomUser, Result } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private generatedUser: RandomUser;
  userResult: Result;
  
  constructor(private randomUserService: RandomUserService) {
  }

  ngOnInit(): void {
    this.randomUserService.getRandomUser().subscribe((user) => {
      this.generatedUser = user;
      this.userResult = this.generatedUser.results[0];
    }, (error) => {
      alert("Error in generating random user!")
    });
  }
}
