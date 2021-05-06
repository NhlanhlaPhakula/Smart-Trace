import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import Popup from './Popup';


const AdminProductsCall = ({items}) => {

    //popup variables
    const [isOpen, setIsOpen] = useState(false);

    //popup function toggle function
    const togglePopup = () => {
        setIsOpen(!isOpen);
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

    return(
        <div className="admin-products">
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Successfuly Deleted</p>
            </>}
            handleClose={togglePopup}
            />}
            <h1>{items.itemName}</h1>
            <button onClick={()=> {
                deleteProduct();
                togglePopup();
            }}>Delete</button>
            <button onClick={()=> {
                updateProduct();
            }}>Report</button>
        </div>
    );
};
export default AdminProductsCall;