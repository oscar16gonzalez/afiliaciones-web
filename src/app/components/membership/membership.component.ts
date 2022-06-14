import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MembershipModel } from '@membershipModel/*';
import { MembershipService } from '../shared/services/memberships/membership.service';



@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  formMembership: FormGroup;
  membership = new MembershipModel;

  selectedGender = [
    { id: 1, name: 'Masculino' },
    { id: 2, name: 'Femenino' },
  ]

  selectCargo = [
    { id: 1, name: 'Ayudante' },
    { id: 2, name: 'Ayudante Practico' },
    { id: 3, name: 'Oficial' },
    { id: 4, name: 'Masestro' },
    { id: 5, name: 'Soldador' },
  ]


  constructor(private formBuilder: FormBuilder, private membership_service: MembershipService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.formMembership = this.formBuilder.group({
      //DATOS BASICOS
      cedula: ['', Validators.required],
      apellido: ['', Validators.required],
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      //DATOS DE NOTIFICACION
      direccion: ['', Validators.required],
      telefono: [''],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      celular: ['', Validators.required],
      nombre_emergencia: ['', Validators.required],
      celular_emergencia: ['', Validators.required],
      //DATOS DE TRABAJADOR
      fecha_ingreso: ['', Validators.required],
      rut: ['', Validators.required],
      curso_alturas: ['', Validators.required],
      examen_ingreso: ['', Validators.required],
      cargo: ['', Validators.required],
      salario: ['', Validators.required],
      //DATOS BANCARIOS
      entidad_bancaria: [''],
      numero_cuenta: [''],
      //DATOS AFILIACION
      eps: [''],
      arl: [''],
      fondo_pensiones: [''],
      caja_compensacion: [''],

      estado: ['pendiente_examen_medico'],

      // contratista: ['', Validators.required],
      // contrato: ['', Validators.required],
      // departamento: ['', Validators.required],
      // municipio: ['', Validators.required],

    });
  }

  findUserCreated() {
    this.membership_service.getMembership().subscribe(
      (data) => {
        console.log(data);
      })
  }

  findByCedula() {
    this.membership_service.getUserFind(this.membership.cedula).subscribe(
      (data: any) => {
        console.log(data);
        this.membership.apellido = data[0].apellido
        this.membership.nombre = data[0].nombre
        this.membership.celular = data[0].celular
        // this.membership.genero = data[0].genero
        // this.membership.fecha_ingreso = data[0].fecha_ingreso
      }
    )
  }

  createMembership() {
    console.log(this.formMembership.value);
    if (this.formMembership.invalid) {
      Object.values(this.formMembership.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.membership_service.createMembership(this.formMembership.value).subscribe(
        (data) => {
          console.log("USUARIO CREADO CON EXITO ", data);
          alert("ASPIRANTE CREADO CON EXITO");
        }
      );
    }
  }

}
