import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import Users from './Users';
import Table from './Table';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const {email, setEmail} = props;

    const[selectedFile, setSelectedFile] = useState();
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
    const [nameList, setNameList] = useState(email);

    //clear input fields after submitting
    const clearInputs = () => {
        setIdNumber('');
        setHouseNumber('');
        setStreetName('');
        setStreetType('');
        setCity('');
        setState('');
        setPostalCode('');
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
            firstname,
            lastname,
            address:[houseNumber,streetName,streetType,city,state,postalCode],
        };
        saveRef.push(savingData);
        clearInputs();
    };

    const  fileSelectedHandler  = (event) => {
            setSelectedFile(event.target.files[0]);
        };

    //a function to fetch data from the database so we can have it displayed into our system
    useEffect (() => {
        const retrieveRef = firebase.database().ref('Users');
        retrieveRef.on('value', (snapshot) => {
            const names = snapshot.val();
            const nameList = [];
            for(let id in names){
                nameList.push({ id, ... names[id] });
            }
            setNameList(nameList);
        });
    }, []);

    return(
        <div className="profile">
           
            <img className="image"/>
            <div className="profile-image">
                <img src="Images/defaultPic.jfif" alt=""/><br />
                <input type="file" onChange={fileSelectedHandler}/>
            </div>
            <label>Username : {user.email}</label><br></br>
            <label>Password : {user.password}</label>
            <br></br>
            <label>ID Number : </label><input type="number" value={idNumber} onChange={e=> setIdNumber(e.target.value)}/>
            <label>First Name : </label><input type="text" value={firstname} onChange={e=> setFirstname(e.target.value)}/>
            <label>Last Name : </label><input type="text" value={lastname} onChange={e=> setLastname(e.target.value)}/>
            <label>House Number : </label><input type="number" value={houseNumber} onChange={e=> setHouseNumber(e.target.value)}/>
            <label>Street Name : </label><input type="text" value={streetName} onChange={e=> setStreetName(e.target.value)}/>
            <label>Street Type: </label>
            <select value={streetType} onChange={e=> setStreetType(e.target.value)}>
                <option value="">Avenue</option>
                <option value="Court">Court</option>
                <option value="Drive">Drive</option>
                <option value="Junction">Junction</option>
                <option value="Place">Place</option>
                <option value="Road">Road</option>
                <option value="Square">Square</option>
                <option value="Streer">Street</option>
            </select>
            <label>City : </label><input type="text" value={city} onChange={e=> setCity(e.target.value)}/>
            <label>State : </label><input type="text" value={state} onChange={e=> setState(e.target.value)}/>
            <label>Postal Code : </label><input type="number" value={postalCode} onChange={e=> setPostalCode(e.target.value)}/>

            <br></br>
            <h1>List of Users</h1>
            {nameList ? nameList.map((name, index) => <Users name={name} key={index}/>) : ''}
            <br />
            <h1>Table of Possessions</h1>
            {nameList ? nameList.map((name, index) => <Table name={name} key={index}/>) : ''}
            <button onClick={saveData}>Upload</button>
            <Link to="/">Learn More</Link>
        </div>
    );
};
export default Profile;