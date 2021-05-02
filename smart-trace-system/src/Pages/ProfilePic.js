import React, { useState } from 'react';
import { render } from 'react-dom';
import firebase from '../Components/Firebase';

const ProfileUploader = () => {
    //variables
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);

    //user function
    const user = firebase.auth().currentUser;

    //handle change function
    const handleChange = e => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const saveRef = firebase.storage().ref(`images/${image.name}`).put(image);
        saveRef.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                firebase.storage()
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    setUrl(url);
                });
            }
        );
    };//yey! it worked finally


    console.log("image: ", image);

    return(
        <div>
            <progress value={progress} max="100"/>
            <h1>Hey a'll</h1>
            <input type="file" onChange={handleChange}/>
            <button onClick={handleUpload}>Upload</button>
            <br />
            {url}
            <br />
            <img src={url || "http://via.placeholder.com/300x300"} alt="firebase-image" />
        </div>
    );
};
export default ProfileUploader;