import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, email, password } from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();

//Providers 
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
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
    //For login with github
    function signInWithGithub() {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    //for login with facebook 
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    //sign in with email and password

    const signInWithEmailandPass = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
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
        signInWithEmailandPass,
        signInWithFacebook,
        signInWithGithub,
        logOut,
        signInWithGoogle,
        user,
        error,
    };
}



export default useFirebase;