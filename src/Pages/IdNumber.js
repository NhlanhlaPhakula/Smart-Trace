import React, { useState } from 'react';

const IdNumber = () =>{

    //variables
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    //ID number regex
    const idRegex = /[0-9]{2}\+[0][1-9]|[1][0-2][0-2][0-9]+[0-9]{4}\+[0]|[1]+[8]+[0-9]/;
    //function
    const validateID = (event) => {
        const id = event.target.value;
        if(idRegex.test(id)){
            setIsValid(true);
            setMessage('Your ID number id valid!');
        }else{
            setIsValid(false);
            setMessage('Please enter a valid ID number!');
        }
    };

    return(
        <div className="container">
            <input type="text" placeholder="enter ID number" className="email-input" onChange={validateID}/>

            {/*if the entered id number is valid, the message will be blue, otherwise it will be red.*/}
            <div className={`message ${isValid ? 'success' : 'error'}`}>
                {message}
            </div>
        </div>
    );
};
export default IdNumber;