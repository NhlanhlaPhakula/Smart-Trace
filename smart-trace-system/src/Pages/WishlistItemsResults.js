import React from 'react';
import firebase from '../Components/Firebase';

const WishlistItemsResults = ({names}) => {
    const user = firebase.auth().currentUser;

    // a function to add item to database
    const addToCart = () => {
        const addRef = firebase.database().ref('Cart');

        const savingData = {
            userId: user.email,
            url: names.url,
            itemName: names.itemName,
            serialNumber: names.serialNumber,
            itemsDescription: names.itemsDescription,
            category: names.category,
            price: names.price,
        };
        addRef.push(savingData);
    };

    //a function to delete an item from the wishlist after adding it into the cart
    const handleRemove = () => {
        const removeRef = firebase.database().ref('Wishlist').child(names.id);
        removeRef.remove();
    };

    return(
        <div className="products-details">
            <br/>
            <img src={names.url} alt="product-image"/><br/>
            <label>{names.itemName}</label><br/>
            <label>Serial Number: {names.serialNumber}</label><br/>
            <label>Description: {names.itemsDescription}</label><br/>
            <label>Price: {names.price}</label><br/>
            <label>Seller: {names.userId}</label><br/>
            <button onClick={handleRemove}>Unwish</button> <button onClick={() => {
                addToCart();
                handleRemove();
            }}>Add to Cart</button>
        </div>
    );
};
export default WishlistItemsResults;