import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import Popup from './Popup';

const CartItems = ({names}) => {
    //variables
    const [totalPrice, setTotalPrice] = useState(0);
    const [priceList, setPriceList] = useState();
    const [total, setTotal] = useState();
    const [priceLists, setPriceLists] = useState();
    const [date, setDate] = useState(Date);
    const [onSale,setIsOnSale] = useState(true);

    //popUp variables
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenPay, setIsOpenPay] = useState(false);

    //currently logged in user
    const user = firebase.auth().currentUser;

    //a toggle function for delete popup
    const togglePopupDelete = () => {
        setIsOpenDelete(!isOpenDelete);
    };

    //a toggle function for pay popup
    const togglePopupPay = () => {
        setIsOpenPay(!isOpenPay);
    };

    //delete function from the cart table
    const deleteProduct = () => {
        const deleteRef = firebase.database().ref('Cart').child(names.id);
        deleteRef.remove();
    };

    //pay function/purchase function(put everything into a purchase table)
    const saveData = () => {
        const saveRef = firebase.database().ref('Purchase');

        const savingData = {
            category: names.category,
            itemName: names.itemName,
            price: names.price,
            serialNumber: names.serialNumber,
            url: names.url,
            recentOwner: names.userId,
            userId: user.email,
            transactionDate: date,
        };
        saveRef.push(savingData);
    };

    //update function 
    const updateFunction = () => {
        const updateRef = firebase.database().ref('Products').child(names.id);
        updateRef.update({
            userId: user.email,
        });
    };

    // a function to change the state of sale
    const handleSaleStatus = () => {
        const updateState = firebase.database().ref('Products').child(names.id);
        updateState.update({
            onSale: true,
        });
    };

    //a function to send a transcript as a proof of exchange
    const transcriptFunction = () => {
        const transcriptRef = firebase.database().ref('Transcript');

        const savingData = {
            category: names.category,
            itemName: names.itemName,
            price: names.price,
            serialNumber: names.serialNumber,
            url: names.url,
            recentOwner: names.userId,
            userId: user.email,
            transactionDate: date,
        };
        transcriptRef.push(savingData);
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
            {
                isOpenPay && <Popup 
                content={<>
                    <b>Smart Trace</b>
                    <p>Paid and Confiscated :)</p>
                </>}
                handleClose={togglePopupPay}
                />
            }
                <br/>
               <img src={names.url}/><br/>
               {names.itemName}<br/>
                <label>S/N:</label>{names.serialNumber}<br/>
                <label>Desciption: {names.itemDescription}</label><br/>
                <label>Price : {names.price}</label><br/>
            <button onClick={() => {
                deleteProduct();
                togglePopupDelete();
            }}>Remove</button> <button onClick={() => {
                togglePopupPay();
                saveData();
                updateFunction();
                transcriptFunction();
                handleSaleStatus();
            }}>Pay</button>
        </div>
    );
};
export default CartItems;