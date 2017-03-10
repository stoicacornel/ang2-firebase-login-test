import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user: any;

    constructor(
        public _af: AngularFire,
        public _flashMessages: FlashMessagesService
    ) { }

    ngOnInit() {
        this._af.auth.subscribe(user => {
            this.user = user;
        })
    }

    login() {
        this._af.auth.login();
    }

    logout() {
        this._af.auth.logout();
        this._flashMessages.show('You logged out', {cssClass: 'alert-success', timeout: 3000});
    }

}
