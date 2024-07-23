import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBsqTOXvAZAmkd6Fp75oM23ujCvJFbHIc4",
    authDomain: "chatrealtime-9bcff.firebaseapp.com",
    databaseURL: "https://chatrealtime-9bcff-default-rtdb.firebaseio.com",
    projectId: "chatrealtime-9bcff",
    storageBucket: "chatrealtime-9bcff.appspot.com",
    messagingSenderId: "356196715053",
    appId: "1:356196715053:web:f97ec809844d50d9df46a4"
};

export default firebase.initializeApp(firebaseConfig);