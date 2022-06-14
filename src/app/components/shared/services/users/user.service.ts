import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginUserModel } from '@modelLogin/*';
import { UserModel } from '@modelUser/*';
// import { UserModel } from '../../../models/user.model';
// import { LoginUserModel } from '../../../models/loginUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  
  createUser(userRegister: UserModel) {
    return this.http.post('http://localhost:4000/auth/signup', userRegister);
  }

  getUsers() {
    return this.http.get('http://localhost:4000/users');
  }

  login(loginUser: LoginUserModel) {
    return this.http.post('http://localhost:4000/auth/signin', loginUser);
  }
}
