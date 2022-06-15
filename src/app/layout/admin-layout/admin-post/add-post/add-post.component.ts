import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: IPost={
    id:0,
    title: "",
    createAt:"",
    categoryPostId: 0,
    shortDesc:"",
    desc: "",
    image:"",
  }
  constructor(
    private postsService:PostService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.postsService.updatePost(this.post).subscribe(data => {
        setTimeout(() => {
          // redirect về product list
          this.router.navigateByUrl('/product');
        }, 2000)
      })
    }
    this.postsService.addPost(this.post).subscribe(data => {
      setTimeout(() => {
        // redirect về product list
        this.router.navigateByUrl('/admin');
      }, 2000)
    });
  }
}
