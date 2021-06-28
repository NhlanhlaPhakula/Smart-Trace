import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';

const CartItems = ({ names }) => {
    //variables
    const [totalPrice, setTotalPrice] = useState(0);
    const [priceList, setPriceList] = useState();
    const [total, setTotal] = useState();


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
            const total = names.price;
            console.log('Price:', total);
            setTotalPrice(total);
            /*const totalPrice = total + names.price;
            setTotalPrice(totalPrice);
            console.log('Total Price: R', totalPrice);*/
            var sum = 0;
            for(var i = 0; i<=priceList.length; i++){
                sum = total + names.price;
            }
            console.log('sum:', sum);
         
            setPriceList(priceList);
            console.log('These are the prices:',priceList);

            const arr = [total];
            const addition = arr.reduce((a, b) => a + b, 0);
            console.log("Addition:", addition);
            
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
        </div>
    );
};
export default CartItems;