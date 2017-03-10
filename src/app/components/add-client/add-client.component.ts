import { Component, OnInit } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Router } from "@angular/router";

@Component({
    selector: 'add-client',
    templateUrl: './add-client.component.html',
    styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
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
