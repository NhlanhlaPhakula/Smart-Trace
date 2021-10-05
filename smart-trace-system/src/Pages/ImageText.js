import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import firebase from '../Components/Firebase';
import Popup from './Popup';

const ImageToText = () => {
    //variables
    const [imagePath, setImagePath] = useState("");
    //const [serialNumber, setText] = useState();
    const [productsList, setProductsList] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [text,setText] = useState();
    const [productList,setProductList] = useState();

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

            //use the extracted text to search the the database for an item related to the serial number 
            const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(text);
            findRef.on('value', (snapshot) => {
                const products = snapshot.val();
                const productsList = [];

                for(let id in products){
                    productsList.push({ id, ... products[id]});
                }
                setProductsList(productsList);
                console.log('The extracted S/N is related to this product:',productsList);
            },[]);    
            console.log('This is the extracted text:',text); 
            
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
    /*//use the extracted text to search the the database for an item related to the serial number
            const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(text);
            findRef.on('value', (snapshot) => {
                const products = snapshot.val();
                const productsList = [];

                for(let id in products){
                    productsList.push({ id, ... products[id]});
                }
                setProductsList(productsList);
                console.log('The extracted S/N is related to this product:',productsList);
            },[]);    
            console.log('This is the extracted text:',text);  */

    return(
        <div className="image-to-text">
            <main className="main">
                <h3>Actual image uploaded</h3>
                <img src={imagePath || "http://via.placeholder.com/300x300"} className="logo" alt="image" />
                <h3>Extracted Text</h3>
                <div className="text-box">
                    <p>{text}</p>
                </div>
                <input type="file" onChange={handleChange}  className="file" /><br/><br/>
                <button onClick={() => {
                    handleClick();
                    togglePopup();
                }} style={{height:50}}>Convert to Text</button><br/>
                {
                    isOpen && <Popup 
                        content={<>
                            <b>Smart Trace</b>
                            <p>Hang tight i'm still processing...</p>
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