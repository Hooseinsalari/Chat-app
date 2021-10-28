import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

// image
import google from "../assets/google.svg";

// styles
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h2 className={styles.title}>Welcome to Hosagram</h2>
                <button 
                    className={styles.button}
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >
                    <img className={styles.logo} src={google} alt="google" /> Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;