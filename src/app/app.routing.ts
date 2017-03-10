import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientComponent } from './components/client/client.component';
import { AddClientComponent } from  './components/add-client/add-client.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'clients',
        component: ClientsComponent
    },
    {
        path: 'client',
        component: ClientComponent
    },
    {
        path: 'add-client',
        component: AddClientComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];