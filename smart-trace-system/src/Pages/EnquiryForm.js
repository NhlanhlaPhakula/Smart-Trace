import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import Popup from './Popup';

const EnquiryForm = () => {
    //variables and functions
    const user = firebase.auth().currentUser;
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [date, setDate] = useState(Date);

    //popup function
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    //a function to send enquiries into the database
    const saveData = () => {

        const saveRef = firebase.database().ref('Enquiries');
        
        const savingData = {
            userId: user.email,
            email: user.email,
            subject,
            message,
            date,
        };
        saveRef.push(savingData);
    };

    return(
        <div className="enquiry-form">
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Thank you, we'll be in touch!</p>
            </>}
            handleClose={togglePopup}
            />
            }
                <h1>Enquiy Form</h1><br/>
                <label>Username : {user.email}</label><br/>
                <label>Email : {user.email}</label><br/>
                <h2>Enquiry</h2><br/>
                <label>Subject:</label><input type="text" required value={subject} onChange={e=> setSubject(e.target.value)}  /><br/>
                <label>Message:</label><br/>
                <textarea value={message} required onChange={e=> setMessage(e.target.value)}  /><br/>
                <button onClick={()=> {
                    saveData();
                    togglePopup();
                }}>Send</button>
        </div>
    );
};
export default EnquiryForm;