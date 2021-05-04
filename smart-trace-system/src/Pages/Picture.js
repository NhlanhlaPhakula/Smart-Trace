import React, { useState } from 'react';
import firebase from '../Components/Firebase';

const Picture = ({ names }) => {
    //variables
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState('');

    const handleUpdate = () => {
        const updateRef = firebase.storage().ref(`images/${image.name}`).put(image);
        updateRef.on(
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
    };


    console.log("image", image);

    return(
        <div className="picture">
            <h1>Profile picture</h1>
            <img src={names.name} alt="profile-picture"/>
            <button onClick={handleUpdate} >Update</button>
            <button>Delete</button>
            <img src={url} />
        </div>
    );
};
export default Picture;