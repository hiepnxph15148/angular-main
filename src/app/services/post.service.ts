import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPost } from "../models/Post"
@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL = 'http://localhost:3001/posts'

  constructor(private http:HttpClient) { }

  // getPost():Observable<IPost[]>{
  //   return this.http.get<IPost[]>(this.API_URL)
  // }
  getPosts(id:number): Observable<IPost> {
    return this.http.get<IPost>(`${this.API_URL}/${id}?_expand=categoryPost`)
  } 
  getPost(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.API_URL}?_expand=categoryPost`)
  }
  removePost(id:number){
    return this.http.delete<IPost>(`${this.API_URL}/${id}`)
  }
  updatePost( product: IPost):Observable<IPost> {
    return this.http.put<IPost>(`${this.API_URL}/${product.id}`,product)
  }
  addPost(product:any){
    return this.http.post<IPost>(this.API_URL,product)
  }
}
