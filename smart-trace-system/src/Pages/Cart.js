import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import CartItems from './CartItems';
import Merger from './Merger';

const Cart = () => {
    //variables 
    const [productsList, setProductsList] = useState();
    //user function
    const user = firebase.auth().currentUser;
    const [cartLength, setCartLength] = useState();

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

            //total number of items in the cart
            const cartLength = productsList.length;
            console.log('Number of Items in the Cart', cartLength);
            setCartLength(cartLength);
        });
    },[]);

    return(
        <div className="cart">
            <h1>Shopping Cart</h1>
            <Merger /><br/>
            <h2>Items in Cart :</h2>{cartLength}
            {productsList ? productsList.map((names, index) => <CartItems names={names} key={index} />) : ''}
            <br/>
            {/*<button>Checkout</button>*/}
        </div>
    );
};
export default Cart;