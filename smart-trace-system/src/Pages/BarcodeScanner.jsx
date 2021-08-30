import React, { useEffect, useState } from 'react';
import Webcam from "react-webcam";
import Tesseract from 'tesseract.js';
import firebase from '../Components/Firebase';
import Popup from './Popup';


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

const WebcamCapture = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);
    const [text, setText] = useState("");
   // const [imageSrc, setImageSrc] = useState();
   const [productsList, setProductsList] = useState();
   const [isOpen,setIsOpen] = useState(false);

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
            const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(text);
            findRef.on('value',(snapshot) => {
                const products = snapshot.val();
                const productsList = [];
                for(let id in products) {
                    productsList.push({ id, ... products[id]});
                }
                setProductsList(productsList);
                console.log('This serial number is equivalent to this product:',productsList);
            },[]);
        });
        
            
    });

    /*const handleClick = () => {
        
        Tesseract.recognize(
            image,'eng',
            {
                logger: m => console.log(m)
            }
        )
        .catch(err => {
            console.error(err);
        })
        .then(result => {
            //get confidence score
            let confidence = result.confidence
            let text = result.text
            setText(text);
            console.log('Translated Text:',text)
        })
    }*/


    return (
        <div className="webcam-container">
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
        </div>
    );
};
export default WebcamCapture;