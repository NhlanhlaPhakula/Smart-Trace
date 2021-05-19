import React, { useState } from 'react';
import firebase  from '../Components/Firebase';

const SerialNumberSearchResult = ({ name }) => {

    const user = firebase.auth().currentUser;
    const [date, setDate] = useState(Date);

    //buy function
    const handleBuy = () => {
        const saveRef = firebase.database().ref('Purchase').child(name.id);

        const saveData = {
            buyerId: user.email,
            name,
            
        };
        saveRef.push(saveData);
    };

    const handleReport = () => {
        const reportRef = firebase.database().ref('Notifications');
        
        const saveData = {
            buyerId: user.email,
            ownerId: name.userId,
            message: "One of your possessions is being scanned and searched somewhere out there, and below are the product details",
            date,
            itemName: name.itemName,
            itemDescription: name.itemDescription,
    
        };
        reportRef.push(saveData);
    };

    return(
        <div className="serial-search-results">
            <img src={name.url}/><br/>
            <h1>Item Id: {name.id}</h1><br/>
            <h1>Item Name: {name.itemName}</h1><br/>
            <h1>Item Description: {name.itemDescription}</h1><br/>
            <h1>Report: {name.report}</h1><br/>
            <h1>Stolen: {name.stolen}</h1><br/>
            <h1>Owner: {name.userId}</h1><br/>
            <button onClick={() => {
                handleReport();
            }} >Buy</button>
        </div>
    );
};
export  default SerialNumberSearchResult;