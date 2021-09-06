import React from 'react';
import firebase from '../Components/Firebase';

const MessageList = ({name}) => {

    return(
        <div>
            <br/>
            <hr/>
            <u><h4>Smart Trace Transaction Transcript</h4></u><br/>
            <h6>**This document serves as proof of purchase of the following item(s)**</h6><br/>
            <h5>Description:</h5><br/>
            <label>{name.transactionDate}</label><br/>
            <img className="message-pic" src={name.url}/><br/>
            <label>Buyer:{name.userId}</label><br/>
            <label>Product:{name.itemName}</label><br/>
            <label>Category:{name.category}</label><br/>
            <label>S/N:{name.serialNumber}</label><br/>
            <label>Recent Owner:{name.recentOwner}</label><br/>
            <label>Price:{name.price}</label><br/>
            <h6>**Please keep this safe for future reference**</h6>
            <hr/>
        </div>
    );
};
export default MessageList;