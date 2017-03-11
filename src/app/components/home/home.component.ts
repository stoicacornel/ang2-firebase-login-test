import { Component } from '@angular/core';

import { AngularFire } from 'angularfire2';
import { Router } from "@angular/router";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    user: any;

    constructor(
        public _af: AngularFire,
        private _router: Router
    ) {
        this._af.auth.subscribe(user => {
            if (user) {
                this.user = user;
            } else {
                this._router.navigate(['/signin']);
            }
        })
    }
}
