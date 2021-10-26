import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import Popup from './Popup';

const SearchResults = ({name}) => {
    //variables
    const user = firebase.auth().currentUser;
    const [isOpenAdd, setIsOpenAdd] = useState(false);

    //a toggle function for popup
    const togglePopupAddToCart = () => {
        setIsOpenAdd(!isOpenAdd);
    };


      //add to cart function
      const addToCart = () => {
        const addRef = firebase.database().ref('Cart');
        
        const saveData = {
             userId: user.email,
             url: name.url,
             itemName: name.itemName,
             serialNumber: name.serialNumber,
             itemDescription: name.itemDescription,
             id: name.id,
             category: name.category,
        };
        addRef.push(saveData);
    };

    return(
        <div className="search-results">
            {isOpenAdd && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Item Added to Cart :)</p>
            </>}
            handleClose={togglePopupAddToCart}
            />}
            <img src={name.url} alt="product-image"/><br/>
            <h>Item: {name.itemName}</h><br/>
            <h>Serial Number : {name.serialNumber}</h><br/>
            <h>Description: {name.itemDescription}</h><br/>
            <button onClick={() => {
                addToCart();
                togglePopupAddToCart();
            }}>Add to Cart</button>
        </div>
    );
};
export default SearchResults;