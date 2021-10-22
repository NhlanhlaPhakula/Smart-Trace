import React, { useState } from 'react';
import firebase from '../Components/Firebase';

const BlacklistedItemsList = ({name}) => {
    //variables and functions
    const user = firebase.auth().currentUser;
    const [alternative,setAlternative] = useState("You are not the rightful owner of this item, so back off!");
    const [date,setDate] = useState(Date);

    //a function to remove the item from the report database
    const handleFound = () => {
        if(user.email === name.userId){
            const handleRemove = firebase.database().ref('Reports').child(name.id);
            handleRemove.remove();
        }else{
            console.log("You are not the owner!");
            //setAlternative(alternative);
        };
    };

    const handleLostAndFound = () => {
        const saveData = firebase.database().ref('LostAndFound');

        const savingData = {
            ownerId: name.userId,
            itemName: name.productName,
            serialNumber: name.serialNumber,
            description: name.description,
           // reporterId: name.reporterId,
            userId: user.email,
            foundDate: date,
        };
        saveData.push(savingData);
    };

    return(
        <div className="blacklisted-items-list-table">
            <label>OwnerId: </label>{name.userId}<br/>
            <label>Item: </label>{name.productName}<br/>
            <label>S/N: </label>{name.serialNumber}<br/>
            <label>Description: </label>{name.description}<br/>
            {/*<label>Reporter: </label>{name.reporterId}<br/>*/}
            <button onClick={() => {
                handleFound();
                handleLostAndFound();
            }}>Found</button><br/><br/>
            
        </div>
    );
};
export default BlacklistedItemsList;