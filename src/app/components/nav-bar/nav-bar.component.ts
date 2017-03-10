import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    route: String = window.location.pathname.split('/')[1];

    constructor() { }

    ngOnInit() {

        /*let interval = setInterval(() => {
            console.log(this.route);
        }, 1000)*/
    }

}
