import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LocationContainerPageComponent } from './location-container-page.component';
import { Store, StoreModule } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LocationContainerPageComponent', () => {
  let fixture: ComponentFixture<LocationContainerPageComponent>;
  let store: Store;
  let component: LocationContainerPageComponent;

  beforeEach( async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}),  ],
      declarations: [ LocationContainerPageComponent ],
      providers: [
        FormBuilder
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(LocationContainerPageComponent);
          component = fixture.componentInstance;
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationContainerPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
