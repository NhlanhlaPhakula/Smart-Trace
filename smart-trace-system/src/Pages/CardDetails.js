import React from 'react';
import firebase from '../Components/Firebase';

const CardDetails = ({details}) => {

    return(
        <div>
            User: {details.nameOnCard}<br/>
            Card Number: {details.cardNumber}<br/>
            Exp Month: {details.month}<br/>
            Exp Year: {details.year}<br/>
            Security Code: {details.securityCode}
        </div>
    );
};
export default CardDetails;