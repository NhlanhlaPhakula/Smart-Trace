import React from 'react';
import firebase from '../Components/Firebase';

const IntelligenceTable = ({names}) => {
    return(
        <div className="wishlist-results">
            <table className="table">
                <tr>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Email</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Location</th>
                    <th>Product Name</th>
                    <th>Serial Number</th>
                </tr>
                <tr>
                    <td>{names.category}</td>
                    <td>{names.date}</td>
                    <td>{names.description}</td>
                    <td>{names.email}</td>
                    <td>{names.firstName}</td>
                    <td>{names.lastName}</td>
                    <td>{names.location}</td>
                    <td>{names.productName}</td>
                    <td>{names.serialNumber}</td>
                </tr>
            </table>
        </div>
    );
};
export default IntelligenceTable;