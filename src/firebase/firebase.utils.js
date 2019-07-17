import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDag_xmffJ3UuazXCHmsG162RgeEw0YxFg",
    authDomain: "crwn-db-781f5.firebaseapp.com",
    databaseURL: "https://crwn-db-781f5.firebaseio.com",
    projectId: "crwn-db-781f5",
    storageBucket: "",
    messagingSenderId: "911989346163",
    appId: "1:911989346163:web:8cdb207c76803930"
};;

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;