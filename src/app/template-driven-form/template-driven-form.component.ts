import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ResgistrationForm } from '../Model/registration-form.model';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,CommonModule,NgMultiSelectDropDownModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  Array=Array;
  submittedData: any = null;
  today = new Date().toISOString().split('T')[0];
  @Input({required: true})formConfig!:ResgistrationForm;

  onSubmission(form: NgForm){
    if(form.valid){
      this.submittedData = form.value;
    }else {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
