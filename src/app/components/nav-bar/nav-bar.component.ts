import { Component, OnInit } from '@angular/core';
import { AngularFire } from "angularfire2";

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    route: String = window.location.pathname.split('/')[1];

    constructor(
        private _af: AngularFire /*This si for hiding areas that needs authentication*/
    ) { }

    ngOnInit() {
        /*let interval = setInterval(() => {
            console.log(this.route);
        }, 1000)*/
    }

}
