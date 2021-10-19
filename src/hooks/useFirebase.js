import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();

//Providers 
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");




    //For google sign-in
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch(error => {
                setError(error.message);
            });
    }
    //get the currently sign-inned user 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return
    }, []);
    //this is for sign-out
    const logOut = () => {
        signOut(auth)
            .then((resutl) => {
                setUser({});
            }).catch((error) => {
                setError(error.message);
            });
    }
    return {
        logOut,
        signInWithGoogle,
        user,
        error,
    };
}



export default useFirebase;