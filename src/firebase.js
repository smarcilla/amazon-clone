import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDl9yvif2eKkSxljWyApP6TgwAlh8jSius",
    authDomain: "challenge-2c9ae.firebaseapp.com",
    databaseURL: "https://challenge-2c9ae.firebaseio.com",
    projectId: "challenge-2c9ae",
    storageBucket: "challenge-2c9ae.appspot.com",
    messagingSenderId: "996138373708",
    appId: "1:996138373708:web:588b130f1835aec06e9ae9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  