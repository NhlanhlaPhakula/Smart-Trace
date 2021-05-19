import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import NotificationDetails from './NotificationDetails';

const Nofications = () => {
    //variables and functions
    const user = firebase.auth().currentUser;
    const [notificationList, setNotificationList] = useState();
    //function to display all notifications automatically
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Notifications').orderByChild('ownerId').equalTo(user.email);
        retrieveRef.on('value', (snapshot) => {
            const notifications = snapshot.val();
            const notificationList = [];
            for(let id in notifications) {
                notificationList.push({ id, ... notifications[id]});
            }
            console.log(notificationList);
            setNotificationList(notificationList);
        });
    },[]);

    return(
        <div className="notifications">
            <br/>
            <h1>NOTIFICATIONS</h1>
            {notificationList ? notificationList.map((names, index) => <NotificationDetails name={names} key={index} />) : ''}
        </div>
    );
};
export default Nofications;