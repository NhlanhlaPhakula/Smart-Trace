import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCw800SfoqVIgvQoLvHTGCk445e_Fzov-8",
    authDomain: "smart-trace-system.firebaseapp.com",
    databaseURL: "https://smart-trace-system-default-rtdb.firebaseio.com",
    projectId: "smart-trace-system",
    storageBucket: "smart-trace-system.appspot.com",
    messagingSenderId: "833530663557",
    appId: "1:833530663557:web:55b700efe86ff6f0178fec",
    measurementId: "G-091VRTRJRV"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase;