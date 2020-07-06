import * as firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBEtlNWA1b2N2VEmleAz-0mLzoaF4Y6xew",
  authDomain: "apt-tracker-254513.firebaseapp.com",
  databaseURL: "https://apt-tracker-254513.firebaseio.com",
  projectId: "apt-tracker-254513",
  storageBucket: "apt-tracker-254513.appspot.com",
  messagingSenderId: "708177257702",
  appId: "1:708177257702:web:9c596de47a46c934450727",
  measurementId: "G-KTXV85CGP9",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
