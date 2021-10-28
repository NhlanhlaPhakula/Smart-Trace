import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import Popup from './Popup';

const WishlistItemsResults = ({names}) => {
    const user = firebase.auth().currentUser;

    //popupvariables
    const [isOpenAdd,setIsOpenAdd] = useState(false);
    const [isOpenUnwish,setIsOpenUnwish] = useState(false);

    // a function to add item to database
    const addToCart = () => {
        const addRef = firebase.database().ref('Cart');

        const savingData = {
            userId: user.email,
            url: names.url,
            itemName: names.itemName,
            serialNumber: names.serialNumber,
            itemsDescription: names.itemDescription,
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

    //toggle functions
    const togglePopupAdd = () => {
        setIsOpenAdd(!isOpenAdd);
    };

    const togglePopupUnwish = () => {
        setIsOpenUnwish(!isOpenUnwish);
    };

    return(
        <div className="products-details">
            <br/>
            {isOpenAdd && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Item Added to Cart :)</p>
            </>}
            handleClose={togglePopupAdd}
            />}
            {isOpenUnwish && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Uhh ohh! :(</p>
            </>}
            handleClose={togglePopupUnwish}
            />}
            <img src={names.url} alt="product-image"/><br/>
            <label>{names.itemName}</label><br/>
            <label>Serial Number: {names.serialNumber}</label><br/>
            <label>Description: {names.itemDescription}</label><br/>
            <label>Price: {names.price}</label><br/>
            <label>Seller: {names.userId}</label><br/>
            <button onClick={() => {
                handleRemove();
                togglePopupUnwish();
            }}>Unwish</button> <button onClick={() => {
                addToCart();
                handleRemove();
                togglePopupAdd();
            }}>Add to Cart</button>
        </div>
    );
};
export default WishlistItemsResults;