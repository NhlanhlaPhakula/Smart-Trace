import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import Users from './Users';
import Table from './Table';
import TableList from '../Components/TableList';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const {email, setEmail} = props;

    const[selectedFile, setSelectedFile] = useState('');
    const [Username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [idNumber, setIdNumber] = useState('');
        const [firstname, setFirstname] = useState('');
        const [address, setAdress] = useState('');
        const [nameList, setNameList] = useState(email);
    //a function to save the image into the database
    const saveData = () =>{
        const saveRef = firebase.database().ref('Products');

        const savingData = {
            selectedFile,
            complete: false,
        };
        saveRef.push(savingData);
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
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            <h1>Hey</h1>
            <img className="image"/>
            <div className="profile-image">
                <img src="Images/defaultPic.jfif" alt=""/><br />
                <input type="file" onChange={fileSelectedHandler}/>
            </div>
            <label>Username : </label><input type="text"/>
            <label>Password : </label><input type="text"/>
            <br></br>
            <label>ID Number : </label><input type="text"/>
            <label>First Name : </label><input type="text"/>
            <label>Last Name : </label><input type="text"/>
            <label>Address : </label><input type="text"/>
            <label>Code : </label><input type="text"/>
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