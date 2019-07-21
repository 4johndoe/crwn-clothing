import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnvQqvJ5N88r0K89ilTR8RjXfxwlo5dBg",
    authDomain: "crwn-db-e06c8.firebaseapp.com",
    databaseURL: "https://crwn-db-e06c8.firebaseio.com",
    projectId: "crwn-db-e06c8",
    storageBucket: "",
    messagingSenderId: "1008564352796",
    appId: "1:1008564352796:web:e11c60289965bc1f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShop = userRef.get();

    if (!snapShop.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;