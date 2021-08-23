import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import ProfileEditDetails from './ProfileEditDetails';

const ProfileEdit = () => {
    //variables
    const user = firebase.auth().currentUser;
    const [userInfoList, setUserInfoList] = useState();

    useEffect(() => {
        const retrieveRef = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        retrieveRef.on('value', (snapshot) => {
            const userInfo = snapshot.val();
            const userInfoList = [];
            for(let id in userInfo) {
                userInfoList.push({ id, ... userInfo[id]});
            }
            console.log('User Details:', userInfoList);
            setUserInfoList(userInfoList);
        });
    },[]);

    return(
        <div>
            <h1 className="profile">Profile</h1>
            {userInfoList ? userInfoList.map((details, index) => <ProfileEditDetails details={details} key={index}/>) : ''}
        </div>
    );
};
export default ProfileEdit;