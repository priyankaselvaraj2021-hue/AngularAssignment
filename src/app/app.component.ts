import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule } from '@angular/forms';
import { registrationForm } from './Mock/form-mock';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateDrivenFormComponent, ReactiveFormComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  activeForm: 'template' | 'reactive' = 'template';
  form = registrationForm; 
}
