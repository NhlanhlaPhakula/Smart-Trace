import React, { useEffect, useState } from 'react';
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
        const retrieveRef = firebase.database().ref('Users');
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
            }
        });
    },[]);

    return(
        <div className="user-info">
            {userInfo ? userInfo.map((names, index) => <UserDetails name={names} key={index}/>) : ''}
        </div>
    );
};
export default UserProfile;