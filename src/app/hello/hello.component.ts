import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [
  ]
})
export class HelloComponent implements OnInit {
  @Input () data!:string
  constructor() { }

  ngOnInit(): void {
  }

}
