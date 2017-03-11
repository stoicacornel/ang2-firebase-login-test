import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutes } from "./app.routing";
import { firebaseConfig } from './common/firebase/firebase.config';
import { FirebaseService } from "./common/firebase/firebase.service";
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientsComponent } from './components/clients/clients.component';

import { AngularFireModule } from 'angularfire2';
import { ButtonModule } from "primeng/components/button/button";
import { DataTableModule,SharedModule } from 'primeng/primeng';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        AddClientComponent,
        ClientsComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ButtonModule,
        DataTableModule,
        SharedModule,
        FlashMessagesModule,
        AngularFireModule.initializeApp(firebaseConfig),
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [
        FirebaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
