import { Component, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from 'src/app/shared/interfaces/eperson';


@Component({
  selector: 'app-eperson-template-driven-form',
  imports: [FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, CommonModule],
  templateUrl: './eperson-template-driven-form.component.html',
  styleUrl: './eperson-template-driven-form.component.css'
})
export class EpersonTemplateDrivenFormComponent {
  @Output() person = new EventEmitter<EPerson>()
  @ViewChild('educForm', {static:false}) form:NgForm | undefined; 

  onSubmit(value: EPerson) {
    console.log(value);
    console.log(this.form);
    console.log(this.form?.form.get('givenName')?.value);
    console.log(this.form?.form.controls['surname'].value); // make the same as above the get() but take the value from controls element directly. 
    this.person.emit(value); // with this send the output
  }

  onSetValue() {
    this.form?.setValue({
      givenName: "John",
      surname: "Doe",
      age: 30,
      email:"john@aueb.gr",
      education: "Bachelor's degree"
    });
    this.form?.form.controls['givenName'].setValue("Aaron"); //Here set value in a specific field
  }
}
