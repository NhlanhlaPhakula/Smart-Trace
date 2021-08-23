import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Components/Firebase';

const ProfileEditDetails = ({details}) => {
    //variables 
    const user = firebase.auth().currentUser;
    const [idNumber, setIdNumber] = useState(details.idNumber);
    const [firstname, setFirstname] = useState(details.firstname);
    const [lastname, setLastname] = useState(details.lastname);
    const [houseNumber, setHouseNumber] = useState(details.address[0]);
    const [streetName, setStreetName] = useState(details.address[1]);
    const [streetType, setStreetType] = useState(details.address[2]);
    const [city, setCity] = useState(details.address[3]);
    const [state, setState] = useState(details.address[4]);
    const [postalCode, setPostalCode] = useState(details.address[5]);
    
    //a popup function variable
    const [isOpen, setIsOpen] = useState(false);

    //popup toggle function for when the user save/update their profile
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    //image variables
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);

    //handle change function
    const handleChange = e => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };

    //a function to upload the image into images folder in firebase storage
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
    };

    console.log("image: ", image);

    return(
        <div className="profile">
            <div className="profile-picture">
                <div>
                    <Link className="link" to="/profile">My Profile</Link><br/>
                    <progress value={progress} max="100" /><br/>
                    <img src={details.url || "http://via.placeholder.com/300x300"} alt="firebase-image" /><br/>
                    <h1>{user.email}</h1><br/>
                    <input type="file" onChange={handleChange} />
                    <button onClick={handleUpload}>Upload Picture</button>
                    <br/>
                    {url}
                    <br/>
                </div>
            </div>
            <label>Username : {details.userId}</label><br/>
            <label>Password : {user.password}</label><br/>
            <label>ID Number :</label><input type="text" value={idNumber} onChange={e=> setIdNumber(e.target.value)}></input><br/>
            <label>First Name : </label><input type="text" value={firstname} onChange={e=> setFirstname(e.target.value)}></input><br/>
            <label>Last Name : </label><input type="text" value={lastname}  onChange={e=> setLastname(e.target.value)}></input><br/>
            <label>House Number : </label><input type="text" value={houseNumber} onChange={e=> setHouseNumber(e.target.value)}></input><br/>
            <label>Street Name : </label><input type="text" value={streetName} onChange={e=> setStreetName(e.target.value)}></input><br/>
            <label>Street Type : </label><select value={streetType} onChange={e=>streetType(e.target.value)}><br/>
                <option value={details.address}>{details.address[2]}</option>
                <option value="Avenue">Avenue</option>
                <option value="Court">Court</option>
                <option value="Drive">Drive</option>
                <option value="Junction">Junction</option>
                <option value="Place">Place</option>
                <option value="Road">Road</option>
                <option value="Square">Square</option>
                <option value="Street">Street</option>
            </select><br/>
            <label>City : </label><input type="text" value={city} onChange={e=> setCity(e.target.value)}></input><br/>
            <label>State : </label><input type="text" value={state} onChange={e=> setState(e.target.value)}></input><br/>
            <label>Postal Code : </label><input type="text" value={postalCode} onChange={e=> setPostalCode(e.target.value)}></input><br/><br/>
            <button onClick={() => {

            }}>Save</button><br></br><br></br>
        </div>
    );
};
export default ProfileEditDetails;