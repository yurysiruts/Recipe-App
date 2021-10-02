import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";

import { AuthService, AuthResponseData } from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  public isLoginMode: boolean = true;
  isLoading = false;
  public error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(formRef: NgForm) {
    if(!formRef.valid) {
      return;   // extra validation step
    }
    const email = formRef.value.email;
    const password = formRef.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if(this.isLoginMode) {
      authObs = this.authService.login(email, password)
    } else {
      authObs = this.authService.signup(email, password)
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    formRef.reset();
  }  

}