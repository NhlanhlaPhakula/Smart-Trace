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

const MessagesList = ({names}) => {
    return(
        <div>
            <br/>
            <hr/>
            <u><h4>Sold Item Transcript</h4></u><br/>
            <h6>**This document serves as proof of sold item(s)**</h6><br/>
            <h5>A customer bought this item which you put up for sale:</h5><br/>
            <label className="transcript">{names.transactionDate}</label><br/>
            <img className="message-pic" src={names.url}/><br/>
            <label className="transcript">Buyer:{names.buyer}</label><br/>
            <label className="transcript">Product:{names.itemName}</label><br/>
            <label className="transcript">Category:{names.category}</label><br/>
            <label className="transcript">S/N:{names.serialNumber}</label><br/>
            <label className="transcript">Price:{names.price}</label><br/>
            <h6>**Please keep this safe for future reference**</h6>
            <hr/>
        </div>
    );
};
export{MessagesList};

const InsuranceMessagesResults = ({names}) => {
    const user = firebase.auth().currentUser;
    return(
        <div className="insurance">
            <br/>
            <hr/>
            <u><h4>Insurance Quote Feedback</h4></u>
            <h3>{names.insurance_Company}</h3>
            <h6>**{names.date}**</h6>
            <h5>Hey {user.email}!</h5>
            <h3>Thank You For Choosing {names.insurance_Company}</h3>
                    <p>We will have our service providers to contact you<br/>
                    as soon as possible to do a quote with you.<br/>
                    In the interim, please feel free to see if we can provide further<br/>
                    assistance with some of our other insurance products.</p>
            <br/>
            <hr/>
        </div>
    );
};
export {InsuranceMessagesResults};