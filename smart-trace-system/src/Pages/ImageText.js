import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import firebase from '../Components/Firebase';
import  SerialNumberResults  from './ImageToTextResults';
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
    const [items,setItems] = useState();

    //user
    const user = firebase.auth().currentUser;
    const [date,setDate] = useState(Date);
    //onchange function
    const handleChange = (event) => {
        setImagePath(URL.createObjectURL(event.target.files[0]));
    }

    //toggle function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    //a function to extract text from the image
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

            //({ data: {text} });
            console.log({ data: {text} });

            //store item in the store
           /* const saveRef = firebase.database().ref('Items');
            const saveData = {
                userId: user.email,
                text: information,
            };
            saveRef.push(saveData);*/

            //find item
            const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(text);
            findRef.on('value',(snapshot) => {
                const Items = snapshot.val();
                const items = [];
                for(let id in Items) {
                    items.push({ id, ... Items[id]});
                }
                setItems(items);
                console.log('Related:',items);
            });
        
            
        });
        
        
    };
    

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
                }} style={{height:50}}>Find Item</button><br/>
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
            <div className="search-outcome">
                <h3>Results:</h3>
                {items ? items.map((names,index) => <SerialNumberResults names={names} key={index}/>):''}
            </div>
        </div>
    );
};
export default ImageToText;