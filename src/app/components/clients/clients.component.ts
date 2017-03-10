import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../common/firebase/firebase.service';
import { AngularFire } from "angularfire2";
import { Router } from "@angular/router";

@Component({
    selector: 'clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
    clients: any;
    user: any;

    constructor(
        private _firebaseService: FirebaseService,
        private _af: AngularFire,
        private _router: Router
    ) { }

    ngOnInit() {
        this._af.auth.subscribe(user => {
            this.user = user;
            if (!this.user) {
                this._router.navigate(['/']);
            }
        });

        this._firebaseService.getClients().subscribe(clients => {
            console.log(clients);
            this.clients = clients;
        })
    }

}
