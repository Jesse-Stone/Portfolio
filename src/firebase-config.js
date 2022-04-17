import { firebase, initializeApp } from "firebase/app"
import { getFirestore } from '@firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCDaPpOE8yQyjJx6E-mm_S8dsvKkYDKu88",
    authDomain: "jesse-stone.firebaseapp.com",
    projectId: "jesse-stone",
    storageBucket: "jesse-stone.appspot.com",
    messagingSenderId: "928407981223",
    appId: "1:928407981223:web:775ca70c2abca18cf61f82"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider()
const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result)=> {
        const user = result.user.displayName;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", user)
        localStorage.setItem("profilePic",profilePic)

    }).catch((error) => {
        console.log(error)
    })
};

const logOut = () => {
    signOut(auth).then(()=>{
        localStorage.clear()
        console.log('logged out')
    }).catch((error)=>{
        console.log('signed out')
    })
}

export {db,auth, signInWithGoogle,logOut}