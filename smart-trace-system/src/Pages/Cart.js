import React from 'react';
import firebase from '../Components/Firebase';

const Cart = () => {
    //variables 
    
    //user function
    const user = firebase.auth().currentUser;

    return(
        <div className="cart">
            <h1>Shopping Cart</h1>
        </div>
    );
};
export default Cart;