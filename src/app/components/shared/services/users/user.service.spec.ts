import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { UserService } from './user.service';

describe('Pruebas UserService', () => {
  let httpClientSpy: { post: jasmine.Spy }
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    // service = TestBed.inject(UserService);
    service = new UserService(httpClientSpy as any);
  });

  it('Debe crearse el servicio correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('Debe de retornar token de sesion de usuario ( Login correcto )', (done: DoneFn) => {
    const mockUserCredentials = {
      correo: "oscar@gmail.com",
      password: "1233"
    }

    const mockResultLogin = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTMwYWEzNGRiYzNiN2U1ZWI1M2NlNiIsImlhdCI6MTY1NDg1MjI3MH0.2ecpOYLkPUyjDCgSJmQeUDNmm7IeAgLCLfkp6WLdpHY",
      message: "Users exist"
    }

    httpClientSpy.post.and.returnValue(of(mockResultLogin))
    const data = {correo: mockUserCredentials.correo, password: mockUserCredentials.password } = mockUserCredentials

    service.login(data).subscribe(resultado =>{
      expect(resultado).toEqual(mockResultLogin)
      done()
    })
  })

  it('Debe de retornar mensaje de error ( Login incorrecto )', (done: DoneFn) => {
    const mockUserCredentials = {
      correo: "oscar@gmail.com",
      password: ""
    }

    const mockResultLogin = {
      token: "",
      message: "Invalid password"
    }

    httpClientSpy.post.and.returnValue(of(mockResultLogin))
    const data = {correo: mockUserCredentials.correo, password: mockUserCredentials.password } = mockUserCredentials

    service.login(data).subscribe(resultado =>{
      expect(resultado).toEqual(mockResultLogin)
      done()
    })
  })
});
