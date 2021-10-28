import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { ChatEngine } from "react-chat-engine";

// Navbar
import Navbar from './Navbar';

// styles
import styles from "./Chats.module.css";

const Chats = () => {

    const history = useHistory();

    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/")
    }
    return (
        <div className={styles.container}>
            <Navbar logOutHandler={logoutHandler} />
            <ChatEngine 
                height="90vh"
                projectID="9aed24fb-01d8-460c-945b-1922499a9f9c"
                userName="."
                userSecret="."
            />
        </div>
    );
};

export default Chats;