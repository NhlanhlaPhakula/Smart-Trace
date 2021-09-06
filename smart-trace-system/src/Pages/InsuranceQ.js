import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import InsuranceList from './InsuranceList';

const InsuranceQuestions = () => {
    //variables
    const [category, setCategory] = useState();
    const [niche, setNiche] = useState();
    const [activityPeriod, setActivityPeriod] = useState();
    const [purchasePrice, setPurchasePrice] = useState();
    const [monthlyFee, setMonthlyFee] = useState();
    const [coverLoss, setCoverLoss] = useState(false);
    const [coverMulfunction, setCoverMulfunction] = useState(false);
    const [coverTheft, setCoverTheft] = useState(false);
    const [coverDamage, setCoverDamage] = useState(false);
    const [coverFire, setCoverFire] = useState(false);
    const [coverAll, setCoverAll] = useState(false);
    const [insuranceList, setInsuranceList] = useState();

    //user function 
    const user = firebase.auth().currentUser;

    //function to save this data into the database
    const saveData = () => {
        const saveRef = firebase.database().ref('Insurance_Preferences');

        const savingData = {
            userId: user.email,
            category,
            niche,
            activityPeriod,
            purchasePrice,
            monthlyFee,
            coverLoss,
            coverMulfunction,
            coverTheft,
            coverDamage,
            coverFire,
            coverAll,
        };
        saveRef.push(savingData);
    };

    //a function to search for the right insurance
   /* const handleSearch = () => {
        const retrieveRef = firebase.database().ref('Insurance');
        retrieveRef.on('value', (snapshot) => {
            const insurance = snapshot.val();
            const insuranceList = [];
            if( coverTheft != true){
                for(let id in insurance){
                    insuranceList.push({ id, ... insurance[id]});
                }
                console.log(insuranceList);
                setInsuranceList(insuranceList);
            }else{
                console.log("Match could not be found!");
                setInsuranceList();
            };
        },[]);
    };
    */
   const handleSearch = () => {
       const findRef = firebase.database().ref('Insurance_Preferences').orderByChild('category').equalTo(category);
       findRef.on('value',(snapshot) => {
           const data = snapshot.val();
           const dataList = [];
           for(let id in data) {
               dataList.push({ id, ... data[id]});
           }
           console.log('Results:',dataList);
           setInsuranceList(dataList);
       });
   };

    return(
        <div className="insurance-questions">
            
                <h1>Looking for device insurance?</h1>
                <div>
                    <label>1. What is the type of item you are Looking forward to insure?</label><br/>
                    <select value={category} required onChange={e=> setCategory(e.target.value)}>
                        <option></option>
                        <option value="Camera">Camera</option>
                        <option value="Desktop Computer">Desktop Computer</option>
                        <option value="DvD Player">DvD Player</option>
                        <option value="Fan">Fan</option>
                        <option value="Game Console">Game Console</option>
                        <option value="iPad">iPad</option>
                        <option value="iPod">iPod</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Mobile Phone">Mobile Phone</option>
                        <option value="Oven">Oven</option>
                        <option value="Printer">Printer</option>
                        <option value="Radio">Radio</option>
                        <option value="Television">Television</option>
                        <option value="Washing Machine">Washing Machine</option>
                    </select>
                </div>
                <div>
                    <label>2. Niche :-</label><br/>
                    <select value={niche} required onChange={e=> setNiche(e.target.value)}>
                        <option></option>
                        <option value="Low-end">Low End</option>
                        <option value="Mid-range">Mid-range</option>
                        <option value="High-end">High end</option>
                    </select>
                </div>
                <div>
                    <label>3. How old is your item?</label><br/>
                    <select value={activityPeriod} required onChange={e=> setActivityPeriod(e.target.value)}>
                        <option></option>
                        <option value="new">0 weeks to 4 weeks(New)</option>
                        <option value="6Months">1 Month to 6 Months</option>
                        <option value="12Months">6 Months to a Year</option>
                        <option value="2Years">1 year to 2 Years</option>
                    </select>
                </div>
                <div>
                    <label>4. Initial purchase price?</label><br/>
                    <select value={purchasePrice} required onChange={e=> setPurchasePrice(e.target.value)}>
                        <option></option>
                        <option value="R1000-R3500">R1000-R3500</option>
                        <option value="R3500-R5000">R3500-R5000</option>
                        <option value="R5000-R7500">R5000-R7500</option>
                        <option value="R7500-R10000">R7500-R10000</option>
                        <option value="R10000-R20000">R10000-R20000</option>
                        <option value="More">More</option>
                    </select>
                </div>
                <div>
                    <label>5. Choose suitable monthly fees you'd be most comfortable with :-</label><br/>
                    <select value={monthlyFee} required onChange={e=> setMonthlyFee(e.target.value)}>
                        <option></option>
                        <option value="R150pm">R150pm</option>
                        <option value="R200pm">R200pm</option>
                        <option value="R350pm">R350pm</option>
                        <option value="R400pm">R400pm</option>
                        <option value="R450pm">R450pm</option>
                        <option value="R500pm">R500pm</option>
                        <option value="R550pm">R550pm</option>
                        <option value="R750pm">R750pm</option>
                        <option value="R1500pm">R1500pm</option>
                    </select>
                </div>
                <div>
                    <label>6. Type of cover :-</label><br/>
                    <input type="checkbox" name="Cover Loss" value={coverLoss} onChange={e=> setCoverLoss(e.target.value)}/><label>Cover Loss</label><br/>
                    <input type="checkbox" name="Cover Mulfunction" value={coverMulfunction} onChange={e=> setCoverMulfunction(e.target.value)}/><label>Cover Mulfunction</label><br/>
                    <input type="checkbox" name="Cover Theft" value={coverTheft} onChange={e=> setCoverTheft(e.target.value)}/><label>Cover Theft</label><br/>
                    <input type="checkbox" name="Cover Damage" value={coverDamage} onChange={e=> setCoverDamage (e.target.value)}/><label>Cover Damge</label><br/>
                    <input type="checkbox" name="Cover Fire" value={coverFire} onChange={e=> setCoverFire(e.target.value)}/><label>Cover Fire</label><br/>
                    <input type="checkbox" name="Cover all" value={coverAll}  onChange={e=> setCoverAll(e.target.value)} /><label>All</label>
                </div>
                <button onClick={() => {
                    saveData();
                    handleSearch();
                }}>Search</button>

                <div className="insurance-results">
                    {insuranceList ? insuranceList.map((names, index) => <InsuranceList name={names} key={index}/>) : ''}
                </div>
            
        </div>
    );
};
export default InsuranceQuestions;