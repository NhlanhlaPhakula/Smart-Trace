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
            <h1>
                {names.id}
                {names.serialNumber}
            </h1>
            <button>Pay</button>
            <button onClick={removeItem}>Remove</button>
        </div>
    );
};
export default CartItems;