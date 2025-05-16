import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/interfaces/user';
import { MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-user-registration',
  imports: [MatInputModule, MatFormFieldModule,
             MatButtonModule, ReactiveFormsModule,
             MatSelectModule, MatIconModule
            ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  userService = inject(UserService);

  registrationStatus: {success: boolean, message: string} = {
    success: false,
    message: 'Not attempted yet'
  }

  registrationForm = new FormGroup({
    username: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      area: new FormControl(''),
      road: new FormControl('')  
    }),
    phone: new FormArray([
      new FormGroup({
        number: new FormControl(''),
        type: new FormControl('')
      })
    ]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    },
      this.passwordConfirmValidator,
  );
   
  passwordConfirmValidator(control: AbstractControl): {[key: string]: boolean} | null {
    const form = control as FormGroup;
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password && confirmPassword && (password !== confirmPassword)) {
        form.get('confirmPassword')?.setErrors({passwordMismatch: true});
        return {passwordMismatch: true};
    }
    return null;
  }  

  phone = this.registrationForm.get('phone') as FormArray; // This need because the phone is array

  addPhoneNumber(){
    this.phone.push(
      new FormGroup({
      number: new FormControl(''),
      type: new FormControl('')
    })
    );    
  }

  removePhoneNumber(index: number) {
    this.phone.removeAt(index);
  }

  onSubmit() {
    // const data = this.registrationForm.value as User; // Because have and the confirm data we will make this below.
    const data: User = {
      'username': this.registrationForm.get('username')?.value || '',
      'password': this.registrationForm.get('password')?.value || '',
      'name': this.registrationForm.get('name')?.value ||  '',
      'surname': this.registrationForm.get('surname')?.value || '',
      'email': this.registrationForm.get('email')?.value || '',
      'address': {
        'area': this.registrationForm.controls.address.get('area')?.value || '',
        'road': this.registrationForm.controls.address.get('road')?.value || ''
      }
    }
    console.log(data); 
    this.userService.registerUser(data)
    .subscribe({
      next: (response) => {
        console.log("User Saved", response);
        this.registrationStatus = {success: true, message: "User registrered "}
      },
      error: (response) => {
        console.log("User not Saved", response);
        this.registrationStatus = {success: false, message: response.data}
      }
    })
  }

  checkDuplicateEmails(){
    const email = this.registrationForm.get("email")?.value;
    if (email) {
      this.userService.checkDuplicateEmails(email)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.registrationForm.get('email')?.setErrors(null);
          },
          error:(response) => {
            console.log(response);
            const message = response.data;
            console.log(message);
            this.registrationForm.get('email')?.setErrors({DuplicateEmail: true});
          }
        })
    }
  }

  registerAnother() {
    this.registrationForm.reset();
    this.registrationStatus = {success:false, message: "Not attempted yet"}
  }
}
