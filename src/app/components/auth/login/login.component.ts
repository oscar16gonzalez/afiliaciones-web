import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginUserModel } from '@modelLogin/*';

// import { UserService } from '../../shared/services/users/user.service';
import { UserService } from '@serviceUser/*';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLoginUser: FormGroup;
  userDataLogin = new LoginUserModel;
  responseData: any = "Users exist";

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.createFormLogin();
   }

   ngOnInit(): void {
    this.getUsers();
   }

   createFormLogin(){
    this.formLoginUser = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required]
    })
   }

   loginUser() {
    this.userService.login(this.userDataLogin).subscribe(
      data => {
        this.responseData = data;
        if (this.responseData.message === "Users exist") {
          this.responseData = this.responseData.message;
          this.router.navigate(['/membership']);
        } else {
          console.log("no existe");
          alert("user not exists");
        }
        this.formLoginUser.reset();
      }
    )
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
