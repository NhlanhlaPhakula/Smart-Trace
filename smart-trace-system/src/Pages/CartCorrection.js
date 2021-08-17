import React, { useEffect, useState } from 'react';
import firebase  from '../Components/Firebase';
import CartItems from './CartItems';


const CartCorrection = () => {
    const [productsList, setProductsList] = useState();
    const user = firebase.auth().currentUser;

    //a function to display user data stored in the cart table
    useEffect(() => {
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
        <div>
            <h2>Items in Cart :</h2>
            {productsList ? productsList.map((names, index) => <CartItems name={names} key={index} />) : ''}

        </div>
    );
};
export default CartCorrection;