import React from 'react';
import firebase from '../Components/Firebase';

const Users = ({ name }) =>{

    //a delete function 
    const deleteUser = () => {
        const deleteRef = firebase.database().ref('Users').child(name.id);
        deleteRef.remove();
    };
    
    //a complete function 
    const completeUser = () =>{
        const completeRef = firebase.database().ref('Users').child(name.id);
        completeRef.update({
            complete: !name.complete,
        });
    };

    return(
        <div>
            <h1>{name.name}</h1>
            <button onClick={deleteUser}>Delete</button>
            <button onClick={completeUser}>Complete</button>
        </div>
    );
};
export default Users;