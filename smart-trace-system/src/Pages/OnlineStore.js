import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
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
            {/*<div>
                <a href="/details"><img src="Images/download (1).jfif" /></a><br/>
                <label>(Item Name)</label> <label>(Price in Rands)</label>
                <button>Add to Cart</button><br></br><button>Report</button>
            </div>
            <div>
                <a href="/details"><img src="Images/download (1).jfif" /></a><br/>
                <label>(Item Name)</label> <label>(Price in Rands)</label>
                <button>Add to Cart</button><br></br><button>Report</button>
            </div>
            <div>
                <a href="/details"><img src="Images/download (1).jfif" /></a><br/>
                <label>(Item Name)</label> <label>(Price in Rands)</label>
                <button>Add to Cart</button><br></br><button>Report</button>
            </div>
            <div>
                <a href="/details"><img src="Images/download (1).jfif" /></a><br/>
                <label>(Item Name)</label> <label>(Price in Rands)</label>
                <button>Add to Cart</button><br></br><button>Report</button>
            </div>
            <div>
                <a href="/details"><img src="Images/download (1).jfif" /></a><br/>
                <label>(Item Name)</label> <label>(Price in Rands)</label>
                <button>Add to Cart</button><br></br><button>Report</button>
            </div>
            */}
            <div className="store">
                <br /> 
                {productsList ? productsList.map((names, index) => <Products name={names} key={index} />) : ''}
            </div>
        </div>
    );
};
export default Store;