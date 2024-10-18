// AuthProvider.js
import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from '../../firebase.config';

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const updateRegisterUser = (user, displayName, photoURL) => {
        return updateProfile(user, { displayName, photoURL });
    };

    const authInfo = { userRegister, updateRegisterUser };
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;
