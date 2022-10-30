/*
import React from 'react'
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth"; // Resolve this 
import { auth } from "../../utils"; // Resolve this 

//This handles our user states and returns it to our provider
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("")//user state holds the user data
  const [loading, setLoading] = useState();
    const registerUser = (email, name, password) => {
            setLoading(true)
            createUserWithEmailAndPassword(auth, email, password)
                .then(() =>{
                    return updateProfile(auth.currentUser, {
                        displayName: name,
                    })
                })
                .then ((res) => console.log(res))
             }
    console.log("This is the userAuthCon");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return <userAuthContext.Provider value={{ user, signUp }}>{children}</userAuthContext.Provider>

}

export function RegisterUserProfile(props) {
  const [loading, setLoading] = useState();
  const registerUser = (email, name, password) => {
    
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
        .then(() =>{
            return updateProfile(auth.currentUser, {
                displayName: name,
            })
        })
        .then ((res) => console.log(res))
       }
  console.log("This is the userAuthCon");
  return (
    <>
      <h2>Register User Info</h2>
      <p>Email :{props.email}</p>
      <p>Name :{props.name}</p>
      <p>Password :{props.password}</p>

      <div>
        <registerUser />
      </div>
    </>
  )
}

export function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function logout() {
  console.log('No user')
  signOut(auth);
}

export function useUserAuth() {
  return useContext(userAuthContext)
}
*/

// Kit's UserAuthCode

import React, { useContext, useState, useEffect } from "react";
// import 'firebase/compat/auth';
import auth from '../../utils/firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
    
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

