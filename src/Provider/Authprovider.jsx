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

// useEffect(()=>{
//     const unsubscribed =  onAuthStateChanged(auth ,currentUser =>{
      
//        setuser(currentUser)
//        setLoader(false)
//      })
//    return () =>{
//         unsubscribed()
//    }
   



// },[])
useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
       
      if (currentUser) {
        if (currentUser.displayName === null) {
            updateProfile(auth.currentUser, {
                displayName: "Niloy"
              })
            .then(() => {
              console.log("Display name set successfully.");
            })
            .catch((error) => {
              console.log("Error setting display name:", error);
            });
        }
  
        setuser(currentUser);
        setLoader(false);
      } else {
        setuser(null);
        setLoader(false);
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  

    const authinfo = {
        createuser,
        SignIn,
        logout,
        googlesignin,
        user,
        loader
    }

    return (
        <Authcontext.Provider value={authinfo }>
       {children}
       </Authcontext.Provider>
    );
};

export default Authprovider;