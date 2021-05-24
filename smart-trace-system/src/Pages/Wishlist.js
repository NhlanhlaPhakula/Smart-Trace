import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import WishListResults from './WishlistResults';

const Wishlist = () => {
    //variables and functions
    const user = firebase.auth().currentUser;
    const [wishList, setWishList] = useState();

    useEffect(() => {
        const retrieveRef = firebase.database().ref('Wishlist').orderByChild('userId').equalTo(user.email);
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const wishList = [];

            for(let id in products) {
                wishList.push({ id,... products[id]});
            }
            console.log(wishList);
            setWishList(wishList);
        });
    },[]);


    return(
        <div className="wishlist">
            <h1>Items in a wishlist</h1>
            {wishList ? wishList.map((names, index) => <WishListResults name={names}/>):''}
        </div>
    );
};
export default Wishlist;