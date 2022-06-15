import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/models/Projects';
import { ProjrctsService } from 'src/app/services/projrcts.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  project : IProject={
    id:0,
    name: "",
    image: "",
    createAt: "",
    categoryProjectId:0,
    shortDesc: "",
    desc: ""
  }
  constructor(
    private projrctsService:ProjrctsService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
  const id = +this.route.snapshot.paramMap.get('id')!;
  if (id) {
    this.projrctsService.updateProject(this.project).subscribe(data => {
      setTimeout(() => {
        // redirect về product list
        this.router.navigateByUrl('/product');
      }, 2000)
    })
  }
  this.projrctsService.addProject(this.project).subscribe(data => {
    setTimeout(() => {
      // redirect về product list
      this.router.navigateByUrl('/admin');
    }, 2000)
  });
}
}
