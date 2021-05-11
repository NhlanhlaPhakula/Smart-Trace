import React, { useState } from 'react';
import firebase from '../Components/Firebase';

const AddInsurance = () => {
    //variables
    const [insuranceCompany, setInsuranceCompany] = useState();
    //user function to keep track of who is involved in the database
    const user = firebase.auth().currentUser;
    //a function to store insurance
    const saveData = () => {
        const saveRef = firebase.database().ref('Insurance');

        const savingData = {
            userId: user.email,
            insuranceCompany,
            coverLoss: true,
            coverMulfunction: true,
            coverTheft: true,
            coverDamage: true,
            coverAll: true,
        };
        saveRef.push(savingData);
    };

    return(
        <div className="add-insurance">
            <h1>Add Insurance</h1>
            <label>Insurance Company : </label><br />
            <input type="text" value={insuranceCompany} required onChange={e=> setInsuranceCompany(e.target.value)} />
            <button onClick={saveData}>Add</button>
        </div>
    );
};
export default AddInsurance;