import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';

const Possessions = () => {

    //variables
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [image, setImage] = useState(null);
    const [userId, setUserId] = useState('abraham@gmail.com');
    const [serialNumber, setSerialNumber] = useState();

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
            userId,
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

    const authListener = () => {
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
    },[]);

    
    return(
        <div>
            <label>Item Name: </label><input type="text" required value={itemName} onChange={e=> setItemName(e.target.value)}/>
            <label>Serial Number: </label><input type="text" required value={serialNumber} onChange={e=> setSerialNumber(e.target.value)}/>
            <label>Item Description: </label><input type="text" required value={itemDescription} onChange={e=> setItemDescription(e.target.value)} />
            <label>Image: </label><input type="file" required onChange={fileSelectedHandler}/>
            <button onClick={saveData}>Save Item</button>
        </div>
    );
};
export default Possessions;