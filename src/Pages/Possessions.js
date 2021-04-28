import React, { useState } from 'react';
import firebase from '../Components/Firebase';

const Possessions = () => {
    
    //variables
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    
    return(
        <div>
            <label>Item Name: </label><input type="text" />
            <label>Item Description: </label><input type="text" />
            <label>Image: </label><input type="file" />
        </div>
    );
};
export default Possessions;