import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import InsuranceCategory, { InsuranceActivityPeriod, InsuranceCoverAll, InsuranceCoverDamage, InsuranceCoverFire, InsuranceCoverLoss, InsuranceCoverMulfunction, InsuranceCoverTheft, InsuranceMonthlyFee, InsuranceNiche, InsurancePurchasePrice } from './InsuranceList';

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
   // const [insuranceList, setInsuranceList] = useState();

    //List variables
    const [categoryList,setCategoryList] = useState();
    const [nicheList,setNicheList] = useState();
    const [activityPeriodList,setActivityPeriodList] = useState();
    const [purchasePriceList,setPurchasePriceList] = useState();
    const [monthlyFeeList,setmonthlyFeeList] = useState();
    const [coverLossList,setCoverLossList] = useState();
    const [coverMulfunctionList,setCoverMulfunctionList] = useState();
    const [coverTheftList,setCoverTheftList] = useState();
    const [coverDamageList,setCoverDamageList] = useState();
    const [coverFireList,setCoverFireList] = useState();
    const [coverAllList,setCoverAllList] = useState();

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
   //a function to search for  Matching insurance category
   const handleCategory = () => {
       const findRef = firebase.database().ref('Insurance').orderByChild('category').equalTo(category);
       findRef.on('value',(snapshot) => {
           const data = snapshot.val();
           const categoryList = [];
           for(let id in data) {
               categoryList.push({ id, ... data[id]});
           }
           console.log('Category:',categoryList);
           setCategoryList(categoryList);
       });
   };
   //a function to search for a matching niche
   const handleNiche = () => {
        const findRef = firebase.database().ref('Insurance').orderByChild('niche').equalTo(niche).limitToFirst(2);
        findRef.on('value',(snapshot) => {
            const products = snapshot.val();
            const nicheList = [];
            for(let id in products) {
                nicheList.push({ id, ... products[id]});
            }
            console.log('Niche:',nicheList);
            setNicheList(nicheList);
        },[]);
   };
   // search active period
   const handleActivePeriod = () => {
       const findRef = firebase.database().ref('Insurance').orderByChild('activityPeriod').equalTo(activityPeriod).limitToFirst(2);
       findRef.on('value',(snapshot) => {
           const products = snapshot.val();
           const activityPeriodList = [];
           for(let id in products) {
               activityPeriodList.push({ id, ... products[id]});
           }
           console.log('Active period:',activityPeriodList);
           setActivityPeriodList(activityPeriodList);
       },[]);
   };
   // saerch purchase price
   const handlePurchasePrice = () => {
       const findRef = firebase.database().ref('Insurance').orderByChild('purchasePrice').equalTo(purchasePrice).limitToFirst(2);
       findRef.on('value',(snapshot) => {
           const products = snapshot.val();
           const purchasePriceList = [];
           for(let id in products) {
               purchasePriceList.push({ id, ... products[id]});
           }
           console.log('Purchase price:',purchasePriceList);
           setPurchasePriceList(purchasePriceList);
       },[]);
   };
   //search monthly fee
   const handleMonthlyFee = () => {
       const findRef = firebase.database().ref('Insurance').orderByChild('monthlyFee').equalTo(monthlyFee).limitToFirst(2);
       findRef.on('value',(snapshot) => {
           const products = snapshot.val();
           const monthlyFeeList = [];
           for(let id in products) {
               monthlyFeeList.push({ id, ... products[id]});
           }
           console.log('Monthly fee:',monthlyFeeList);
           setmonthlyFeeList(monthlyFeeList);
       },[]);
   };
   //search loss
  /* const handleLoss = () => {
       const findRef = firebase.database().ref('Insurance').orderByChild('coverLoss').equalTo(coverLoss).limitToFirst(2);
       findRef.on('value',(snapshot) => {
           const products = snapshot.val();
           const coverLossList = [];
           for(let id in products) {
               coverLossList.push({ id, ... products[id]});
           }
           console.log('Loss cover:',coverLossList);
           setCoverLossList(coverLossList);
       },[]);
   };
   //search mulfunction
   const handleMulfunction = () => {
       const findRef = firebase.database().ref('Insurance').orderByChild('coverMulfunction').equalTo(coverMulfunction).limitToFirst(2);
       findRef.on('value',(snapshot) => {
           const products = snapshot.val();
           const coverMulfunctionList = [];
           for(let id in products) {
               coverMulfunctionList.push({ id, ... products[id]});
           }
           console.log('Mulfunction cover:',coverMulfunctionList);
           setCoverMulfunctionList(coverMulfunctionList);
       },[]);
   };
   //search theft
   const handleTheft = () => {
       const findRef = firebase.database().ref('Insurance').orderByChild('coverTheft').equalTo(coverTheft).limitToFirst(2);
       findRef.on('value',(snapshot) => {
           const products = snapshot.val();
           const coverTheftList = [];
           for(let id in products) {
               coverTheftList.push({ id, ... products[id]});
           }
           console.log('Theft cover:',coverTheftList);
           setCoverTheftList(coverTheftList);
       },[]);
   };
   //search damage
   const handleDamage = () => {
       const findRef = firebase.database().ref('Insurance').orderByChild('coverDamage').equalTo(coverDamage).limitToFirst(2);
       findRef.on('value',(snapshot) => {
           const products = snapshot.val();
           const coverDamageList = [];
           for(let id in products) {
               coverDamageList.push({ id, ... products[id]});
           }
           console.log('Damage cover:',coverDamageList);
           setCoverDamageList(coverDamageList);
       },[]);
   };
   //search fire
   const handleFire = () => {
        const findRef = firebase.database().ref('Insurance').orderByChild('coverFire').equalTo(coverFire).limitToFirst(2);
        findRef.on('value',(snapshot) => {
            const products = snapshot.val();
            const coverFireList = [];
            for(let id in products) {
                coverFireList.push({ id, ... products[id]});
            }
            console.log('Fire cover:',coverFireList);
            setCoverFireList(coverFireList);
        },[]);
   };
   //search all
   const handleAll = () => {
       const findRef = firebase.database().ref('Insurance').orderByChild('coverAll').equalTo(coverAll).limitToFirst(2);
       findRef.on('value',(snapshot) => {
           const products = snapshot.val();
           const coverAllList = [];
           for(let id in products) {
               coverAllList.push({ id, ... products[id]});
           }
           console.log('Cover all:',coverAllList);
           setCoverAllList(coverAllList);
       },[]);
   };
*/
   // a function to display selected items only
   const handleShow = () => {
     if(coverLoss === true) {
        const findRef = firebase.database().ref('Insurance').orderByChild('coverLoss').equalTo(coverLoss).limitToFirst(2);
        findRef.on('value',(snapshot) => {
            const products = snapshot.val();
            const coverLossList = [];
            for(let id in products) {
                coverLossList.push({ id, ... products[id]});
            }
            console.log('Loss cover:',coverLossList);
            setCoverLossList(coverLossList);
        },[]);
     }else{
         if(coverMulfunction === true) {
            const findRef = firebase.database().ref('Insurance').orderByChild('coverMulfunction').equalTo(coverMulfunction).limitToFirst(2);
            findRef.on('value',(snapshot) => {
                const products = snapshot.val();
                const coverMulfunctionList = [];
                for(let id in products) {
                    coverMulfunctionList.push({ id, ... products[id]});
                }
                console.log('Mulfunction cover:',coverMulfunctionList);
                setCoverMulfunctionList(coverMulfunctionList);
            },[]);
         }else{
             if(coverTheft === true) {
                const findRef = firebase.database().ref('Insurance').orderByChild('coverTheft').equalTo(coverTheft).limitToFirst(2);
                findRef.on('value',(snapshot) => {
                    const products = snapshot.val();
                    const coverTheftList = [];
                    for(let id in products) {
                        coverTheftList.push({ id, ... products[id]});
                    }
                    console.log('Theft cover:',coverTheftList);
                    setCoverTheftList(coverTheftList);
                },[]);
             }else{
                 if(coverDamage === true) {
                    const findRef = firebase.database().ref('Insurance').orderByChild('coverDamage').equalTo(coverDamage).limitToFirst(2);
                    findRef.on('value',(snapshot) => {
                        const products = snapshot.val();
                        const coverDamageList = [];
                        for(let id in products) {
                            coverDamageList.push({ id, ... products[id]});
                        }
                        console.log('Damage cover:',coverDamageList);
                        setCoverDamageList(coverDamageList);
                    },[]);
                 }else{
                     if(coverFire === true) {
                        const findRef = firebase.database().ref('Insurance').orderByChild('coverFire').equalTo(coverFire).limitToFirst(2);
                        findRef.on('value',(snapshot) => {
                            const products = snapshot.val();
                            const coverFireList = [];
                            for(let id in products) {
                                coverFireList.push({ id, ... products[id]});
                            }
                            console.log('Fire cover:',coverFireList);
                            setCoverFireList(coverFireList);
                        },[]);
                     }else{
                         if(coverAll === true) {
                            const findRef = firebase.database().ref('Insurance').orderByChild('coverFire').equalTo(coverFire).limitToFirst(2);
                            findRef.on('value',(snapshot) => {
                                const products = snapshot.val();
                                const coverFireList = [];
                                for(let id in products) {
                                    coverFireList.push({ id, ... products[id]});
                                }
                                console.log('Fire cover:',coverFireList);
                                setCoverFireList(coverFireList);
                            },[]);
                         };
                     };
                 };
             };
         };
     };
   };



    return(
        <div className="insurance-questions">
            
                <h1>Looking for device insurance?</h1>
                <div>
                    <label>1. What is the type of item you are Looking forward to insure?</label><br/>
                    <select value={category} required onChange={e=> setCategory(e.target.value)}>
                        <option></option>
                        <option value="Mobile Devices">Mobile Devices</option>
                        <option value="Desktop Devices">Desktop Devices</option>
                        <option value="Home Appliances">Home Appliances</option>
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
                        <option value="R3600-R5000">R3600-R5000</option>
                        <option value="R5500-R7500">R5500-R7500</option>
                        <option value="R7600-R10000">R7600-R10000</option>
                        <option value="R11000-R20000">R11000-R20000</option>
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
                        <option value="R450pm">R450pm</option>
                        <option value="R550pm">R550pm</option>
                        <option value="R650pm">R650pm</option>
                        <option value="R750pm">R750pm</option>
                        <option value="R850pm">R850pm</option>
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
                    handleCategory();
                    handleActivePeriod();
                    //handleAll();
                    //handleDamage();
                    //handleFire();
                    //handleLoss();
                    handleMonthlyFee();
                   // handleMulfunction();
                    handleNiche();
                    handlePurchasePrice();
                   // handleTheft();
                   handleShow();
                }}>Search</button>

                <div className="insurance-results">
                <hr/>
                    <h1>Insurance to cover {category}</h1>
                    {categoryList ? categoryList.map((names, index) => <InsuranceCategory name={names} key={index}/>) : ''}<hr/>
                    <h1>For a {niche} niche</h1>
                    {nicheList ? nicheList.map((names,index) => <InsuranceNiche name={names} key={index} />) : ''}<hr/>
                    <h1>With an active period of {activityPeriod} :</h1>
                    {activityPeriodList ? activityPeriodList.map((names,index) => <InsuranceActivityPeriod name={names} key={index} />) :''}<hr/>
                    <h1>For {category} bought under {purchasePrice}</h1>
                    {purchasePriceList ? purchasePriceList.map((names,index) => <InsurancePurchasePrice name={names} key={index} />):''}<hr/>
                    <h1>For a monthly fee of {monthlyFee}</h1>
                    {monthlyFeeList ? monthlyFeeList.map((names,index) => <InsuranceMonthlyFee name={names} key={index} />):''}<hr/>
                    <h1>To cover loss</h1>
                    {coverLossList ? coverLossList.map((names,index) => <InsuranceCoverLoss name={names} key={index} />):''}<hr/>
                    <h1>To cover mulfunction</h1>
                    {coverMulfunctionList ? coverMulfunctionList.map((names,index) => <InsuranceCoverMulfunction name={names} key={index} />):''}<hr/>
                    <h1>To cover theft</h1>
                    {coverTheftList ? coverTheftList.map((names,index) => <InsuranceCoverTheft name={names} key={index} />):''}<hr/>
                    <h1>To cover physical damage</h1>
                    {coverDamageList ? coverDamageList.map((names,index) => <InsuranceCoverDamage name={names} key={index} />):''}<hr/>
                    <h1>To cover fire</h1>
                    {coverFireList ? coverFireList.map((names,index) => <InsuranceCoverFire name={names} key={index} />):''}<hr/>
                    <h1>To cover everything</h1>
                    {coverAllList ? coverAllList.map((names,index) => <InsuranceCoverAll name={names} key={index} />):''}
                </div>
                
            
        </div>
    );
};
export default InsuranceQuestions;