import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import {auth} from '../firebase/firebase.config'
import 'react-toastify/dist/ReactToastify.css';

export const  AuthContext = createContext();

const GlobalAuthProv = ({children}) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    //toastify
    const success = () => {    
        toast('Successfully logIn!', {
           position: "top-right",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
           });
     }
    const faild = () => {    
        toast('LogIn Fail!', {
           position: "top-right",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
           });
     }

    // providers
    const google = new GoogleAuthProvider();
    //create user with email and pass
    const createUserWithEmail = (email, password) => { 
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }

    // login with popup 
    const socialLogin = (provider) => { 
        setIsLoading(true);
        return signInWithPopup(auth,provider)
     }

    // login with email and pass
    const logInwithEmail = (email, password) => { 
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
     }

    const logOut= () => { 
        return signOut(auth)
     }

    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            if (currentUser) {
                success();
                setUser(currentUser);
                setIsLoading(false);
            }
            else{
                faild();
            }
        })
        return () => { 
            unsubscribe();
         }
     },[])


    const authInfo = {
        user,
        google,
        createUserWithEmail,
        socialLogin,
        logInwithEmail,
        logOut,
        success,
        faild,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default GlobalAuthProv;