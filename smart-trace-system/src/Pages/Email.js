import React, { useState } from 'react';
import firebase from '../Components/Firebase';

const Email = () => {

    //variables
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    //a regex function
    const emailRegex = /\s+@\s+\.\s+/;

    //check user
    const user = firebase.auth().currentUser;

    //a validation function
    const validateEmail = (event) => {
        const email = event.target.value;
        if(emailRegex.test(email)){
            setIsValid(true);
            setMessage('Your email is pretty good!');
        }else{
            setIsValid(false);
            setMessage('Please work on your email!');
        }
    };

    return(
        <div className="container">
            <input type="email" placeholder="enter your email" className="email-input" onChange={validateEmail}/>

            {/*if the entered email is valid , the message will be blue, otherwise it will be re. */}
            <div className={`message ${isValid ? 'success' : 'error'}`}>
                {message}
            </div>
            <p>I'm the current user: {user.email}</p>
        </div>
    );
};
export default Email;