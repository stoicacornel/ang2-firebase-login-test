import { AuthProviders, AuthMethods } from "angularfire2";

export const firebaseConfig = {
    apiKey: 'AIzaSyBA6k8eRkPs3O67Y9WaSkrTNOqy80kDsaQ',
    authDomain: 'fir-test-ad071.firebaseapp.com',
    databaseURL: 'https://fir-test-ad071.firebaseio.com',
    storageBucket: 'fir-test-ad071.appspot.com',
    messagingSenderId: '586608639015'
};

export const firebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
};