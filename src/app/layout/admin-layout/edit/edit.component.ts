import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/models/Projects';
import { ProjrctsService } from 'src/app/services/projrcts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  project!:IProject
  constructor(
    private projectServices: ProjrctsService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }
  id!: any
  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id']
    this.projectServices.getProject(this.id).subscribe((data) => this.project = data)
  }
  onUpdate(){
    this.projectServices.updateProject(this.project).subscribe(() => {
      this.router.navigate(['/admin'])
    })
  }
}
