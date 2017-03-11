import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFire } from "angularfire2";

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    error: any;

    constructor(
        private _af: AngularFire,
        private _router: Router
    ) {
        this._af.auth.subscribe(user => {
            if(user) {
                this._router.navigate(['/'])
            }
        })
    }

    create(formData) {
        if(formData.valid) {
            this._af.auth.createUser({
                email: formData.value.email,
                password: formData.value.password
            }).then(
                (success) => {
                    this._router.navigate(['/clients'])
            }).catch(
                (err) => {
                    this.error = err;
                }
            )
        }
    }
}
