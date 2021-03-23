import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';


import { MultipleSelectComponent } from './multiple-select.component';

describe('MultipleSelectComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  @Component({
    template: '<app-multiple-select [label]="label" [control]="control" [fieldName]="fieldName" [source$]="source$"></app-multiple-select>'
  })
  class TestHostComponent {
    constructor() {
      this.control = new FormControl('region');
    }
    public label: 'test label';
    public fieldName: 'name';
    public control: FormControl;
    public source$: ['test'];
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHostComponent, MultipleSelectComponent ],
      imports: [ ReactiveFormsModule ]
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
