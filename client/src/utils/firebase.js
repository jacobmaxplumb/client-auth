import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDAqs83O0e7MfdhVc0kaDbgVH8BYWSuTyU",
    authDomain: "my-project-4c3cf.firebaseapp.com",
    projectId: "my-project-4c3cf",
    storageBucket: "my-project-4c3cf.appspot.com",
    messagingSenderId: "54673060162",
    appId: "1:54673060162:web:f18121dbc712af8e3c18db",
    measurementId: "G-05X1T2MJBH"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(res => {
        console.log(res);
        localStorage.setItem('token', res.user.accessToken);
    })
}