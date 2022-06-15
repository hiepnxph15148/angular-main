import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detai-blog',
  templateUrl: './detai-blog.component.html',
  styleUrls: ['./detai-blog.component.css']
})
export class DetaiBlogComponent implements OnInit {
  postDetail!: IPost |any
  constructor(
    private router: ActivatedRoute,
    private postService: PostService
  ) { 
    const id = this.router.snapshot.paramMap.get('id')!;
    // this.productDetail = mockData.find(item => item.id == +id)!;
    this.postService.getPosts(+id).subscribe(data => {
      this.postDetail = data
    })
  }

  ngOnInit(): void {
  }

}
