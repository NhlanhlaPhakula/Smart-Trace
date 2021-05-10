import React from 'react';
import firebase from '../Components/Firebase';

const SearchResults = ({name}) => {
    //variables
    //const user = firebase.auth().currentUser;

    return(
        <div>
            <h>{name.itemName}</h>
            <button>Add to Cart</button>
            <button>Report</button>
        </div>
    );
};
export default SearchResults;