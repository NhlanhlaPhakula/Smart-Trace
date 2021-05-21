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
                    <th>{name.id}</th>
                    <th>{name.date}</th>
                    <th>{name.reporterId}</th>
                    <th>{name.productName}</th>
                    <th>{name.userId}</th>
                    <th>{name.firstName}</th>
                    <th>{name.lastName}</th>
                    <th>{name.serialNumber}</th>
                    <th>{name.description}</th>
                </tr>
            </table>
        </div>
    );
};
export default BlacklistedItemsList;