import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import { Link } from 'react-router-dom';
import AdminProductsCall from './AdminProductsCall';

const AdminProducts = () => {

    //variables
    const [itemList, setItemList] = useState();
    const user = firebase.auth().currentUser;

    //a function to call all of the products stored in the database
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Products').orderByChild('userId').equalTo(user.email);
        retrieveRef.on('value', (snapshot) => {
            const items = snapshot.val();
            const itemList = [];
            for(let id in items){
                itemList.push({ id, ... items[id]});
            }
            console.log(itemList);
            setItemList(itemList);
        });
    },[]);

    return(
        <div className="admin-products">
            <h1>These are my registered products</h1>
            <Link to="/admin">Add Products</Link>
            {itemList ? itemList.map((items, index) => <AdminProductsCall items={items} key={index}/>) : ''}
        </div>
    );
};
export default AdminProducts;