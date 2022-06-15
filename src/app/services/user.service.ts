import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TUser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:3001/users'

  constructor(private http:HttpClient) { }
  getUser():Observable<TUser[]>{
    return this.http.get<TUser[]>(this.API_URL)
  }
}
