import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import {Link} from 'react-router-dom';

const Products = ({ name }) => {
    //user function
    const user = firebase.auth().currentUser;
    const [userId, setUserId] = useState(user);
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
                <h1>
                    <Link to="/details"><img src={name.url} alt="product-image"/></Link><br/>
                    Name: {name.itemName} <br />
                    Serial Number: {name.serialNumber} <br />
                    Desciption: {name.itemDescription}<br/>
                    Id: {name.id}
                </h1>
                <button onClick={addToCart}>Add to Cart</button>
                <button onClick={reportProduct}>Report</button>
            </div>
        </div>
    );
};
export default Products;