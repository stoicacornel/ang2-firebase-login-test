import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFire, AuthProviders, AuthMethods } from "angularfire2";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
    selector: 'signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css']
})
export class SigninComponent {
    error: any;

    constructor(
        private _router: Router,
        public _af: AngularFire,
        public _flashMessages: FlashMessagesService
    ) {
        this._af.auth.subscribe(user => {
            if(user) {
                this._router.navigate(['/'])
            }
        })
    }

    login(formData) {
        if(formData.valid) {
            this._af.auth.login({
                    email: formData.value.email,
                    password: formData.value.password
                },
                {
                    provider: AuthProviders.Password,
                    method: AuthMethods.Password,
                }).then(
                (success) => {
                    this._router.navigate(['/'])
                }).catch(
                (err) => {
                    this.error = err;
                }
            )
        }
    }

    loginFb() {
        this._af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        }).then(
            (success) => {
                this._router.navigate(['/']);
        }).catch(
            (err) => {
                this.error = err;
            })
    };

    loginGoogle() {
        this._af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        }).then(
            (success) => {
                this._router.navigate(['/']);
        }).catch(
            (err) => {
                this.error = err;
            })
    };

    signout () {
        this._af.auth.logout();
        this._flashMessages.show('You logged out', {cssClass: 'alert-success'});
    }
}
