import { Component, OnInit } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Router } from "@angular/router";

@Component({
    selector: 'client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
    user: any;

    constructor(
        private af: AngularFire,
        private _router: Router
    ) { }

    ngOnInit() {
        this.af.auth.subscribe(user => {
            this.user = user;
            if (!this.user) {
                this._router.navigate(['/']);
            }
        });
    }
}
