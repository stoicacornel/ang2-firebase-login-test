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
        public af: AngularFire,
        public flashMessages: FlashMessagesService
    ) { }

    ngOnInit() {
        this.af.auth.subscribe(user => {
            this.user = user;
            console.log(this.user);
        })
    }

    login() {
        this.af.auth.login();
    }

    logout() {
        this.af.auth.logout();
        this.flashMessages.show('You logged out', {cssClass: 'alert-success', timeout: 3000});
    }

}
