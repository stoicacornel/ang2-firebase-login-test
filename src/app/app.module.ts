import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppRoutes } from "./app.routing";
import { FirebaseConfig } from './common/firebase/firebase.const';
import { FirebaseService } from "./common/firebase/firebase.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClientComponent } from './components/client/client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientsComponent } from './components/clients/clients.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        ClientComponent,
        AddClientComponent,
        ClientsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(FirebaseConfig),
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [
        FirebaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
