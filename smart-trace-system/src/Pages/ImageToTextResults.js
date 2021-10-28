import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import Popup from './Popup';
//serial number search reasults

const SerialNumberResults = ({names}) => {
    //popup variables
    const [isOpen,setIsOpen] = useState(false);

    //variables for saving bouught items in the database
    const [date,setDate] = useState(Date);
    const user = firebase.auth().currentUser;

    //popup function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    ////a function for saving purchased items in the database
    const handlePurchase = () => {
        const saveRef = firebase.database().ref('Purchase');

        const savingData = {
            userId: user.email,
            url:names.url,
            date,
            itemName: names.itemName,
            serialNumber: names.serialNumber,
            itemDescription: names.itemDescription,
            category: names.category,
            price: names.price,
        };
        saveRef.push(savingData);
    };

    //a function for change of sale status
    const handleStatusChange = () => {
        const statusChange = firebase.database().ref('Products').child(names.id);
        statusChange.update({
            onSale: true,
        });
    };

    // a function for change of ownership
    const handleChangeOfOwnership = () => {
        const changeRef = firebase.database().ref('Products').child(names.id);
        changeRef.update({
            userId: user.email,
        });
    };

    // a function to send a message to the owner of their bought item
    const handleMessage = () => {
        const sendRef = firebase.database().ref('Notifications');

        const saveData = {
            category: names.category,
            itemName: names.itemName,
            price: names.price,
            serialNumber: names.serialNumber,
            userId: names.userId,
            url: names.url,
            transactionDate: date,
            buyer: user.email,
        };
        sendRef.push(saveData);
    };

    return(
        <div>
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Purchased Successfully :)</p>
            </>}
            handleClose={togglePopup}
            />
            }
            <img src={names.url} className="logo" alt="image"/>
            <h6>OwnerId: {names.userId}</h6>
            <h6>Item: {names.itemName}</h6>
            <h6>Description: {names.itemDescription}</h6>
            <h6>{names.report}</h6>
            <h6>Price: {names.price}</h6>
            <button onClick={() => {
                handlePurchase();
                togglePopup();
                handleStatusChange();
                handleChangeOfOwnership();
                handleMessage();
            }}>Buy</button>
        </div>
    );
};

export default SerialNumberResults;