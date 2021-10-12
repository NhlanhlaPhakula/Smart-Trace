import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Components/Firebase';
import BlacklistedItemsList from './Blacklisted_Items_List';

const MyBlacklist = () => {
    //variables and functions
    const user = firebase.auth().currentUser;
    const [blackList, setBlackList] =useState();

    //function to call black list from the database
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Reports').orderByChild('reporterId').equalTo(user.email);
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const blackList = [];
            for(let id in products){
                blackList.push({ id, ... products[id]});
            }
            console.log(blackList);
            setBlackList(blackList);
        });
    },[]);

    return(
        <div className="black-list">
            <h1>myBlackList</h1><Link className="link" to="/blacklistedItems">Global List</Link>
            {blackList ? blackList.map((names, index) => <BlacklistedItemsList name={names} key={index}/>) : ''}
        </div>
    );
};
export default MyBlacklist;