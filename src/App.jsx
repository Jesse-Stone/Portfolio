import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/productList";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth"
import Home from "./components/Home/Home"
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

import { useState, useEffect } from 'react'
import {auth} from './firebase-config'
import Login from "./components/Login/Login";


const App = () => {

  const [user, setUser] = useState(null)

  useEffect(()=> {
    auth.onAuthStateChanged(user=>{
      setUser(user)
    })
    
  },[])

  console.log(user)

  return (
  <div>
    
    <Login/>
    {user ? <div><Navbar/><Home user={user} /> 
    <Intro user={user}/>
    <Auth/>
    <About/>
    <ProductList/>
    <Contact/> </div> : <>sup</>}  
  </div>
  )
};

export default App;