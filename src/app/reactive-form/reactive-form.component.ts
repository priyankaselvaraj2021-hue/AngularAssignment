import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormArray, UntypedFormGroup, Validators } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ResgistrationForm, supportedInputFieldTypes } from '../Model/registration-form.model';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,NgMultiSelectDropDownModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit{
  form!: FormGroup;
  submittedData: any = null;
  protected readonly supportedInputFieldTypes = supportedInputFieldTypes;
  @Input({required: true})formConfig!:ResgistrationForm;

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
      this.submittedData = this.form.value;
      console.log(this.submittedData)
    } else {
      this.form.markAllAsTouched();
    }
  }
}
