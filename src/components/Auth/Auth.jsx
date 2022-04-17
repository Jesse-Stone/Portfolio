import React from 'react'
import { useState, useEffect} from "react"
import {db, signInWithGoogle, logOut} from '../../firebase-config'
import { collection, doc, getDocs } from 'firebase/firestore'

const Auth = () => {

    const [users, setUsers] = useState(null)
    const usersCollectionRef = collection(db, "messages")


    useEffect(()=> {
        const getMessages = async () => {
            const data = await getDocs(usersCollectionRef)
            // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getMessages()
    },[])
  return (
    <>
        {/* <button onClick={signInWithGoogle}>Sign In</button>
        <button onClick={logOut}>Log Out</button>
        <img src={localStorage.getItem("profilePic")} alt="" />
        <h2>{localStorage.getItem("name")}</h2> */}

    </>
  )
}

export default Auth
