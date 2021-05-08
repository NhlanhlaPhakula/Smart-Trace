import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import Popup from './Popup';


const AdminProductsCall = ({items}) => {

    //popup variables
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenReport, setIsOpenReport] = useState(false);

    //popup function toggle function
    const togglePopupDelete = () => {
        setIsOpenDelete(!isOpenDelete);
    };

    //report toggle
    const togglePopupReport = () => {
        setIsOpenReport(!isOpenReport);
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
            <h1>{items.itemName}</h1>
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
            <button onClick={()=> {
                deleteProduct();
                togglePopupDelete();
            }}>Delete</button>
            <button onClick={()=> {
                updateProduct();
                togglePopupReport();
            }}>Report</button>
        </div>
    );
};
export default AdminProductsCall;