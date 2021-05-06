import React, { useState } from 'react';
import Popup from './Popup';

const PopupPage = () => {

    //variables
    const [isOpen, setIsOpen] = useState(false);
    
    //toggle function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <h1>Hello</h1>
            <input
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
            />
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Hope you had a great one!</p>
            </>}
            handleClose={togglePopup}
            />}
        </div> 
    );
};
export default PopupPage;