import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import SerialNumberSearchResult from './ProductSearchResult';

const SerialNumberSearch = () => {
    //variables and functions
    const [serialNumber, setSerialNumber] = useState();
    const [productsList, setProductsList] = useState();
    //date and time
    const [date, setDate] = useState(Date);
    const user = firebase.auth().currentUser;

    //search function
    const handleSearch = () => {
        const retrieveRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber);
        retrieveRef.on('value', (snapshot) => {
        const products = snapshot.val();
        const productsList = [];

            for(let id in products){
                productsList.push({ id, ...products[id]});
            }
            console.log(productsList);
            setProductsList(productsList);
        },[])
    };

    // a function to simultaneously send a notification to the database
    const handleNotification = () => {
        const sendRef = firebase.database().ref('Notifications');

        const savingData = {
            Trigger: user.email,
            date,
            serialNumber,
           
        };
        sendRef.push(savingData);
    };

    //a function to send the notification to the owner using the serial number


    return(
        <div className="search-serial-number">
            <h1>Search by Serial Number</h1>
            <br/>
            <h6>**Add this security value at the end of the serial number:**</h6>
            <h5>\n</h5>
            <label>Serial Number :</label><br/>
            <input type="text" value={serialNumber} onChange={e=> setSerialNumber(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={() => {
                handleSearch();
                handleNotification();
            }}>Search</button>
            <br/>
            {productsList ? productsList.map((names, index) => <SerialNumberSearchResult name={names} key={index} />) : ''}
        </div>
    );
};
export default SerialNumberSearch;