import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { ChatEngine } from "react-chat-engine";
import axios from 'axios';

// Navbar
import Navbar from './Navbar';

// styles
import styles from "./Chats.module.css";

// context
import { AuthContext } from '../context/AuthContextProvider';

const Chats = () => {
    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/")
    }

    useEffect(() => {
        if(!user) {
            history.push("/")
            return
        }

        axios.get("https://api.chatengine.io/users/me" , {
            headers: {
                "project-id": "9aed24fb-01d8-460c-945b-1922499a9f9c",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch( ()=> {
            let formData = new FormData();
            formData.append('email', user.email);
            formData.append('username', user.email);
            formData.append('secret', user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formData.append('avatar', avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/", formData, {
                        headers: {
                            "private-key": "76c2657a-2720-4978-840f-eceaa851de91"
                        }
                    })
                    .then(() => {
                        setLoading(false)
                    })
                    .catch((error) => console.log(error))
                })
        })
    }, [user, history])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }

    if(!user || loading) {
        return "Loading..."
    }

    return (
        <div className={styles.container}>
            <Navbar logOutHandler={logoutHandler} />
            <ChatEngine 
                height="90vh"
                projectID="9aed24fb-01d8-460c-945b-1922499a9f9c"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chats;