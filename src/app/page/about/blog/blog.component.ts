import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  Post!: IPost[] |any ;
  constructor(
    private postServices:PostService,
  ) {
    this.showPost()
   }

  ngOnInit(): void {
  }
  showPost(){
    this.postServices.getPost().subscribe(data=> {this.Post = data})
  }
}
