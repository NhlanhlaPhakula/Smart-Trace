import React, { useState } from 'react';
import firebase from '../Components/Firebase';

const Store = () => {
    //variables
    const [productsList, setProductsList] = useState();
    
    //user function
    const user = firebase.auth().currentUser; 

    //a function to call of our products

    return(
        <div className="onlineStore">
            <h1>This is our online store</h1>
            <div>
                <a href="/details"><img src="Images/download (1).jfif" /></a><br/>
                <label>(Item Name)</label> <label>(Price in Rands)</label>
                <button>Add to Cart</button><br></br><button>Report</button>
            </div>
            <h1>List of products on sale</h1>
            
            
        </div>
    );
};
export default Store;