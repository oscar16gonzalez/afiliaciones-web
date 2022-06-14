import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { MembershipComponent } from './membership.component';


describe('PRUEBAS UNITARIAS MembershipComponent', () => {
  let component: MembershipComponent;
  let fixture: ComponentFixture<MembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [ MembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de existir el componente', () => {
    const fixture = TestBed.createComponent(MembershipComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  });
});
