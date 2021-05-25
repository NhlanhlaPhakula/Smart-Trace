import React from 'react';
import Payment from './Payment';
import Shipping from './Shipping';

const Merger = () => {
    return(
        <div className="flex-container">
            <div className="flex-child magenta">
                <Shipping />
            </div>
            <div className="flex-child green">
                <Payment />
            </div><br/>
        </div>
    );
};
export default Merger;