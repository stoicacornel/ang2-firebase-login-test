import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../common/firebase/firebase.service';

@Component({
    selector: 'clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
    clients: any;

    constructor(
        private firebaseService: FirebaseService,
    ) { }

    ngOnInit() {
        this.firebaseService.getClients().subscribe(clients => {
            console.log(clients);
            this.clients = clients;
        })
    }

}
