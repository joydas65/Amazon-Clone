import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA07w09SrTL8S-i0qHtOgELpXaomU_nsrU",
    authDomain: "clone-299c9.firebaseapp.com",
    databaseURL: "https://clone-299c9.firebaseio.com",
    projectId: "clone-299c9",
    storageBucket: "clone-299c9.appspot.com",
    messagingSenderId: "624954583096",
    appId: "1:624954583096:web:f274474206167d614a1ecd",
    measurementId: "G-H8YKH1SGN1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };