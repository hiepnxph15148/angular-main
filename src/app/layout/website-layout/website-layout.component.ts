import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Post';
import { TUser } from 'src/app/models/User';
import { IProject } from 'src/app/models/Projects';
import { PostService } from 'src/app/services/post.service';
import { ProjrctsService } from 'src/app/services/projrcts.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.css']
})
export class WebsiteLayoutComponent implements OnInit {
  User!: TUser[];
  Post!: any[];
  Project! : any[];
  constructor( 
    private userServices:UserService,
    private postServices:PostService,
    private projectServices:ProjrctsService
    ) { 
   this.showUser()
   this.showPost()
   this.ShowProject()
  }

  ngOnInit(): void {
  }
  showUser(){
    this.userServices.getUser().subscribe(data=>{this.User = data})
  }
  showPost(){
    this.postServices.getPost().subscribe(data=> {this.Post = data})
  }
  ShowProject(){
    this.projectServices.getIProject().subscribe(data=>{this.Project =data})
  }
}
