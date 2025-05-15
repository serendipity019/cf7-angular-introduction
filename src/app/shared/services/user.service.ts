import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User, Credentials, LoggedInUser } from '../interfaces/user';
import { Router } from '@angular/router';

const API_URL = `${environment.apiURL}/api/users`;
const API_URL_AUTH = `${environment.apiURL}/api/auth`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  router = inject(Router);

  user$ = signal<LoggedInUser| null> (null)

  registerUser(user:User) {
    return this.http.post<{status: boolean, data: User}>(`${API_URL}`, user);
  }

  checkDuplicateEmails(email: string) {
    return this.http.get<{status: boolean, data: User}>
    (`${API_URL}/check_duplicate_email/${email}`);
  }

  loginUser(credentials: Credentials){
    return this.http.post<{status: boolean, data: string}>(
      `${API_URL_AUTH}/login`, credentials
    ) 
  }

  logoutUser() {
    this.user$.set(null);
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }
}
