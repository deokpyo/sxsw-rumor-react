import firebase from "firebase";
var config = {
  apiKey: "AIzaSyBKiRgxMOFhQvEoOl4gAjTSYWmSPPrBEKk",
  authDomain: "sxsw-rumor.firebaseapp.com",
  databaseURL: "https://sxsw-rumor.firebaseio.com",
  projectId: "sxsw-rumor",
  storageBucket: "sxsw-rumor.appspot.com",
  messagingSenderId: "95205841301"
};
var fire = firebase.initializeApp(config);
export default fire;
