import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHT_Kp4Uv2s05Wv-ksg0_Souyps2hAUa4",
  authDomain: "yonkesplus.firebaseapp.com",
  projectId: "yonkesplus",
  storageBucket: "yonkesplus.appspot.com",
  messagingSenderId: "199437558486",
  appId: "1:199437558486:web:e08b392eab3a1408b31f77",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const loginEmail = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const loginGoogle = () => {
  const authGoogle = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(authGoogle);
};

export const loginFacebook = () => {
  const authFacebook = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(authFacebook);
};
