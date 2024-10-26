import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
import auth from '../../firebase.config';

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loginUserInfo, setloginUserInfo] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loading, setLoading] = useState(true);

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const updateRegisterUser = (user, displayName, photoURL) => {
        return updateProfile(user, { displayName, photoURL });
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setloginUserInfo(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    },[])

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword (auth, email, password)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = { userRegister, updateRegisterUser,userLogin,loginUserInfo,googleLogin,githubLogin,loading};
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;
