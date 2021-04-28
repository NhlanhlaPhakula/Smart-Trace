import React, { useState } from 'react';
import firebase from '../Components/Firebase';

const Registration = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //registration function
    const saveUser = () =>{
        const saveRef = firebase.database().ref('Users');
        const savingData = {
            username,
            password,
        };
        saveRef.push(savingData);
    };

    return(
        <div className="profile">
            <input type="text" value={username} placeholder="username" onChange={e => setUsername(e.target.value)}/>
            <input type="text" value={password} placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={saveUser}>Save</button>
        </div>
    );
};
export default Registration;