import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import {Link} from 'react-router-dom';
import Popup from './Popup';

const Products = ({ name }) => {
    //user function
    const user = firebase.auth().currentUser;
    //const [userId, setUserId] = useState(user);

    //popup variables
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [isOpenReport, setIsOpenReport] = useState(false);
    const [isOpenWish, setIsOpenWish] = useState(false);

    //a toggle function for popup
    const togglePopupAddToCart = () => {
        setIsOpenAdd(!isOpenAdd);
    };

    //a toggle function for report
    const togglePopupReport = () => {
        setIsOpenReport(!isOpenReport);
    };

    //a toggle function for adding to a wishlist
    const toggleAddWish = () => {
        setIsOpenWish(!isOpenWish);
    };

    //add to cart function
    const addToCart = () => {
        const addRef = firebase.database().ref('Cart');
        
        const saveData = {
             userId: user.email,
             url: name.url,
             itemName: name.itemName,
             serialNumber: name.serialNumber,
             itemDescription: name.itemDescription,
             id: name.id,
             category: name.category,
        };
        addRef.push(saveData);
    };

    //report stolen product
    const reportProduct = () => {
        const reportRef = firebase.database().ref('Products').child(name.id);
        reportRef.update({
            report: !name.report,
        });
    };

    //a function to add items into a wish list
    const handleAddToWishlist = () => {
        const addref = firebase.database().ref('Wishlist');
        
        const saveData = {
            id: name.id,
            userId: user.email,
            itemName: name.itemName,
            serialNumber: name.serialNumber,
            itemDescription: name.itemDescription,
            url: name.url,
            category: name.category,
            report: name.report,
            /*sale: name.sale,
            sold: name.sold,
            stolen: name.stolen,*/
        };
        addref.push(saveData);
    };

    return(
        <div className="productlist">
            <div>
            {isOpenAdd && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Item Added to Cart :)</p>
            </>}
            handleClose={togglePopupAddToCart}
            />}
            {isOpenReport && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Suspicious Item is reported !!!!</p>
            </>}
            handleClose={togglePopupReport}
            />}
            {isOpenWish && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Item added to a wishlist !!!!</p>
            </>}
            handleClose={toggleAddWish}
            />}
                <h1>
                    <Link to="/details"><img src={name.url} alt="product-image"/></Link><br/>
                    Name: {name.itemName} <br />
                    Serial Number: {name.serialNumber} <br />
                    Desciption: {name.itemDescription}<br/>
                    Id: {name.id}
                    
                </h1>
                <button onClick={() => {
                    reportProduct();
                    togglePopupReport();
                }}>Report</button>
                <button onClick={() => {
                    addToCart();
                    togglePopupAddToCart();
                }}>Add to Cart</button>
                <button onClick={() => {
                    toggleAddWish();
                    handleAddToWishlist();
                }}>Wishlist</button>
            </div>
        </div>
    );
};
export default Products;