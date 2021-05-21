import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import Popup from './Popup';
import {Link} from 'react-router-dom';

const Report = () => {
    //variables
    const [category, setCategory] = useState();
    const [productName, setProductName] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [serialNumber, setSerialNumber] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState(Date);
    //user function
    const user = firebase.auth().currentUser;

    //popup toggle function
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    //a function to save data into the database
    const saveData = () => {
        const saveRef = firebase.database().ref('Reports');

        const savingData = {
            userId: user.email,
            email: user.email,
            date,
            category,
            productName,
            firstName,
            lastName,
            serialNumber,
            description,
        };
        saveRef.push(savingData);
    };

    return(
        <div className="report-page">
            <h1>Report Page</h1>
            <Link to="/blacklist">myBlacklistedItems</Link>
            <div>
                {
                    isOpen && <Popup
                        content={<>
                            <b>Smart Trace</b>
                            <p>You've Successfully Reported a missing item!!</p> 
                        </>}
                    handleClose={togglePopup}
                    />
                }
                <label>Product Name</label>
                <input type="text" value={productName} required onChange={e=> setProductName(e.target.value)} /><br/>
                <label>Product Type</label>
                <select value={category} required onChange={e=> setCategory(e.target.value)}>
                    <option></option>
                    <option value="Camera">Camera</option>
                    <option value="Desktop Computer">Desktop Computer</option>
                    <option value="DvD Player">DvD Player</option>
                    <option value="Fan">Fan</option>
                    <option value="Game Console">Game Console</option>
                    <option value="iPad">iPad</option>
                    <option value="iPod">iPod</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Mobile Phone">Mobile Phone</option>
                    <option value="Oven">Oven</option>
                    <option value="Printer">Printer</option>
                    <option value="Radio">Radio</option>
                    <option value="Television">Television</option>
                    <option value="Washing Machine">Washing Machine</option>
                </select><br/>
                <label>Owner' FirstName : </label>
                <input type="text" value={firstName} required onChange={e=> setFirstName(e.target.value)} /><br/>
                <label>Owner' LastName : </label>
                <input type="text" value={lastName} required onChange={e=> setLastName(e.target.value)} /><br/>
                <label>Product Serial Number :</label>
                <input type="text" value={serialNumber} required onChange={e=> setSerialNumber(e.target.value)} /><br/>
                <label>Description : </label>
                <textarea value={description} required onChange={e=> setDescription(e.target.value)} /><br/>
                <button onClick={() => {
                    saveData();
                    togglePopup();
                }}>Report</button>
            </div>

        </div>
    );
};
export default Report;