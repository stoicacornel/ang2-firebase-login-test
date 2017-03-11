import { Component } from '@angular/core';
import { AngularFire } from "angularfire2";

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    route: String = window.location.pathname.split('/')[1];

    constructor(
        private _af: AngularFire /*Needed for html*/
    ) { }
}
