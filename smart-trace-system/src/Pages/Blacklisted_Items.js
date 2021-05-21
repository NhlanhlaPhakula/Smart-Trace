import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import BlacklistedItemsList from './Blacklisted_Items_List';

const BlackListItems = () => {
    //variables and functions
    const user = firebase.auth().currentUser;
    const [reportList, setReportList] = useState();

    useEffect(() => {
        const retrieveRef = firebase.database().ref('Reports');
        retrieveRef.on('value', (snapshot) => {
            const reports = snapshot.val();
            const reportList = [];
            for(let id in reports) {
                reportList.push({ id, ... reports[id]});
            }
            console.log(reportList);
            setReportList(reportList);
        });
    },[]);

    return(
        <div className="blacklist-items">
            <h1>Global List of Blacklisted Material</h1>
            {reportList ? reportList.map((names, index) => <BlacklistedItemsList name={names} key={index}/>):''}
        </div>
    );
};
export default BlackListItems;