import { Component, OnInit } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Router, Params, ActivatedRoute } from "@angular/router";

import { FirebaseService } from '../../common/firebase/firebase.service';

@Component({
    selector: 'client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
    user: any;
    id: any;
    client: any;

    constructor(
        private _af: AngularFire,
        private _firebaseService: FirebaseService,
        private _router: Router,
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
        this._af.auth.subscribe(user => {
            this.user = user;
            if (!this.user) {
                this._router.navigate(['/']);
            }
        });

        this.id = this._route.snapshot.params['id'];

        this._firebaseService.getClientDetails(this.id).subscribe(client => {
            this.client = client;
            console.log(client);
        })
    }
}
