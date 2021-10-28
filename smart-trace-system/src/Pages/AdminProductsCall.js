import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import Popup from './Popup';


const AdminProductsCall = ({items}) => {

    //popup variables
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenReport, setIsOpenReport] = useState(false);
    const [isOpenSell,setIsOpenSell] = useState(false);

    //popup function toggle function
    const togglePopupDelete = () => {
        setIsOpenDelete(!isOpenDelete);
    };

    //report toggle
    const togglePopupReport = () => {
        setIsOpenReport(!isOpenReport);
    };

    //sell toggle
    const togglePopupSell = () => {
        setIsOpenSell(!isOpenSell);
    };

    //user function
    const user = firebase.auth().currentUser;
    //delete function
    const deleteProduct = () => {
        const deleteRef = firebase.database().ref('Products').child(items.id);
        deleteRef.remove();
    };
    //update function
    const updateProduct = () => {
        const updateRef = firebase.database().ref('Products').child(items.id);
        updateRef.update({
            report: !items.report,
            stolen: true,
        });
    };

    //a function to put items on sale
    const handleSell = () => {
        const sellRef = firebase.database().ref('Products').child(items.id);
        sellRef.update({
            onSale: true,
        });
    };

    return(
        <div className="admin-products">
            <h1>
                <img src ={items.url}/><br/>
                Name:{items.itemName}<br/>
                Serial Number : {items.serialNumber}<br/>
                {/*Id: {items.id}<br/>*/}
                Item Description : {items.itemDescription}<br/>
            </h1>
            {isOpenDelete && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Successfuly Deleted!!</p>
            </>}
            handleClose={togglePopupDelete}
            />}
            {isOpenReport && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Successfuly Deleted!!</p>
            </>}
            handleClose={togglePopupReport}
            />}
            {
                isOpenSell && <Popup
                content={<>
                <b>Smart Trace</b>
                <p>Item place for sale, I'll let you when it is bought :)</p>
                </>}
                handleClose={togglePopupSell}
            />}
            <button onClick={()=> {
                deleteProduct();
                togglePopupDelete();
            }}>Delete</button>      <button onClick={()=> {
                updateProduct();
                togglePopupReport();
            }}>Report</button> <button onClick={() => {
                handleSell();
                togglePopupSell();
            }}>Sell</button>
            <br/>
            <br/>
        </div>
    );
};
export default AdminProductsCall;