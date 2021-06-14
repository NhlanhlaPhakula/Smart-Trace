import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import Recommendations from './Analytics';
import CategorySearch from './Category';
import Products from './Products';
import SearchFunction from './SearchBar';

const Store = () => {
    //variables
    const [productsList, setProductsList] = useState();
    
    //user function
    //const user = firebase.auth().currentUser; 

    //a function to call of our products
    useEffect (() => {
        const retrieveRef = firebase.database().ref('Products');
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
            <h1>This is our online store</h1><br/>
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