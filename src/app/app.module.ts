import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppRoutes } from "./app.routing";
import { firebaseConfig, firebaseAuthConfig } from './common/firebase/firebase.const';
import { FirebaseService } from "./common/firebase/firebase.service";
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClientComponent } from './components/client/client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ButtonModule } from "primeng/components/button/button";


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
        ButtonModule,
        FlashMessagesModule,
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [
        FirebaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
