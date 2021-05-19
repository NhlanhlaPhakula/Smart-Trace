import React from 'react';
import firebase from '../Components/Firebase';

const CartItems = ({ names }) => {
    //pay function

    //delete function from the cart table
    const removeItem = () => {
        const removeRef = firebase.database().ref('Cart').child(names.id);
        removeRef.remove();
    };
    return(
        <div className="cartItems">
            <br />
            <h1>Cart Item</h1>
        
                <br/>
               <img src={names.url}/><br/>
               {names.itemName}<br/>
                <label>S/N:</label>{names.serialNumber}<br/>
                <label>Desciption: {names.itemDescription}</label><br/>
                <label>Price :</label><br/>
            <button>Pay</button>
            <button onClick={removeItem}>Remove</button>
        </div>
    );
};
export default CartItems;