import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { formConfig } from '../Model/form-mock';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,CommonModule,NgMultiSelectDropDownModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  Array=Array;
  form = formConfig;
  submittedData: any = null;
  today = new Date().toISOString().split('T')[0];

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
