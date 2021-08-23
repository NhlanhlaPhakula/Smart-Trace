import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Components/Firebase';
import UserDetails from './ProfileDetails';

const UserProfile = () => {
    //variables
    const [userInfo, setUserInfo] = useState();

    //user function
    const user = firebase.auth().currentUser;
    const [userId, setUserId] = useState(user);

    //a function to call all of the currently logged in user details
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Users').orderByChild('userId').equalTo(userId.email);
        retrieveRef.on('value', (snapshot) => {
            const information = snapshot.val();
            const userInfo = [];
            if(userId === user){
                for(let id in information){
                    userInfo.push({ id, ... information[id]});
                }
                console.log(userInfo);
                setUserInfo(userInfo);
            }else{
                console.log("User info could not be accessed :(");
                // put a link to create profile page to allow the user to create their own profile

            }
        });
    },[]);

    return(
        <div className="user-info">
            {userInfo ? userInfo.map((names, index) => <UserDetails name={names} key={index}/>) : ''}
            <Link className="link" to="/profileEdit">Edit</Link>  <Link className="link" to="/userProfile">Create</Link>
        </div>
    );
};
export default UserProfile;