import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:3001'

  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post(`${this.API_URL}/login`,user)
  }

  register(user:any){
    return this.http.post(`${this.API_URL}/register`,user)
  }
}
