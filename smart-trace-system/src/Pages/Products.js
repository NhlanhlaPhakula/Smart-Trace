import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import {Link} from 'react-router-dom';
import Popup from './Popup';

const Products = ({ name }) => {
    //user function
    const user = firebase.auth().currentUser;
    //const [userId, setUserId] = useState(user);
    const [date,setDate] = useState(Date);

    //popup variables
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [isOpenReport, setIsOpenReport] = useState(false);
    const [isOpenWish, setIsOpenWish] = useState(false);
    const [productsList,setProductsList] = useState();

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
             category: name.category,
             price: name.price,
        };
        addRef.push(saveData);
    };

    //report stolen product
    const reportProduct = () => {
        const reportRef = firebase.database().ref('Reports').child(name.id);
        
        const saveData = {
            reporterId: user.email,
            itemName: name.itemName,
            serialNumber: name.serialNumber,
            description: name.itemDescription,
            category: name.category,
            price: name.price,
            ownerId: name.userId,
        };
        reportRef.push(saveData);
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
            price: name.price,
            /*sale: name.sale,
            sold: name.sold,
            stolen: name.stolen,*/
        };
        addref.push(saveData);
    };

    //a function for recommendations based off of user past transactions
    /*useEffect(() => {
        const retrieveRef = firebase.database().ref('Purchase').orderByChild('category').equalTo(name.category);
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const productsList = [];
            for(let id in products) {
                productsList.push({ id, ... products[id]});
            }
            console.log('Recommendations: ', productsList);
            setProductsList(productsList);
        });
    },[]);*/

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
                <h1 className="products-details">
                    <Link to="/details"><img src={name.url} alt="product-image"/></Link><br/>
                    <label>{name.itemName}</label> <br />
                    <label>Serial Number: {name.serialNumber}</label> <br />
                    <label>Desciption: {name.itemDescription}</label><br/>
                    {/*Id: {name.id}<br/>*/}
                    <label>Price: {name.price}</label><br/>
                    <label>Seller: {name.userId}</label>
                </h1>
                <button onClick={() => {
                    reportProduct();
                    togglePopupReport();
                }}>Report</button> <button onClick={() => {
                    addToCart();
                    togglePopupAddToCart();
                }}>Add to Cart</button> <button onClick={() => {
                    toggleAddWish();
                    handleAddToWishlist();
                }}>Wishlist</button>
            </div>
        </div>
    );
};
export default Products;