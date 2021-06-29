import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDYveLSUWA-p525Ua-LA5jnbRiOZQc2lH4",
        authDomain: "messen-79293.firebaseapp.com",
        projectId: "messen-79293",
        storageBucket: "messen-79293.appspot.com",
        messagingSenderId: "159010990557",
        appId: "1:159010990557:web:e48b40d4ed3590bc4bee34",
        measurementId: "G-H8WHFSHWPK"
});

const db = firebaseApp.firestore();

export default db;