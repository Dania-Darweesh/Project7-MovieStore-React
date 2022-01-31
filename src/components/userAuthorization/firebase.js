// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//? Ali
// const firebaseConfig = {
//   apiKey: "AIzaSyCSpCG2T_yhZBY-LGN-d0vpbbinK0TF0wk",
//   authDomain: "ali-fire-test.firebaseapp.com",
//   projectId: "ali-fire-test",
//   storageBucket: "ali-fire-test.appspot.com",
//   messagingSenderId: "32079689380",
//   appId: "1:32079689380:web:d7feff7c7822e25fe11831"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyDu7-8QeorOw814y9cqFS_1s3vwJPSs87E",
//   authDomain: "react-movie-e3147.firebaseapp.com",
//   projectId: "react-movie-e3147",
//   storageBucket: "react-movie-e3147.appspot.com",
//   messagingSenderId: "42861137742",
//   appId: "1:42861137742:web:5ad8ec95a9f57292abd81f",
//   measurementId: "G-09D8F3C8GG"
// };

//? Awni
const firebaseConfig = {
  apiKey: "AIzaSyDu7-8QeorOw814y9cqFS_1s3vwJPSs87E",
  authDomain: "react-movie-e3147.firebaseapp.com",
  projectId: "react-movie-e3147",
  storageBucket: "react-movie-e3147.appspot.com",
  messagingSenderId: "42861137742",
  appId: "1:42861137742:web:5ad8ec95a9f57292abd81f",
  measurementId: "G-09D8F3C8GG"
};

// Initialize Firebase

 const firebaseApp = initializeApp(firebaseConfig);
 const db = getFirestore();
 const auth=getAuth();
export{db,auth}