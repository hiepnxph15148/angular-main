import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {
  post!: IPost[]
  constructor(
    private postService:PostService
  ) { 
    this.ShowPost()
  }

  ngOnInit(): void {
  }
  ShowPost(){
    this.postService.getPost().subscribe(data=>{this.post =data})
  }
  onRemoveProduct(id:number){
    this.postService.removePost(id).subscribe(() =>{
      this.post = this.post.filter(item =>item.id !== id)
    });
  }
}
