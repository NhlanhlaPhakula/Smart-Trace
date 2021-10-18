import React, { useEffect, useState } from 'react';
import Webcam from "react-webcam";
import Tesseract from 'tesseract.js';
import firebase from '../Components/Firebase';
import Serial1Results, { Serial2Results, Serial3Results, Serial4Results, Serial5Results, Serial6Results, Serial7Results, Serial8Results, Serial9Results } from './ImageToTextResults';
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
   
   //serial number extraction
   const [serial1List,setSerial1List] = useState();
   const [serial2List,setSerial2List] = useState();
   const [serial3List,setSerial3List] = useState();
   const [serial4List,setSerial4List] = useState();
   const [serial5List,setSerial5List] = useState();
   const [serial6List,setSerial6List] = useState();
   const [serial7List,setSerial7List] = useState();
   const [serial8List,setSerial8List] = useState();
   const [serial9List,setSerial9List] = useState();

   //serial numbers to compare from 
   var SN1 = '147852369';
   var SN2 = '369852147';
   var SN3 = '951357654';
   var SN4 = '654852789';
   var SN5 = 'sn:123456789';
   var SN6 = '789456';
   var SN7 = '123456';
   var SN8 = '25896324';
   var SN9 = '789456123';

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

            //a function to campare extracted text to the serial numbers 
            if(text = SN1) {
                const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(SN1);
                findRef.on('value',(snapshot) => {
                    const products = snapshot.val();
                    const serial1List = [];
                    for(let id in products) {
                        serial1List.push({id, ... products[id]});
                    }
                    setSerial1List(serial1List);
                    console.log('SN1',serial1List);
                },[]);
            }else{
                if(text = SN2) {
                    const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(SN2);
                    findRef.on('value',(snapshot) => {
                        const products = snapshot.val();
                        const serial2List = [];
                        for(let id in products) {
                            serial2List.push({ id, ... products[id]});
                        }
                        setSerial2List(serial2List);
                        console.log('SN2',serial2List);
                    },[]);
                }else{
                    if(text = SN3) {
                        const findRef = firebase.database().ref('Products').orderByChild('serialNmber').equalTo(SN3);
                        findRef.on('value',(snapshot) => {
                            const products = snapshot.val();
                            const serial3List = [];
                            for(let id in products) {
                                serial3List.push({ id, ... products[id]});
                            }
                            setSerial3List(serial3List);
                            console.log('SN3',serial3List);
                        },[]);
                    }else{
                        if(text = SN4) {
                            const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(SN4);
                            findRef.on('value',(snapshot) => {
                                const products = snapshot.val();
                                const serial4List = [];
                                for(let id in products) {
                                    serial4List.push({ id, ... products[id]});
                                }
                                setSerial4List(serial4List);
                                console.log('SN4',serial4List);
                            },[]);
                        }else{
                            if(text = SN5) {
                                const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(SN5);
                                findRef.on('value',(snapshot) => {
                                    const products = snapshot.val();
                                    const serial5List = [];
                                    for(let id in products) {
                                        serial5List.push({ id, ... products[id]});
                                    }
                                    setSerial5List(serial5List);
                                    console.log('SN5',serial5List);
                                },[]);
                            }else{
                                if(text = SN6) {
                                    const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(SN6);
                                    findRef.on('value',(snapshot) => {
                                        const products = snapshot.val();
                                        const serial6List = [];
                                        for(let id in products) {
                                            serial6List.push({ id, ... products[id]});
                                        }
                                        setSerial6List(serial6List);
                                        console.log('SN6',serial6List);
                                    },[]);
                                }else{
                                    if(text = SN7) {
                                        const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(SN7);
                                        findRef.on('value',(snapshot) => {
                                            const products = snapshot.val();
                                            const serial7List = [];
                                            for(let id in products){
                                                serial7List.push({ id, ... products[id]});
                                            }
                                            setSerial7List(serial7List);
                                            console.log('SN7',serial7List);
                                        },[]);
                                    }else{
                                        if(text = SN8) {
                                            const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(SN8);
                                            findRef.on('value',(snapshot) => {
                                                const products = snapshot.val();
                                                const  serial8List = [];
                                                for(let id in products) {
                                                    serial8List.push({ id, ... products[id]});
                                                }
                                                setSerial8List(serial8List);
                                                console.log('SN8',serial8List);
                                            },[]);
                                        }else{
                                            if(text = SN9) {
                                                const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(SN9);
                                                findRef.on('value',(snapshot) => {
                                                    const products = snapshot.val();
                                                    const serial9List = [];
                                                    for(let id in products) {
                                                        serial9List.push({ id, ... products[id]});
                                                    }
                                                    setSerial9List(serial9List);
                                                    console.log('SN9',serial9List);
                                                },[]);
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            

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
            <div>
                
                {serial1List ? serial1List.map((names,index) => <Serial1Results names={names} key={index}/>):''}
                {serial2List ? serial2List.map((names,index) => <Serial2Results names={names} key={index} />):''}
                {serial3List ? serial3List.map((names,index) => <Serial3Results names={names} key={index} />):''}
                {serial4List ? serial4List.map((names,index) => <Serial4Results names={names} key={index} />):''}
                {serial5List ? serial5List.map((names,index) => <Serial5Results names={names} key={index}/>):''}
                {serial6List ? serial6List.map((names,index) => <Serial6Results names={names} key={index}/>):''}
                {serial7List ? serial7List.map((names,index) => <Serial7Results names={names} key={index}/>):''}
                {serial8List ? serial8List.map((names,index) => <Serial8Results names={names} key={index}/>):''}
                {serial9List ? serial9List.map((names,index) => <Serial9Results names={names} key={index} />):''}
            </div>
        </div>
    );
};
export default WebcamCapture;