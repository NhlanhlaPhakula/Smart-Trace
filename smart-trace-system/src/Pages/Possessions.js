import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';

const Possessions = () => {

    //variables
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [image, setImage] = useState(null);
    const [serialNumber, setSerialNumber] = useState();

    //const filename = location.pathname.substr(location.pathname.lastIndexOf("/")+1);
    //user function
    const user = firebase.auth().currentUser;

    //clear inputs
    const clearInputs = () => {
        setItemName('');
        setItemDescription('');
        setImage('');
        setSerialNumber('');
    };

   //function 
   const fileSelectedHandler = (event) => {
       setImage(event.target.files[0]);
   };

    //functions
    const saveData = () => {
       
        const saveRef = firebase.database().ref('Products');

        const savingData = {
            userId: user.email,
            serialNumber,
            itemName,
            itemDescription,
            image,
            stolen:false,
            sold:false,
            sale:false,
        };
        saveRef.push(savingData);
        clearInputs();
    };

   /* const authListener = () => {
        firebase.auth().onAuthStateChanged(serialNumber =>{
            if(serialNumber){
                clearInputs();
                setSerialNumber(serialNumber);
            }else{
                setSerialNumber("");
            };
        });
    };

    useEffect(() => {
        authListener();
    },[]);*/

    /*useEffect(() => {
        if(saveData){
            alert('Product registered successfully!');
        }
        else{
            alert('Product could not be registered :(');
        }
    },[saveData]);*/

    
    return(
        <div className="possessions">
            <label>Item Name: </label><input type="text" required value={itemName} onChange={e=> setItemName(e.target.value)}/><br />
            <label>Serial Number: </label><input type="text" required value={serialNumber} onChange={e=> setSerialNumber(e.target.value)}/><br />
            <label>Item Description: </label><input type="text" required value={itemDescription} onChange={e=> setItemDescription(e.target.value)} /><br />
            <label>Image: </label><input type="file" required onChange={fileSelectedHandler}/><br />
            <button onClick={saveData}>Save Item</button>
        </div>
    );
};
export default Possessions;