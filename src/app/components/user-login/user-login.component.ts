import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Credentials, LoggedInUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';
import {jwtDecode} from 'jwt-decode';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userService = inject(UserService);
  router = inject(Router);

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log(this.loginForm.value);
    const credentials = this.loginForm.value as Credentials

    this.userService.loginUser(credentials)
      .subscribe({
        next: (response) => {
          console.log("Logged in",response);
          const access_token = response.data;
          localStorage.setItem("access_token", access_token);

          const decodedTokenSubject =jwtDecode(access_token) as unknown as LoggedInUser;
          console.log(decodedTokenSubject);
          this.router.navigate(['user-registration-example']);
        },
        error: (error) => {
          console.log("Not logged in", error);
        }
      })
  }
}
