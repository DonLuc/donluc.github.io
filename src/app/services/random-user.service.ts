import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomUser } from '../shared/models/';

@Injectable({providedIn: 'root'})
export class RandomUserService {
  constructor(private httpClient: HttpClient) { }
  getRandomUser(): Observable<RandomUser> {
    return this.httpClient.get<RandomUser>('https://randomuser.me/api/');
  }  
}

