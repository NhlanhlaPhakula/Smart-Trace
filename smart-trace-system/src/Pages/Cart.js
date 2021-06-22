import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import CartItems from './CartItems';
import Merger from './Merger';

const Cart = () => {
    //variables 
    const [productsList, setProductsList] = useState();
    //user function
    const user = firebase.auth().currentUser;

    //const [userId, setUserId] = useState(user);

    //a function to call to call our products
    useEffect (() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('userId').equalTo(user.email);
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const productsList = [];
            for(let id in products){
                productsList.push({ id, ... products[id]});
            }
            console.log(productsList);
            setProductsList(productsList);
        });
    },[]);

    return(
        <div className="cart">
            <h1>Shopping Cart</h1>
            <Merger /><br/>
            {productsList ? productsList.map((names, index) => <CartItems names={names} key={index} />) : ''}
            <br/>
        </div>
    );
};
export default Cart;