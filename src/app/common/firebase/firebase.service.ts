import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
    clients: FirebaseListObservable<any[]>;
    client: FirebaseObjectObservable<any>;

    constructor(
        private _af: AngularFire,
    ) { }

    getClients() {
        this.clients = this._af.database.list('app/clients') as FirebaseListObservable<Client[]>;
        return this.clients;
    }

    getClientDetails(id) {
        this.client = this._af.database.object('app/clients/' + id) as FirebaseObjectObservable<Client>;
        return this.client;
    }

    addClient(client) {
        firebase.database().ref().child('app/clients').push(client);
    }
}

interface Client {
    $key:       string;
    name:       string;
    city:       string;
    age:        number;
    occupation: string;
}
