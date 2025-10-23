import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormComponent } from './reactive-form.component';
import { registrationForm } from '../Mock/form-mock';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    component.formConfig = registrationForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit invalid form',()=>{
    component.ngOnInit();
    component.onSubmit();
    expect(component.submittedData).toEqual(null);
    expect(component.form.status).toEqual("INVALID");
  })

  it('should submit if the form is valid',()=>{
    component.ngOnInit();
    component.form.get('name')?.setValue('John Doe');
    component.form.get('email')?.setValue('john@example.com');
    component.form.get('gender')?.setValue('Male');     
    component.onSubmit();
    expect(component.submittedData).toEqual({
      name: 'John Doe',
      email: 'john@example.com',
      gender: 'Male',
      dob: '',
      hobbies: '',
      subscribe: '',
      about:''
    });
    expect(component.form.status).toEqual("VALID");
  })
});
