import React, { useState } from 'react';
import firebase from '../Components/Firebase';

const AddInsurance = () => {
    //variables
    const [insuranceCompany, setInsuranceCompany] = useState();
    const [niche,setNiche] = useState();
    const [activePeriod,setActivePeriod] = useState();
    const [purchasePrice,setPurchasePrice] = useState();
    const [monthlyFee,setMonthlyFee] = useState();
    const [category,setCategory] = useState();
    //user function to keep track of who is involved in the database
    const user = firebase.auth().currentUser;
    //a function to store insurance
    const saveData = () => {
        const saveRef = firebase.database().ref('Insurance');

        const savingData = {
            //userId: user.email,
            insuranceCompany,
            coverLoss: true,
            coverMulfunction: true,
            coverTheft: true,
            coverDamage: true,
            coverAll: false,
            coverFire: false,
            category,
            niche,
            activePeriod,
            purchasePrice,
            monthlyFee,
            
        };
        saveRef.push(savingData);
    };

    return(
        <div className="add-insurance">
            <h1>Add Insurance</h1>
            <label>Insurance Company : </label>
            <input type="text" value={insuranceCompany} required onChange={e=> setInsuranceCompany(e.target.value)} /><br/>
            <label>Device Class:</label>
            <select value={category} required onChange={e=> setCategory(e.target.value)}>
                <option></option>
                <option value="Mobile Devices">Mobile Devices</option>
                <option value="Desktop Devices">Desktop Devices</option>
                <option value="Home Appliances">Home Appliances</option>
            </select><br/>
            <label>Niche :</label>
            <select value={niche} required onChange={e=> setNiche(e.target.value)}>
                <option></option>
                <option value="Low-end">Low-end</option>
                <option value="Mid-range">Mid-range</option>
                <option value="High-end">High-end</option>
            </select><br/>
            <label>Active Period</label>
            <select value={activePeriod} required onChange={e=> setActivePeriod(e.target.value)}> 
                <option></option>
                <option value="New">0 Weeks to 4 Weeks(new)</option>
                <option value="6Months">1 month to 6 Months</option>
                <option value="12Months">6 Months to 12 Months</option>
                <option value="2Years">1 year to 2 Years</option>
            </select><br/>
            <label>Purchase Price :</label>
            <select value={purchasePrice} required onChange={e=> setPurchasePrice(e.target.value)}>
                <option></option>
                <option value="R1000-R3500">R1000-R3500</option>
                <option value="R3600-R5000">R3600-R5000</option>
                <option value="R5500-R7500">R5500-R7500</option>
                <option value="R7600-R10000">R7600-R10000</option>
                <option value="R11000-R20000">R11000-R20000</option>
                <option value="More">More</option>
            </select><br/>
            <label>Monthly Fee:</label>
            <select value={monthlyFee} required onChange={e=> setMonthlyFee(e.target.value)}>
                <option></option>
                <option value="R150pm">R150pm</option>
                <option value="R200pm">R200pm</option>
                <option value="R350pm">R350pm</option>
                <option value="R450pm">R450pm</option>
                <option value="R550pm">R550pm</option>
                <option value="R650pm">R650pm</option>
                <option value="R750pm">R750pm</option>
                <option value="R850pm">R850pm</option>
            </select><br/>
            <button onClick={saveData}>Add</button>
        </div>
    );
};
export default AddInsurance;