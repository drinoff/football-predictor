import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAhxmlXklyHuAMfLFn_2V0u4bXe3Eanilc",
    authDomain: "football-predictor-3416d.firebaseapp.com",
    databaseURL:"https://football-predictor-3416d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "football-predictor-3416d",
    storageBucket: "football-predictor-3416d.appspot.com",
    messagingSenderId: "355159893498",
    appId: "1:355159893498:web:641419ef4a7ec8e158b043",
};


const firebase = initializeApp(firebaseConfig);


export default firebase;

