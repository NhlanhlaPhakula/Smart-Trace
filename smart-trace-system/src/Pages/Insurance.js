import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import InsuranceList from './InsuranceList';

const Insurance = () => {
    //variables
    const [insuranceList, setInsuranceList] = useState();
    
    /*useEffect(() => {
        const retrieveRef = firebase.database().ref('Insurance');
        retrieveRef.on('value', (snapshot) => {
            const insurances = snapshot.val();
            const insuranceList = [];
            for(let id in insurances){
                insuranceList.push({ id, ... insurances[id]});
            }
            console.log(insuranceList);
            setInsuranceList(insuranceList);
        });
    },[]);*/
    const [coverTheft, setCoverTheft] = useState(true);

    useEffect(() => {
        const retrieveRef = firebase.database().ref('Insurance');
        retrieveRef.on('value', (snapshot) => {
            const insurance = snapshot.val();
            const insuranceList = [];
            if(coverTheft == true){
                for(let id in insurance){
                    insuranceList.push({ id, ... insurance[id]});
                }
                console.log(insuranceList);
                setInsuranceList(insuranceList);
            }else{
                console.log("This array is empty");
                setInsuranceList('Could not find any matching insurance!');
            };
        });
    },[]);

    return(
        <div>
            {insuranceList ? insuranceList.map((names, index) => <InsuranceList name={names} key={index}/>) : ''}
        </div>
    );
};
export default Insurance;