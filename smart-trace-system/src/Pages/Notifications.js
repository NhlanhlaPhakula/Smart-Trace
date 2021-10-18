import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import MessageList, { MessagesList } from './Messages';
import NotificationDetails from './NotificationDetails';

const Nofications = () => {
    //variables and functions
    const user = firebase.auth().currentUser;
    const [notificationList, setNotificationList] = useState();
    const [notificationStateList, setNotificationStateList] = useState();
    const [messagesList,setMessagesList] = useState();

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

    // a function to display this notification related their transactions
    useEffect (() => {
        const retrieveRef = firebase.database().ref('Transcript').orderByChild('userId').equalTo(user.email);
        retrieveRef.on('value',(snapshot) => {
            const notification = snapshot.val();
            const notificationStateList = [];
            for(let id in notification) {
                notificationStateList.push({ id, ... notification[id]});
            }
            setNotificationStateList(notificationStateList);
            console.log('New Messages:',notificationStateList);
        });
    },[]);

    // a function to display user notifications of their items purchsed
    useEffect(() =>{
        const findRef = firebase.database().ref('Notifications').orderByChild('userId').equalTo(user.email);
        findRef.on('value',(snapshot) => {
            const messages = snapshot.val();
            const messagesList = [];
            for(let id in messages) {
                messagesList.push({ id, ... messages[id]});
            }
            setMessagesList(messagesList);
        });
    },[]);

    return(
        <div className="notifications">
            <br/>
            <h1>NOTIFICATIONS</h1>
            {notificationList ? notificationList.map((names, index) => <NotificationDetails name={names} key={index} />) : ''}
            {notificationStateList ? notificationStateList.map((name, index) => <MessageList  name={name} key={index} />) : ''}
            {messagesList ? messagesList.map((names,index) => <MessagesList names={names} key={index}/>):''}
        </div>
    );
};
export default Nofications;