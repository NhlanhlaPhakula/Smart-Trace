import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import { Link } from 'react-router-dom';
import Popup from './Popup';

const Admin = () => {

    //variables
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState();
   // const [userId, setUserId] = useState();

   //popup function variable
   const [isOpen, setIsOpen] = useState(false);
   const [isOpenRes,setIsOpenRes] = useState(false);

   //toggle function for popup
   const togglePopup = () => {
       setIsOpen(!isOpen);
   };

   //toggle function for popup
   const togglePopupRes = () => {
       setIsOpenRes(!isOpenRes);
   };

    //image variables
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    //handle change function
    const handleChange = e => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };

    //clear input fields after submitting
    const clearInputs = () => {
        setItemName('');
        setItemDescription('');
        setSerialNumber('');
        setImage();
    };

    //user function
    const user = firebase.auth().currentUser;

    //a function to upload the image into images folder in firebase storage
    const handleUpload = () => {
        const saveRef = firebase.storage().ref(`images/${image.name}`).put(image);
        saveRef.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                firebase.storage()
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    setUrl(url);
                });
            }
        );
    };//yey! it worked finally

    //a function to add product and its url into the firebase realtime database
   /* const saveData = () => {
        const saveRef = firebase.database().ref('Products');

        const savingData = {
            userId:user.email,
            url,
            stolen: false,
            sold: false,
            serialNumber,
            sale: false,
            report: false,
            itemName,
            itemDescription,
            category,
        };
        saveRef.push(savingData);
        clearInputs();
    };*/

    // a function to save data into the database and to check if an item exists first
    const handleCheckFirst = () => {
        const checkRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber);
        checkRef.on('value',(snapshot) => {
            if(snapshot.exists()){
                const userData = snapshot.val();
                console.log("exists!",userData);
                //setIsOpenRes(!isOpenRes);
            }else{
                setIsOpen(isOpen);
                const saveRef = firebase.database().ref('Products');

                const savingData = {
                    userId:user.email,
                    url,
                    stolen: false,
                    sold: false,
                    serialNumber,
                    sale: false,
                    report: false,
                    itemName,
                    itemDescription,
                    category,
                };
                saveRef.push(savingData);
                clearInputs();
               
            };
        });
    };

    //print the image in the console log to check if its working
    console.log("image: ", image);


    return(
        <div className="profile">
            <h1 className="profile">ADD NEW ITEMS</h1>
            <Link className="link" to="/adminProducts">MyProducts</Link>
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Empty input fields means <br/>Done!!<br/>Else, the serial number already exists (*try again*) </p>
            </>}
            handleClose={togglePopup}
            />}
            <div className="product-picture">
                <progress value={progress} max="100"/>
                <h1>Progress bar</h1>
                <input type="file" onChange={handleChange}/>
                <button onClick={handleUpload}>Upload Picture</button>
                <br />
                {url}
                <br />
                <img src={url || "http://via.placeholder.com/300x300"} alt="product-image"/>
            </div>
            <h1>Admin</h1>
            <div className="product-input-fields">
                <label>Item Name : </label><input type="text" required value={itemName} onChange={e=> setItemName(e.target.value)}/><br/>
                <label>Serial Number : </label><input type="number" required value={serialNumber} onChange={e=> setSerialNumber(e.target.value)}/><br/>
                <label>Item Description : </label><input type="text" required value={itemDescription} onChange={e=> setItemDescription(e.target.value)}/><br/>
                <label>Category :</label><select value={category} onChange={e=> setCategory(e.target.value)}>
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
            <button onClick={() => {
                handleCheckFirst();
                togglePopup();
            }}>Add Item</button>
            <br>
            </br>
            
        </div>
    );
};
export default Admin;