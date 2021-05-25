import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import Popup from './Popup';

const Payment = () => {
    //variables and functions 
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [nameOnCard, setNameOnCard] = useState();
    const [securityCode, SetSecurityCode] = useState();
    const user = firebase.auth().currentUser;
    const [isOpen, setIsOpen] = useState(false);
    const [cardDetailsList, setCardDetailsList] = useState();

    //toggle function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    //function to save data in the database
    const handleSave = () => {
        const saveRef = firebase.database().ref('Card');

        const savingData = {
            userId: user.email,
            month,
            year,
            cardNumber,
            nameOnCard,
            securityCode,
        };
        saveRef.push(savingData);
    };

    //a function to fetch user card info from the database
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Card').orderByChild('userId').equalTo(user.email);
        retrieveRef.on('value', (snapshot) => {
            const details = snapshot.val();
            const cardDetailsList = [];
            for (let id in details) {
                cardDetailsList.push({ id, ... details[id]});
            }
            console.log(cardDetailsList);
            setCardDetailsList(cardDetailsList);
        });
    },[]);
    
    return(
        <div className="payment">
            <h1>Payment Card</h1>
            <label>Card Number</label><br/>
            <input type="text" required value={cardNumber} onChange={e=> setCardNumber(e.target.value)} /><br/>
            <label>Name On Card</label><br/>
            <input type="text" required value={nameOnCard} onChange={e=> setNameOnCard(e.target.value)} /><br/>
            <label>Expiration Date</label><br/>
            <select value={month} required onChange={e=> setMonth(e.target.value)}>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <select value={year} required onChange={e=> setYear(e.target.value)}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            </select><br/>
            <label>CVV Code</label><br/>
            <input type="text" required value={securityCode} onChange={e=> SetSecurityCode(e.target.value)} /><br/>
            <button onClick={()=> {
                handleSave();
                togglePopup();
            }}>Save Card</button><br/>
            {isOpen && <Popup 
            content={<>
                <b>Smart Trace</b>
                <p>Card details saved successfully!!</p>
            </>}
            handleClose={togglePopup}
        />}
        </div>
    );
};
export default Payment;