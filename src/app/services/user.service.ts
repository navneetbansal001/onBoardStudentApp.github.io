import { User } from 'src/app/models/User';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [];

  constructor(private httpClient : HttpClient) { }

  register (user : User){
   return this.httpClient.post(`${environment.apiUrl}/users/reg`,user);
  }

  getAllUsers() {
   return this.httpClient.get<User[]>(`${environment.apiUrl}/users`);
  }
}
