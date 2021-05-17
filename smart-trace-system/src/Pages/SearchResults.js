import React from 'react';
import firebase from '../Components/Firebase';

const SearchResults = ({name}) => {
    //variables
    //const user = firebase.auth().currentUser;

    return(
        <div className="search-results">
            <img src={name.url} alt="product-image"/><br/>
            <h>Item: {name.itemName}</h><br/>
            <h>Serial Number : {name.serialNumber}</h><br/>
            <h>Description: {name.itemDescription}</h><br/>
            <button>Add to Cart</button>
            <button>Report</button>
        </div>
    );
};
export default SearchResults;