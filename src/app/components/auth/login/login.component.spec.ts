import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de existir el componente', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  });

  it('Debe retornar formulario invalido', () =>{
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges();

    const email = app.formLoginUser.controls['correo']
    email.setValue('oscar.gonzalez@gmail.com')
    expect(app.formLoginUser.invalid).toBeTrue();
  });

  it('Debe retornar formulario valido', () =>{
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges();

    const email = app.formLoginUser.controls['correo']
    const pass = app.formLoginUser.controls['password']

    email.setValue('oscar.gonzalez@gmail.com')
    pass.setValue('123')
    expect(app.formLoginUser.invalid).toBeFalse();
  });



  
});
