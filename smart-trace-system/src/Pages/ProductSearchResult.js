import React, { useEffect, useState } from 'react';
import firebase  from '../Components/Firebase';
import Popup from './Popup';

const SerialNumberSearchResult = ({ name }) => {

    const user = firebase.auth().currentUser;
    const [date, setDate] = useState(Date);

    //popup function & variables
    const [isOpen,setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

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

    useEffect(() => {
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
    });

    //handle purchase function
    //a function for saving purchased items in the database
    const handlePurchase = () => {
        const saveRef = firebase.database().ref('Purchase');

        const savingData = {
            userId: user.email,
            url:name.url,
            date,
            itemName: name.itemName,
            serialNumber: name.serialNumber,
            itemDescription: name.itemDescription,
            category: name.category,
            price: name.price,
        };
        saveRef.push(savingData);
    };

    return(
        <div className="serial-search-results">
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Purchased Successfully :)</p>
            </>}
            handleClose={togglePopup}
            />
            }
            <img src={name.url}/><br/>
            <h1>Item Id: {name.id}</h1><br/>
            <h1>Item Name: {name.itemName}</h1><br/>
            <h1>Item Description: {name.itemDescription}</h1><br/>
            <h1>Report: {name.report}</h1><br/>
            <h1>Stolen: {name.stolen}</h1><br/>
            <h1>Owner: {name.userId}</h1><br/>
            <button onClick={() => {
                togglePopup();
                handlePurchase();
            }}>Buy</button>
        </div>
    );
};
export  default SerialNumberSearchResult;