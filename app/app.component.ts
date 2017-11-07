import { UserService } from "./shared/user/user.service";
import { Component } from "@angular/core";
import { User } from "./shared/user/user";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl:'./pages/login/login.html',
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  // Properties
  user: User;
  isLoggingIn: boolean = true;

  // Methods
  constructor(private userService: UserService) {
    this.user = new User();
  }
  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    // TODO: Define
  }

  signUp() {
    this.userService.register(this.user)
    .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      () => alert("Unfortunately we were unable to create your account.");
    )
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}