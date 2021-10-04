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
                    <td>{name.id}</td>
                    <td>{name.itemName}</td>
                    <td>{name.itemDescription}</td>
                    <td>{name.category}</td>
                </tr>
            </table>
        </div>
    );
};
export default WishListResults;