"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var angularfire2_1 = require("angularfire2");
var LoginComponent = (function () {
    function LoginComponent(_router, _af, _flashMessages) {
        var _this = this;
        this._router = _router;
        this._af = _af;
        this._flashMessages = _flashMessages;
        this.route = window.location.pathname.split('/')[1];
        this.signup = false;
        this._af.auth.subscribe(function (auth) {
            if (auth) {
                _this._router.navigate(['/']);
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signup = this.route === 'signup';
        this._af.auth.subscribe(function (user) {
            _this.user = user;
        });
    };
    LoginComponent.prototype.loginFb = function () {
        var _this = this;
        this._af.auth.login({
            provider: angularfire2_1.AuthProviders.Facebook,
            method: angularfire2_1.AuthMethods.Popup
        }).then(function (success) {
            _this._router.navigate(['/']);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    ;
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        this._af.auth.login({
            provider: angularfire2_1.AuthProviders.Facebook,
            method: angularfire2_1.AuthMethods.Popup
        }).then(function (success) {
            _this._router.navigate(['/']);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    ;
    LoginComponent.prototype.login = function () {
    };
    LoginComponent.prototype.create = function () {
        /*firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });*/
        /*let login = this._user.create(this.login);
        if (login) {
            this._user.login = login;
            this._alert.add(new Alert('success', 'Felicitari, te-ai inregistrat!'));
            this._router.navigate(['doctor', 'edit-profile']);
        }*/
    };
    LoginComponent.prototype.signin = function () {
        /*let login = this._user.signin(this.login);
        if (login) {
            this._user.login = login;
            this._router.navigate(['doctor', this._user.login._id, 'profile']);
        }*/
    };
    LoginComponent.prototype.signout = function () {
        this._af.auth.logout();
        this._flashMessages.show('You logged out', { cssClass: 'alert-success' });
    };
    LoginComponent.prototype.submit = function () {
        this.signup ? this.create() : this.signin();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'signin.component.html',
            styleUrls: ['signin.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
