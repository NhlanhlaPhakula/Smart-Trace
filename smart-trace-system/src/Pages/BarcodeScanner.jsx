import React, { useEffect, useState } from 'react';
import Webcam from "react-webcam";
import Tesseract from 'tesseract.js';
import firebase from '../Components/Firebase';
import SerialNumberResults from './ImageToTextResults';

import Popup from './Popup';


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "Webcam0",
};

const WebcamCapture = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);
    const [text, setText] = useState("");
   // const [imageSrc, setImageSrc] = useState();
   const [productsList, setProductsList] = useState();
   const [isOpen,setIsOpen] = useState(false);
   
   const [results,setResults] = useState();

  
   //popup function
   const togglePopup = () => {
       setIsOpen(!isOpen);
   };
    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        console.log('Image Name:',imageSrc);

        Tesseract.recognize(
            imageSrc,'eng',
            {
                logger: m => console.log(m)
            }
        )
        .catch(err => {
            console.assert.error(err);
        })
        .then(({ data: { text } }) => {
            console.log(text);
            setText(text);

            // a function to find related items from the database
            const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(text);
            findRef.on('value',(snapshot) => {
                const items = snapshot.val();
                const results = [];
                for(let id in items) {
                    results.push({ id, ... items[id]});
                }
                setResults(results);
            },[]);
            

        });
        
            
    });



    return (
        <div className="webcam-container">
            <br/>
            <h1>Validate by image capture</h1>
            <br/>
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                        togglePopup();
                    }}
                        className="webcam-btn">Capture</button>
                }
            </div>
            <div>
                {isOpen && <Popup 
                    content={<>
                        <b>Smart Trace</b>
                        <p>Hang in there am still processing.....</p>
                        <h6>Exit this by pressing the x on top ^</h6>
                </>}
                handleClose={togglePopup}
                />}
                <h3>Extracted Text:</h3>
                <div className="text-box">
                    <p>{text}</p>
                </div>
                {/*<button onClick={handleClick} style={{height:50}}>Convert-To-Text</button>*/}
            </div>
            <div>
                {results ? results.map((names,index) => <SerialNumberResults names={names} key={index}/>):''}
            </div>
        </div>
    );
};
export default WebcamCapture;