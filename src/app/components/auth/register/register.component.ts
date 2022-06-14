import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

// import { UserModel } from '../../../models/user.model';
import { UserModel } from '@modelUser/user.model.ts';

// import { UserService } from 'src/app/services/user.service';
import { UserService } from '@serviceUser/*';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rolSelected = [
    { id: 1, name: "Super Administrador" },
    { id: 2, name: "Residente" },
    { id: 3, name: "Auxiliar Administrador" },
    { id: 4, name: "SGSST" },

  ]

  formRegister: FormGroup;
  user = new UserModel;


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.createFormRegister();
  }

  ngOnInit(): void { }

  createFormRegister() {
    this.formRegister = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      celular: ['', Validators.required],
      direccion: ['', Validators.required],
      password: ['', Validators.required],
      estado: [true],
      roles: ['', Validators.required]
    })
  }

  saveDataForm() {
    if (!this.formRegister.invalid) {
      this.userService.createUser(this.user).subscribe(
        data => {
          const response: any = data;
          if (response.message === "User created succesfully") {
            this.router.navigate(['/login']);
          } else {
            alert("User not created");
          }
          this.formRegister.reset();
        }
      )
    }
  }
}
