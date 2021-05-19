import React from 'react';
import firebase from '../Components/Firebase';

const NotificationDetails = ({ name }) => {
    return(
        <div className="notification-details">
            <br/>
            <hr/>
            <div className="details">
                <h2>{name.date}</h2><br/>
                <h4>{name.message}</h4><br/>
                <h6>Product Info:</h6><br/>
                {name.itemName}<br/>
                {name.itemDescription}<br/>
                <h6>Your product is sold to this user : {name.buyerId}</h6>
            </div>
            <hr/>
        </div>
    );
};
export default NotificationDetails;