import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import firebase from '../Components/Firebase';
import Popup from './Popup';

const ImageToText = () => {
    //variables
    const [imagePath, setImagePath] = useState("");
    const [serialNumber, setText] = useState();
    const [productsList, setProductsList] = useState();
    const [isOpen, setIsOpen] = useState(false);

    // progress function variables
    const [progress,setProgress] = useState(0);

    //onchange function
    const handleChange = (event) => {
        setImagePath(URL.createObjectURL(event.target.files[0]));
    }

    //toggle function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    //onclick function
    const handleClick = () => {
        Tesseract.recognize(
            imagePath,'eng',
            {
                logger: m => console.log(m)
                
            }
        )
        .catch(err => {
            console.error(err);
        })
        .then(({ data: {text} }) => {
            console.log(text);
            setText(text);
            const serialNumber = text;

            const findRef = firebase.database().ref('Cart').orderByChild('serialNumber').equalTo(serialNumber);
            findRef.on('value', (snapshot) => {
                const products = snapshot.val();
                const productsList = [];

                for(let id in products){
                    productsList.push({ id, ... products[id]});
                }
                setProductsList(productsList);
                console.log('The extracted S/N is related to this product:',productsList);
            },[]);
        });
    
    };

    /*const handleFind = () => {
        const searchRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(text);
        searchRef.on('value',(snapshot) => {
            const serialNumber = snapshot.val();
            const productsList = [];
            for(let id in serialNumber) {
                productsList.push({ id, ... serialNumber[id]});
            }
           //setProductsList(productsList);
            console.log('Results:',productsList);
        });
    };*/


    return(
        <div className="image-to-text">
            <main className="main">
                <h3>Actual image uploaded</h3>
                <img src={imagePath} className="logo" alt="image" />
                <h3>Extracted Text</h3>
                <div className="text-box">
                    <p>{serialNumber}</p>
                </div>
                <input type="file" onChange={handleChange} /><br/><br/>
                <button onClick={() => {
                    handleClick();
                    togglePopup();
                }} style={{height:50}}>Convert to Text</button><br/>
                {
                    isOpen && <Popup 
                        content={<>
                            <b>Smart Trace</b>
                            <p>Hang tight am still processing...</p>
                            <h6>To exit this press the x on top ^</h6>
                </>}
                handleClose={togglePopup}
                />
                }
                {/*<button onClick={handleFind}>Find</button>*/}
            </main>
        </div>
    );
};
export default ImageToText;