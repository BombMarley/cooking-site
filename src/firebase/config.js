import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAYDib4BJ-Zp2mvkumrxaEEymeUKvmtHII",
    authDomain: "cooking-site-bd23f.firebaseapp.com",
    projectId: "cooking-site-bd23f",
    storageBucket: "cooking-site-bd23f.appspot.com",
    messagingSenderId: "127554358523",
    appId: "1:127554358523:web:88a7ad61d11246b047745e"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }