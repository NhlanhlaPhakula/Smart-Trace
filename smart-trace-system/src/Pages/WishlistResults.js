import React from 'react';
import firebase from '../Components/Firebase';

const WishListResults = ({name}) => {
    return(
        <div className="wishlist-results">
            <table className="table">
                <tr>
                    <th>Wish Id</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    
                </tr>
                <tr>
                    <th>{name.id}</th>
                    <th>{name.itemName}</th>
                    <th>{name.itemDescription}</th>
                    <th>{name.category}</th>
                </tr>
            </table>
        </div>
    );
};
export default WishListResults;