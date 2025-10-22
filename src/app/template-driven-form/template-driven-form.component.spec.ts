import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { formConfig } from '../Model/form-mock';
import { NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('TemplateDrivenFormComponent', () => {
  let component: TemplateDrivenFormComponent;
  let fixture: ComponentFixture<TemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit invalid form',()=>{
    const formElement = fixture.debugElement.query(By.css('form')).nativeElement;
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.submittedData).toBeNull();
  })
});
