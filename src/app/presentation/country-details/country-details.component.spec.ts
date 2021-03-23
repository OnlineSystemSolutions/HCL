import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetailsComponent } from './country-details.component';

describe('CountryDetailsComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  @Component({
    template: '<app-country-details [countryDetail]="countryDetail"></app-country-details>'
  })
  class TestHostComponent {
    constructor() {}
    public countryDetail: { name: string } = {
      name: 'test'
    };
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHostComponent, CountryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
