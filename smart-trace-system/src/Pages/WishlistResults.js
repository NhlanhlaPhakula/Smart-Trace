import React from 'react';
import firebase from '../Components/Firebase';

const WishListResults = ({name}) => {
    //variables 
    const user = firebase.auth().currentUser;

    //a function to add item to database
    const addToCart = () => {
        const addRef = firebase.database().ref('Cart');

        const savingData = {
            userId: user.email,
            url: name.url,
            itemName: name.itemName,
            serialNumber: name.serialNumber,
            itemDescription: name.itemDescription,
            category: name.category,
            price: name.price,
        };
        addRef.push(savingData);
    };

    //a function to delete items from the list
    const handleRemove = () => {
        const removeRef = firebase.database().ref('Wishlist').child(name.id);
        removeRef.remove();
    };

    return(
        <div className="products-details">
            <br/>
            <img src={name.url} alt="product-image"/><br/>
            <label>{name.itemName}</label><br/>
            <label>Serial Number: {name.serialNumber}</label><br/>
            <label>Description: {name.itemsDescription}</label><br/>
            <label>Price: {name.price}</label><br/>
            <label>Seller: {name.userId}</label><br/>
            <button onClick={handleRemove}>Unwish</button> <button onClick={() => {
                addToCart();
                handleRemove();
            }}>Add to Cart</button>
        </div>
    );
};
export default WishListResults;