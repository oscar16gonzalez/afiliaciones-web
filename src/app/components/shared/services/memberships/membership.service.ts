import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http: HttpClient) { }
  
  createMembership(membershipRegister: MembershipService) {
    return this.http.post('http://localhost:4000/afiliacion', membershipRegister);
  }

  getMembership() {
    return this.http.get('http://localhost:4000/users');
  }

  getUserFind(cedula: number) {
    return this.http.get('http://localhost:4000/afiliacion/'+ cedula);
  }
}