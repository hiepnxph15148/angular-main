import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/models/Projects';
import { ProjrctsService } from 'src/app/services/projrcts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  projectDetail!: IProject | any
  constructor(
    private router: ActivatedRoute,
    private projectService: ProjrctsService
  ) {
    const id = this.router.snapshot.paramMap.get('id')!;
    // this.productDetail = mockData.find(item => item.id == +id)!;
    this.projectService.getProject(+id).subscribe(data => {
      this.projectDetail = data
    })
   }

  ngOnInit(): void {
  }

}
