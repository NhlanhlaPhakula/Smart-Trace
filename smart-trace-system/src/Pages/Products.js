import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import {Link} from 'react-router-dom';
import Popup from './Popup';

const Products = ({ name }) => {
    //user function
    const user = firebase.auth().currentUser;
    const [userId, setUserId] = useState(user);

    //popup variables
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [isOpenReport, setIsOpenReport] = useState(false);

    //a toggle function for popup
    const togglePopupAddToCart = () => {
        setIsOpenAdd(!isOpenAdd);
    };

    //a toggle function for report
    const togglePopupReport = () => {
        setIsOpenReport(!isOpenReport);
    };

    //add to cart function
    const addToCart = () => {
        const addRef = firebase.database().ref('Cart').child(name.id);
        addRef.push({
            name,
        });
    };

    //report stolen product
    const reportProduct = () => {
        const reportRef = firebase.database().ref('Products').child(name.id);
        reportRef.update({
            report: !name.report,
        });
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
                <h1>
                    <Link to="/details"><img src={name.url} alt="product-image"/></Link><br/>
                    Name: {name.itemName} <br />
                    Serial Number: {name.serialNumber} <br />
                    Desciption: {name.itemDescription}<br/>
                    Id: {name.id}
                </h1>
                <button onClick={() => {
                    addToCart();
                    togglePopupAddToCart();
                }}>Add to Cart</button>
                <button onClick={() => {
                    reportProduct();
                    togglePopupReport();
                }}>Report</button>
            </div>
        </div>
    );
};
export default Products;