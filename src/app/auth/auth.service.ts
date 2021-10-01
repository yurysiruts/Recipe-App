import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHOjcggl7pwJQvkCaLZrJbfi4z8zq5uqw',
      {
        email: email,
        password: password,
        returnSecureToken: true 
      }
    ).pipe(
      catchError(errorRes => {
        let errroMessage = 'An unknown error occured!';
        if(!errorRes.error || !errorRes.error.error) {
          return throwError(errroMessage);
        }
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            errroMessage = 'This email exists already'
        }
        return throwError(errroMessage)
      })
    );
  }
}