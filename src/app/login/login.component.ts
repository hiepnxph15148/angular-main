import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TUser } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: TUser = {
    name: "",
    email: "",
    password: ""
  }
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.register(this.user).subscribe(user => {
      console.log(user);
      setTimeout(() => {
        this.router.navigateByUrl('/product')
      }, 2000)
    })
    console.log(this.user);
  }

}
