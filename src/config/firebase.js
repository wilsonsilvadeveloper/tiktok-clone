import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBQl-ut4o5ZyV80AzEHsVsnk6Qwx55qXqA",
  authDomain: "tiktok---clone-2ba9a.firebaseapp.com",
  projectId: "tiktok---clone-2ba9a",
  storageBucket: "tiktok---clone-2ba9a.appspot.com",
  messagingSenderId: "1043214409914",
  appId: "1:1043214409914:web:c39190c8ab3cd6f2c9a283"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;