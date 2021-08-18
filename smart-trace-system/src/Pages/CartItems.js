import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import Popup from './Popup';

const CartItems = ({names}) => {
    //variables
    const [totalPrice, setTotalPrice] = useState(0);
    const [priceList, setPriceList] = useState();
    const [total, setTotal] = useState();
    const [priceLists, setPriceLists] = useState();


    //popUp variables
    const [isOpenDelete, setIsOpenDelete] = useState(false);

    //a toggle function for delete popup
    const togglePopupDelete = () => {
        setIsOpenDelete(!isOpenDelete);
    };

    //delete function from the cart table
    const deleteProduct = () => {
        const deleteRef = firebase.database().ref('Cart').child(names.id);
        deleteRef.remove();
    };
    
    /*useEffect(() => {
        const saveRef = firebase.database().ref('Prices');

        const savingData = {
            price: names.price,
        };
        saveRef.push(savingData);
    });

    useEffect(() => {
        const retrieveRef = firebase.database().ref('Prices').orderByChild('price').equalTo(names.price);
        retrieveRef.on('value', (snapshot) => {
            const prices = snapshot.val();
            const priceLists = [];
            for(let id in prices){
                priceLists.push({ id, ... prices[id]});
                const total = names.price;
                setTotalPrice(total);
            }
            var sum = 0;
            for(var i = 0; i<=priceLists.length;i++){
                sum += names.prices;
            }
            console.log('Summed Prices:', sum);

            console.log('Prices:', priceLists);
        });
    },[]);*/

    return(
        <div className="cartItems">
            <br />
            <h1>Cart Item</h1>
            {isOpenDelete && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Item removed :)</p>
            </>}
            handleClose={togglePopupDelete}
            />}
                <br/>
               <img src={names.url}/><br/>
               {names.itemName}<br/>
                <label>S/N:</label>{names.serialNumber}<br/>
                <label>Desciption: {names.itemDescription}</label><br/>
                <label>Price : {names.price}</label><br/>
            <button onClick={() => {
                deleteProduct();
                togglePopupDelete();
            }}>Remove</button>
        </div>
    );
};
export default CartItems;