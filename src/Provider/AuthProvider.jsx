// AuthProvider.js
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import auth from '../../firebase.config';

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loginUserInfo, setloginUserInfo] = useState("");
    const googleProvider = new GoogleAuthProvider();

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const updateRegisterUser = (user, displayName, photoURL) => {
        return updateProfile(user, { displayName, photoURL });
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setloginUserInfo(currentUser)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword (auth, email, password)
    }

    const googleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    const authInfo = { userRegister, updateRegisterUser,userLogin,loginUserInfo,googleLogin};
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;
