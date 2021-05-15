import React from 'react';
import firebase from '../Components/Firebase';

const UserDetails = ({ name }) => {
    return(
        <div className="profile">
            <label>Username: {name.username}</label><br/>
            <label>Password: *****</label><br/>
            <label>ID Number: {name.idNumber}</label>
            <label>FirstName: {name.firstname}</label>
            <label>LastName: {name.lastname}</label>
            <label>StreetName: {name.address}</label>
        </div>
    );
};
export default UserDetails;