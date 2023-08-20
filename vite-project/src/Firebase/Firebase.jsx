import { initializeApp } from "firebase/app";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyB2EHUbjhBBzh1NXaOEn-QrqLrK2dUF2A8",
  authDomain: "react-https-def9f.firebaseapp.com",
  databaseURL: "https://react-https-def9f-default-rtdb.firebaseio.com",
  projectId: "react-https-def9f",
  storageBucket: "react-https-def9f.appspot.com",
  messagingSenderId: "919532531003",
  appId: "1:919532531003:web:3c07e9eae6f0f989a9db1e",
};

const app = initializeApp(firebaseConfig);
