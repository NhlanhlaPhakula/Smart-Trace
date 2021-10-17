import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import WishlistItemsResults from './WishlistItemsResults';

const WishListItems = () => {
    //variables 
    const [itemsList,setItemsList] = useState();
    const user = firebase.auth().currentUser;
    
    //a fucntion to call items from the wishlist
    useEffect(() => {
        const findRef = firebase.database().ref('Wishlist').orderByChild('userId').equalTo(user.email).limitToLast(3);
        findRef.on('value',(snapshot) => {
            const products = snapshot.val();
            const itemsList = [];
            for(let id in products) {
                itemsList.push({ id, ... products[id]});
            }
            setItemsList(itemsList);
        });
    },[]);

    //a popup function to display a message on page onload


    return(
        <div className="Wishlist-items">
            <h2>Recent Wishes</h2>
            {itemsList ? itemsList.map((names,index) => <WishlistItemsResults names={names} key={index}/>):''}
        </div>
    );
};
export default WishListItems;