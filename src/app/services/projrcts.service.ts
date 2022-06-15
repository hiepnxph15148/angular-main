import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../models/Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjrctsService {
  API_URL = 'http://localhost:3001/IProjects'
  constructor( private http:HttpClient) { }
  getProject(id:number): Observable<IProject> {
    return this.http.get<IProject>(`${this.API_URL}/${id}?_expand=categoryProjects`)
  } 
  getIProject():Observable<IProject[]>{
    return this.http.get<IProject[]>(`${this.API_URL}?_expand=categoryProjects`)
  }
  removeProject(id:number){
    return this.http.delete<IProject>(`${this.API_URL}/${id}`)
  }
  addProject(product:any){
    return this.http.post<IProject>(this.API_URL,product)
  }
  updateProject( product: IProject):Observable<IProject> {
    return this.http.put<IProject>(`${this.API_URL}/${product.id}`,product)
  }
}

