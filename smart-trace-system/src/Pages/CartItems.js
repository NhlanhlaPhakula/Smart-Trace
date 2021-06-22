import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';

const CartItems = ({ names }) => {
    //variables
    const [totalPrice, setTotalPrice] = useState();
    const [priceList, setPriceList] = useState();

    //delete function from the cart table
    const removeItem = () => {
        const removeRef = firebase.database().ref('Cart').child(names.id);
        removeRef.remove();
    };

    //a function to calculate the total price of the products in the cart
    useEffect (() => {
        const totalRef = firebase.database().ref('Cart').orderByChild('price').equalTo(names.price);
        totalRef.on('value', (snapshot) => {
            const prices = snapshot.val();
            const priceList = [];
            for(let id in prices) {
                priceList.push({ id, ... prices[id]});
            }
            setPriceList(priceList);
            setTotalPrice(priceList);
            console.log('These are the prices:',priceList);
        });
        
    },[]);

    return(
        <div className="cartItems">
            <br />
            <h1>Cart Item</h1>
        
                <br/>
               <img src={names.url}/><br/>
               {names.itemName}<br/>
                <label>S/N:</label>{names.serialNumber}<br/>
                <label>Desciption: {names.itemDescription}</label><br/>
                <label>Price : {names.price}</label><br/>
            <button onClick={removeItem}>Remove</button>
            <button>CheckOut</button>
        </div>
    );
};
export default CartItems;