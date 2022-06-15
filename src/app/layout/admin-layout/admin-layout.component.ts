import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/Projects';
import { ProjrctsService } from 'src/app/services/projrcts.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  IProject!:IProject[] | any[]
  constructor(
    private iProjectService:ProjrctsService
  ) {
    this.ShowProject()
   }

  ngOnInit(): void {
  }
  ShowProject(){
    this.iProjectService.getIProject().subscribe(data=>{this.IProject =data})
  }
  onRemoveProduct(id:number){
    this.iProjectService.removeProject(id).subscribe(() =>{
      this.IProject = this.IProject.filter(item =>item.id !== id)
    });
  }
}
