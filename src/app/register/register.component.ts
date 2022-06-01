import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TUser } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: TUser = {
    name: "",
    email: "",
    password: ""
  }

  constructor(
    private userService: UserService,
    private router: Router  
    
    ) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.userService.register(this.user).subscribe(user => {
      console.log(user);
      setTimeout(() => {
        this.router.navigateByUrl('/products')
      }, 2000)
    })
    console.log(this.user);
  }
}
