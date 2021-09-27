import React from 'react';
import firebase from '../Components/Firebase';

const MessageList = ({name}) => {

    return(
        <div >
            <br/>
            <hr/>
            <u><h4>Smart Trace Transaction Transcript</h4></u><br/>
            <h6>**This document serves as proof of purchase of the following item(s)**</h6><br/>
            <h5>Description:</h5><br/>
            <label className="transcript">{name.transactionDate}</label><br/>
            <img className="message-pic" src={name.url}/><br/>
            <label className="transcript">Buyer:{name.userId}</label><br/>
            <label className="transcript">Product:{name.itemName}</label><br/>
            <label className="transcript">Category:{name.category}</label><br/>
            <label className="transcript">S/N:{name.serialNumber}</label><br/>
            <label className="transcript">Recent Owner:{name.recentOwner}</label><br/>
            <label className="transcript">Price:{name.price}</label><br/>
            <h6>**Please keep this safe for future reference**</h6>
            <hr/>
        </div>
    );
};
export default MessageList;