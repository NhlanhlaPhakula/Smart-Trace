import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import Recommendations from './Analytics';
import CategorySearch from './Category';
import Popup from './Popup';
import Products from './Products';
import SearchFunction from './SearchBar';
import { Link } from 'react-router-dom';

const Store = () => {
    //variables
    const [productsList, setProductsList] = useState();
    const [isOpen,setIsOpen] = useState(false);
    const [onSale,setIsOnSale] = useState(true);
    
    //user function
    //const user = firebase.auth().currentUser; 

    //popup function
    useEffect(() => {
        setTimeout(() => setIsOpen(true), 3000);
    }, []);

    //a function to close  popup
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    //a function to call of our products
    useEffect (() => {
        const retrieveRef = firebase.database().ref('Products').orderByChild('onSale').equalTo(onSale);
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const productsList = [];
            for(let id  in products){
                productsList.push({ id, ... products[id]});
            }
            console.log(productsList);
            setProductsList(productsList);
        });
    },[]);

    return(
        <div className="onlineStore">
            <h1>Trace store</h1><br/>
            {
                isOpen && <Popup 
                content={<>
                    <b>Smart Trace</b>
                    <p>Checkout your wishlist now<br/><Link className="wish" to="/wishlistItems">Wishlist</Link></p>
                </>}
                handleClose={togglePopup}
            />}
            <CategorySearch /><br/><SearchFunction/><br/>
            <hr/>
            <div className="store">
                <br /> 
                {productsList ? productsList.map((names, index) => <Products name={names} key={index} />) : ''}
            </div>
            <hr/>
            <Recommendations />
        </div>
    );
};
export default Store;