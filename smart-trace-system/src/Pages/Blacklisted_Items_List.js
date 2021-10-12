import React from 'react';
import firebase from '../Components/Firebase';

const BlacklistedItemsList = ({name}) => {
    return(
        <div className="blacklisted-items-list-table">
            <table className="table">
                <tr>
                    <th>Report Id</th>
                    <th>Report Date</th>
                    <th>Reporter Id</th>
                    <th>Product Name</th>
                    <th>Owner Id</th>
                    <th>Owner FirstName</th>
                    <th>Owner LastName</th>
                    <th>Product S/N</th>
                    <th>Product Description</th>
                </tr>
                <tr>
                    <td>{name.id}</td>
                    <td>{name.date}</td>
                    <td>{name.reporterId}</td>
                    <td>{name.productName}</td>
                    <td>{name.userId}</td>
                    <td>{name.firstName}</td>
                    <td>{name.lastName}</td>
                    <td>{name.serialNumber}</td>
                    <td>{name.description}</td>
                </tr>
            </table>
        </div>
    );
};
export default BlacklistedItemsList;