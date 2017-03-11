import { Component } from '@angular/core';
import { FirebaseService } from '../../common/firebase/firebase.service';
import { AngularFire } from "angularfire2";
import { Router } from "@angular/router";

@Component({
    selector: 'clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
    clients: any;
    user: any;

    constructor(
        private _firebaseService: FirebaseService,
        private _af: AngularFire,
        private _router: Router
    ) {
        this._af.auth.subscribe(user => {
            if (user) {
                this.user = user;
                this._firebaseService.getClients().subscribe(clients => {
                    this.clients = clients;
                })
            } else {
                this._router.navigate(['/signin']);
            }
        });
    }
}
