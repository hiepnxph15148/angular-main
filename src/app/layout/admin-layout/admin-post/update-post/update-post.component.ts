import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  post!:IPost
  constructor(
    private postService:PostService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }
  id!: any

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id']
    this.postService.getPosts(this.id).subscribe((data) => this.post = data)
  }
  onUpdate(){
    this.postService.updatePost(this.post).subscribe(() => {
      this.router.navigate(['/admin'])
    })
  }

}
