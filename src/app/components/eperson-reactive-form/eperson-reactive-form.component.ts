import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-reactive-form',
  imports: [ReactiveFormsModule, MatSelectModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css'
})
export class EpersonReactiveFormComponent {
  @Output() person = new EventEmitter<EPerson>();

  ePersonForm = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    age: new FormControl(18, [
      Validators.required,
      Validators.pattern('[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    education: new FormControl('', Validators.required)
  }); 

  // Second way more discraidable for the type of data  
  // ePersonForm = new FormGroup<{
  //   givenName: FormControl<string>,
  //   surname: FormControl<string>,
  //   age: FormControl<number>,
  //   email: FormControl<string>,
  //   education: FormControl<string>,
  // }> ({
  //   givenName: new FormControl('', {nonNullable:true, validators: Validators.required}),
  //   surname: new FormControl('', {nonNullable:true, validators: Validators.required}),
  //   age: new FormControl(18, {nonNullable:true,
  //      validators: [Validators.required, Validators.pattern('[0-9]*$'),
  //           Validators.min(18),
  //           Validators.max(100) ]}),
  //   email: new FormControl('', {nonNullable:true, validators: [Validators.required, Validators.email]}),
  //   education: new FormControl('', {nonNullable:true, validators: Validators.required})
  // });

  onSubmit() {
    if (this.ePersonForm.valid) {
      console.log(this.ePersonForm.value);
      const person: EPerson = {
        givenName:this.ePersonForm.value.givenName ?? '',
        surname: this.ePersonForm.value.surname ?? '',
        age: String(this.ePersonForm.value.age) ?? '',
        email: this.ePersonForm.value.email ?? '',
        education: this.ePersonForm.value.education ?? ''
      }
      this.person.emit(person);
      this.ePersonForm.reset(); 
    }
    //console.log("Data", data);
    console.log(this.ePersonForm);
    // console.log("givenName>>", this.ePersonForm.controls['givenName'].value);
    // this.ePersonForm.controls["surname"].setValue("Papakis"); 
  }

  onSetValue(){
    this.ePersonForm.setValue({
      givenName: "Kostas",
      surname:"Lalakis" ,
      age: 39,
      email: "kostas@aueb.gr",
      education: "Bachelor's degree"
    })
  }
}
