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

    //a function to handle sale status
    const handleSaleStatus = () => {
        const statusRef = firebase.database().ref('Products').child(name.id);
        statusRef.update({
            onSale: true,
        });
    };

    /*const handleReport = () => {
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
    };*/

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

    //a function for change of sale status
    /*const handleStatusChange = () => {
        const statusChange = firebase.database().ref('Products').child(name.id);
        statusChange.update({
            onSale: true,
        });
    };*/

    // a function for change of ownership
    const handleChangeOfOwnership = () => {
        const changeRef = firebase.database().ref('Products').child(name.id);
        changeRef.update({
            userId: user.email,
        });
    };
 

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

    //a function to  send a message to the owner of the product of their sold item
    const handleReport = () => {
        const reportRef = firebase.database().ref('Notifications');

        const saveData = {
            userId: name.userId,
            url: name.url,
            transactionDate: date,
            itemName: name.itemName,
            buyer: user.email,
            category: name.category,
            price: name.price,
            serialNumber: name.serialNumber,
            itemDescription: name.itemDescription,
        };
        reportRef.push(saveData);
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
            <br/>
            <br/>
            <img src={name.url}/><br/>
            {/*<h1>Item Id: {name.id}</h1><br/>*/}
            <h3>Name: {name.itemName}</h3><br/>
            <h3>Description: {name.itemDescription}</h3><br/>
            {/*<h1>Report: {name.report}</h1><br/>
            <h1>Stolen: {name.stolen}</h1><br/>*/}
            <h3>Owner: {name.userId}</h3><br/>
            <button onClick={() => {
                togglePopup();
                handlePurchase();
                handleSaleStatus();
                handleChangeOfOwnership();
                handleReport();
            }}>Buy</button>
            <br/>
            <br/>
        </div>
    );
};
export  default SerialNumberSearchResult;