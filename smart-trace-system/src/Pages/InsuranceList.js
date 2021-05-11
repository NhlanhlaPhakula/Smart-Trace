import React from 'react';
import firebase from '../Components/Firebase';

const InsuranceList = ({ name }) => {
    //save

    return(
        <div className="insurance-list">
            <h1>
                Id : {name.id}<br/>
                Name : {name.name}
            </h1>
            
        </div>
    );
};
export default InsuranceList;