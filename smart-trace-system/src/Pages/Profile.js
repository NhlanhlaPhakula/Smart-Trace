import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import Users from './Users';
import Table from './Table';
import Picture from './Picture';
import { Link } from 'react-router-dom';
//import ProfileUploader from './ProfilePic';
import Popup from './Popup';

const Profile = () => {
    //const {email, setEmail} = props;

   // const[selectedFile, setSelectedFile] = useState();
    //const [Username, setUsername] = useState();
   // const [password, setPassword] = useState();
    const [idNumber, setIdNumber] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    //const [address, setAdress] = useState();
    const [houseNumber, setHouseNumber] = useState();
    const [streetName, setStreetName] = useState();
    const [streetType, setStreetType] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [postalCode, setPostalCode] = useState();
    const [nameList, setNameList] = useState();
    const [pictureList, setPictureList] = useState();
    const [phone,setPhone] = useState();

    //popup variables
    const [isOpen, setIsOpen] = useState(false);

    //a toggle function for a popup screen when user save profile info
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

    //clear input fields after submitting
    const clearInputs = () => {
        setIdNumber('');
        setHouseNumber('');
        setStreetName('');
        setStreetType('');
        setCity('');
        setState('');
        setPostalCode('');
        setFirstname('');
        setLastname('');
    };
    

    //a function to call user name
    const user = firebase.auth().currentUser;
    //const password = firebase.auth().currentUser;

    //a function to save the image into the database
    const saveData = () =>{
        const saveRef = firebase.database().ref('Users');

        const savingData = {
            userId:user.email,
            idNumber,
            phone,
            firstname,
            lastname,
            address:[houseNumber,streetName,streetType,city,state,postalCode],
            url,
        };
        saveRef.push(savingData);
    };


    //a function to display user data from database
    useEffect (() => {
        const retrieveRef = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        retrieveRef.on('value', (snapshot) => {
            const names = snapshot.val();
            const nameList = [];
            for(let id in names){
                nameList.push({ id, ... names[id] });
            }
            //console.log(nameList);
            setNameList(nameList);
        });
    }, []);

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
    };//yey! it worked finally

    /*//a function to download files
    useEffect(() => {
        const retrieveRef = firebase.storage().ref("images/app.jpg");
        retrieveRef.getDownloadURL().then(function(url){
            console.log(url);
            setUrl(url);
        });
    });//it works perfectly */


    console.log("image: ", image);

    //a function to display a saved file in firebase storage from react js
    
          
    return(
        <div className="profile">
           
            {/*<img className="image"/>
            <div className="profile-image">
                <img src="Images/defaultPic.jfif" alt=""/><br />
                <input type="file" onChange={fileSelectedHandler}/>
            </div>
             */}
             {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Successful!!!!!</p>
            </>}
            handleClose={togglePopup}
            />}
             <div className="profile-picture">
                {/*<ProfileUploader />*/}
                <div>
                    <Link className="link" to="/profile">My Profile</Link><br/>
                    <progress value={progress} max="100"/>
                    <h1>Hey a'll</h1>
                    <input type="file" onChange={handleChange}/>
                    <button onClick={handleUpload}>Upload Picture</button>
                    <br />
                    {url}
                    <br />
                    <img src={url || "http://via.placeholder.com/300x300"} alt="firebase-image" />
                </div>
             </div>
            <label>Username : {user.email}</label><br></br>
            <label>Password : {user.password}</label><br></br>
            <label>ID Number : </label><input type="number" value={idNumber} onChange={e=> setIdNumber(e.target.value)}/><br />
            <label>Phone : </label><input type="number" value={phone} onChange={e=> setPhone(e.target.value)}/><br/>
            <label>First Name : </label><input type="text" value={firstname} onChange={e=> setFirstname(e.target.value)}/><br />
            <label>Last Name : </label><input type="text" value={lastname} onChange={e=> setLastname(e.target.value)}/><br />
            <label>House Number : </label><input type="number" value={houseNumber} onChange={e=> setHouseNumber(e.target.value)}/><br />
            <label>Street Name : </label><input type="text" value={streetName} onChange={e=> setStreetName(e.target.value)}/><br />
            <label>Street Type: </label>
            <select value={streetType} onChange={e=> setStreetType(e.target.value)}>
                <option value="Avenue">Avenue</option>
                <option value="Court">Court</option>
                <option value="Drive">Drive</option>
                <option value="Junction">Junction</option>
                <option value="Place">Place</option>
                <option value="Road">Road</option>
                <option value="Square">Square</option>
                <option value="Street">Street</option>
            </select><br></br>
            <label>City : </label><input type="text" value={city} onChange={e=> setCity(e.target.value)}/><br />
            <label>State : </label><input type="text" value={state} onChange={e=> setState(e.target.value)}/><br />
            <label>Postal Code : </label><input type="number" value={postalCode} onChange={e=> setPostalCode(e.target.value)}/><br />

            {/*<br></br>
            <h1>List of Users</h1>
             {nameList ? nameList.map((name, index) => <Users name={name} key={index}/>) : ''}
            <br />
            <h1>Table of Possessions</h1>
            {nameList ? nameList.map((name, index) => <Table name={name} key={index}/>) : ''}
            {pictureList ? pictureList.map((names, index) => <Picture names={names} key={index} />) : ''}*/}
            <button onClick={()=>{
                saveData();
                togglePopup();
            }}>Upload</button>
            <br />
            {/*<h1>{url}</h1>*/} 
            {/*<Link to="/details"><img src={url}/></Link>*/}
            <br/>

        </div>
    );
};
export default Profile;