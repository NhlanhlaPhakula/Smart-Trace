import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import SerialNumberSearchResult from './ProductSearchResult';

const SerialNumberSearch = () => {
    //variables and functions
    const [serialNumber, setSerialNumber] = useState();
    const [productsList, setProductsList] = useState();
    const [itemsList,setItemsList] = useState();
    //date and time
    const [date, setDate] = useState(Date);
    const user = firebase.auth().currentUser;

    //search function
   /* const handleSearch = () => {
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
    };*/

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

    const handleFind = () => {
    
        console.log('Serial Number:',serialNumber);
        const str = serialNumber + '\n';
        console.log('Concatenated String:',str);
        const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(str);
        findRef.on('value',(snapshot) => {
            const item = snapshot.val();
            const productsList = [];
            for(let id in item) {
                productsList.push({id,...item[id]});
            }
            setProductsList(productsList);
            console.log('Results:',productsList);
        },[]);
    };

    //a function to send the notification to the owner using the serial number

    /*useEffect (() => {
        const saveRef = firebase.database().ref('AnalyticsData');

        const serialNumber = "147852369";
        const str = serialNumber + '\n';
        
        const savingData = {
            date,
            Trigger: user.email,
            serialNumber: str,
        };
        saveRef.push(savingData);
    });*/


    return(
        <div className="search-serial-number">
            <h1>Search by Serial Number</h1>
            <br/>
            <label>Serial Number :</label><br/>
            <input type="varchar" value={serialNumber} onChange={e=> setSerialNumber(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={() => {
                {/*handleSearch();*/}
                handleNotification();
                handleFind();
            }}>Search</button>
            <br/>
            {productsList ? productsList.map((names, index) => <SerialNumberSearchResult name={names} key={index} />) : ''}
        </div>
    );
};
export default SerialNumberSearch;