import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyCDaPpOE8yQyjJx6E-mm_S8dsvKkYDKu88",
    authDomain: "jesse-stone.firebaseapp.com",
    projectId: "jesse-stone",
    storageBucket: "jesse-stone.appspot.com",
    messagingSenderId: "928407981223",
    appId: "1:928407981223:web:775ca70c2abca18cf61f82"
})

const auth = firebase.auth();
const firestore = firebase.firestore();