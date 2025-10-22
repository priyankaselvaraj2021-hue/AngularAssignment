import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { formConfig } from '../Model/form-mock';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,NgMultiSelectDropDownModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit{
  Array=Array;
  form!: FormGroup;
  submittedData: any = null;
  formConfig = formConfig;

  ngOnInit(){
    const group: any = {};
    for (const field of this.formConfig.fields) {
      const validators = [];
      if (field.required) validators.push(Validators.required);
      if (field.validation?.pattern) validators.push(Validators.pattern(field.validation.pattern));
      group[field.name] = new FormControl('', validators);
    }
    this.form = new FormGroup(group);
  }

  onSubmit() {
    if (this.form.valid) {
      this.submittedData = Object.fromEntries(
        Object.entries(this.form.value).filter(([_, value]) =>
          value !== null &&
          value !== '' &&
          !(Array.isArray(value) && value.length === 0)
        )
      );
    } else {
      this.form.markAllAsTouched();
    }
  }
}
