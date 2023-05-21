import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.configit';


const googleprovider = new GoogleAuthProvider
export const Authcontext = createContext();
const auth = getAuth(app);


const Authprovider = ({children}) => {
    const [user,setuser] = useState(null)
    const [loader,setLoader] = useState(true)

    const createuser = (email,password) =>{
        return createUserWithEmailAndPassword(auth ,email,password)
    }

    const SignIn = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        setLoader(true)
        return signOut(auth)
    }

const googlesignin = () =>{
    setLoader(true)
    return signInWithPopup(auth, googleprovider)
}
useEffect(() =>{
    updateProfile(auth.currentUser, {
        displayName: "Jane Q. User"
      }).then(() => {
        setuser(currentUser)
      }).catch((error) => {
        // An error occurred
        // ...
      });
},[])

useEffect(()=>{
    const unsubscribed =  onAuthStateChanged(auth ,currentUser =>{
      
       setuser(currentUser)
       setLoader(false)
       if(currentUser && currentUser.email){
        const loguser = {
            email:currentUser.email
          }
        fetch('http://localhost:3000/jwt',{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(loguser)
          })
          .then(res => res.json())
          .then(data =>{
            console.log('jwt response', data)
            // locla storage is not safe place it is second safe place
            localStorage.setItem("Car-access-token", data.token)
           
          })
         
    }
    else{
        localStorage.removeItem('Car-access-token')
      }






     })
   return () =>{
        unsubscribed()
   }
   



},[])

  

    const authinfo = {
        createuser,
        SignIn,
        logout,
        googlesignin,
        user,
        loader,setLoader
    }

    return (
        <Authcontext.Provider value={authinfo }>
       {children}
       </Authcontext.Provider>
    );
};

export default Authprovider;