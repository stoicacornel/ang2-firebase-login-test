import { Component } from '@angular/core';

import { AngularFire } from 'angularfire2';
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        public _af: AngularFire,
        private _router: Router,
    ) { }

    logout() {
        this._af.auth.logout();
        this._router.navigate(['/signin']);
    }
}
