import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';


describe('PRUEBAS UNITARIAS DE RESGISTRO', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de existir el componente', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  });

  // it('Debe retornar formulario valido', () =>{
  //   const fixture = TestBed.createComponent(RegisterComponent);
  //   const app = fixture.componentInstance
  //   fixture.detectChanges();

  //   const nombre = app.formRegister.controls['nombre']
  //   const apellido = app.formRegister.controls['apellido']
  //   const email = app.formRegister.controls['correo']
  //   const celular = app.formRegister.controls['celular']
  //   const direccion = app.formRegister.controls['direccion']
  //   const password = app.formRegister.controls['password']
  //   const estado = app.formRegister.controls['estado']
  //   const roles = app.formRegister.controls['roles']

  //   nombre.setValue('Oscar')
  //   apellido.setValue('Gonzaleza')
  //   email.setValue('oscar.gonzalez@gmail.com')
  //   celular.setValue('123')
  //   direccion.setValue('123')
  //   password.setValue('123')
  //   estado.setValue('123')
  //   roles.setValue('123')
  //   expect(app.formRegister.invalid).toBeFalse();
  // });

  // it('Debe retornar formulario invalido', () =>{
  //   const fixture = TestBed.createComponent(RegisterComponent);
  //   const app = fixture.componentInstance
  //   fixture.detectChanges();

  //   const email = app.formLoginUser.controls['correo']
  //   email.setValue('oscar.gonzalez@gmail.com')
  //   expect(app.formLoginUser.invalid).toBeTrue();
  // });

  // it('Debe retornar formulario valido', () =>{
  //   const fixture = TestBed.createComponent(RegisterComponent);
  //   const app = fixture.componentInstance
  //   fixture.detectChanges();

  //   const email = app.formLoginUser.controls['correo']
  //   const pass = app.formLoginUser.controls['password']

  //   email.setValue('oscar.gonzalez@gmail.com')
  //   pass.setValue('123')
  //   expect(app.formLoginUser.invalid).toBeFalse();
  // });

  // it('Debe actualizar datos de usuario', () =>{
  //   const fixture = TestBed.createComponent(RegisterComponent);
  //   const app = fixture.componentInstance
  //   fixture.autoDetectChanges();

  //   const email = app.formLoginUser.controls['correo']
  //   const pass = app.formLoginUser.controls['password']

  //   email.setValue('oscar@gmail.com')
  //   pass.setValue('123')

  //   const btnElement = fixture.debugElement.query(By.css('button.btn'))
  //   btnElement.nativeElement.click()
  //   const message = 'Users exist';    
  //   expect(app.loginPageUser).toEqual(message)

  // }); 

  
});
