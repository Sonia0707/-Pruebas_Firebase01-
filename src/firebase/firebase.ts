import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = { 
 apiKey: "AIzaSyCkKEnwHf_jNlvCa2pW7O_Wo6jBXMS-uhQ",
    authDomain: "fir-01-50904.firebaseapp.com",
    projectId: "fir-01-50904",
    storageBucket: "fir-01-50904.appspot.com",
    messagingSenderId: "768893068305",
    appId: "1:768893068305:web:0baecb76f39dea20ed3db0",
    measurementId: "G-PTQQRK21P9"
};


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
