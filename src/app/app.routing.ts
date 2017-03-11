import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientComponent } from  './components/add-client/add-client.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'clients',
        component: ClientsComponent
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