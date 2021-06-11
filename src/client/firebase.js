import firebase from 'firebase/app';
import 'firebase/database';


var firebaseConfig = {
  apiKey: "AIzaSyAiiZIMGomIorKrONSKheMJoXVpG2vw_9g",
  authDomain: "algo-376a3.firebaseapp.com",
  databaseURL: "https://algo-376a3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "algo-376a3",
  storageBucket: "algo-376a3.appspot.com",
  messagingSenderId: "368797168534",
  appId: "1:368797168534:web:76474a2c42c9b890d9a3b7",
  measurementId: "G-4JZ43RDYBJ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;