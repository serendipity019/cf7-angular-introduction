import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-user-registration',
  imports: [MatInputModule, MatFormFieldModule,
             MatButtonModule, ReactiveFormsModule
            ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  registrationForm = new FormGroup({
    username: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      area: new FormControl(''),
      road: new FormControl('')  
    }),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
}
