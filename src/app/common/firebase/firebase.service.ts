import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
    clients: FirebaseListObservable<any[]>;

    constructor(
        private af: AngularFire
    ) { }

    getClients() {
        this.clients = this.af.database.list('/clients') as FirebaseListObservable<Client[]>;
        return this.clients;
    }
}

interface Client {
    $key:string;
    name:string;
    occupation:string;
    city:string;
    age:number;
}
