import React from 'react';
import firebase from '../Components/Firebase';

const UserDetails = ({ name }) => {
    return(
        <div className="profile">
            <br/>
            <img src={name.url} /><br/>
            <label>Username: {name.userId}</label><br/>
            <label>Password: *****</label><br/>
            <label>ID Number: {name.idNumber}</label><br/>
            <label>FirstName: {name.firstname}</label><br/>
            <label>LastName: {name.lastname}</label><br/>
            <label>Address: {name.address}</label><br/>
            
        </div>
    );
};
export default UserDetails;