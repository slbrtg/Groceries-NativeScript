import { UserService } from "../../shared/user/user.service";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { User } from "../../shared/user/user";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { Color } from "tns-core-modules/color";
import { View } from "tns-core-modules/ui/core/view";

@Component({
    selector: "my-app",
    providers: [UserService],
    templateUrl:'./pages/login/login.html',
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    // Properties
    user: User;
    isLoggingIn: boolean = true;

    @ViewChild("container") container: ElementRef;

    // Methods
    constructor(private router: Router, private userService: UserService, private page: Page) {
        this.user = new User();
        this.user.email = "my.test.account@nativescript.org";
        this.user.password = "password";
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    }

    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login() {
        this.userService.login(this.user)
            .subscribe(
                () => this.router.navigate(["/list"]),
                (error) => alert("Unfortunately we could not find your account.")
            );
    }

    signUp() {
        this.userService.register(this.user)
            .subscribe(
                () => {
                    alert("Your account was successfully created.");
                    this.toggleDisplay();
                },
                () => alert("Unfortunately we were unable to create your account.")
            );
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
        let container = <View>this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
            duration: 200
        });
    }
}