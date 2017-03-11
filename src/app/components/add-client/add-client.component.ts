import { Component } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Router } from "@angular/router";

import { FirebaseService } from '../../common/firebase/firebase.service';

@Component({
    selector: 'add-client',
    templateUrl: './add-client.component.html',
    styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
    user: any;
    name: string;
    age: number;
    city: string;
    occupation: string;

    constructor(
        private _af: AngularFire,
        private _router: Router,
        private _firebaseService: FirebaseService
    ) {
        this._af.auth.subscribe(user => {
            if (user) {
                this.user = user;
            } else {
                this._router.navigate(['/signin']);
            }
        });
    }

    submit() {
        let client = {
            name: this.name,
            city: this.city,
            age: this.age,
            occupation: this.occupation
        };

        this._firebaseService.addClient(client);

        this._router.navigate(['./clients']);
    }
}
