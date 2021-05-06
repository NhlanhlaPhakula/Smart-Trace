import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import {Link} from 'react-router-dom';
import Popup from './Popup';

const Products = ({ name }) => {
    //user function
    const user = firebase.auth().currentUser;
    const [userId, setUserId] = useState(user);

    //popup variables
    const [isOpen, setIsOpen] = useState(false);

    //a toggle function for popup
    const togglePopup = () => {
        setIsOpen(!isOpen);
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
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Item Added to Cart :)</p>
            </>}
            handleClose={togglePopup}
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
                    togglePopup();
                }}>Add to Cart</button>
                <button onClick={reportProduct}>Report</button>
            </div>
        </div>
    );
};
export default Products;