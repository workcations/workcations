import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBpW7fr5rGDf5G9b9AY8Yv5rcPVfyWNDhM",
  authDomain: "e-commerce-2692f.firebaseapp.com",
  databaseURL: "https://e-commerce-2692f.firebaseio.com",
  projectId: "e-commerce-2692f",
  storageBucket: "e-commerce-2692f.appspot.com",
  messagingSenderId: "481650315804",
  appId: "1:481650315804:web:5cfd0a7267147a949b05d9",
  measurementId: "G-FY8QL36CMW",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

const firestore = app.firestore();

export default firestore;
