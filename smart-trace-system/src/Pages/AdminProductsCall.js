import React from 'react';
import firebase from '../Components/Firebase';


const AdminProductsCall = ({items}) => {

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
            <button>Delete</button>
            <button>Report</button>
        </div>
    );
};
export default AdminProductsCall;