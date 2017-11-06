import { Component } from "@angular/core";
import { User } from "./shared/user/user";

@Component({
  selector: "my-app",
  templateUrl:'./pages/login/login.html',
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  // Properties
  user: User;
  isLoggingIn: boolean = true;

  // Methods
  constructor() {
    this.user = new User();
  }
  submit() {
    alert(this.user.email);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}