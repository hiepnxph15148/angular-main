import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/Projects';
import { ProjrctsService } from 'src/app/services/projrcts.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  Project! : IProject[] | any;

  constructor(
    private projectServices:ProjrctsService
  ) { 
    this.ShowProject()
  }

  ngOnInit(): void {
  }
  ShowProject(){
    this.projectServices.getIProject().subscribe(data=>{this.Project =data})
  }
}
