import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import firebase from '../Components/Firebase';
import Serial1Results, { Serial2Results, Serial3Results, Serial4Results, Serial5Results, Serial6Results, Serial7Results, Serial8Results, Serial9Results } from './ImageToTextResults';
import Popup from './Popup';

const ImageToText = () => {
    //variables
    const [imagePath, setImagePath] = useState("");
    //const [serialNumber, setText] = useState();
    const [productsList, setProductsList] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [text,setText] = useState();
    const [productList,setProductList] = useState();

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

    //compare
    var serialNumber = '147852369';
    var serialNumber2 = '369852147';
    var serialNumber3 = '951357654';
    var serialNumber4 = '654852789';
    var serialNumber5 = 'sn:123456789';
    var serialNumber6 = '789456';
    var serialNumber7 = '123456';
    var serialNumber8 = '25896324';
    var serialNumber9 = '789456123';


    // progress function variables
    const [progress,setProgress] = useState(0);

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
        
            //console.log(serialNumber);
            if(text = serialNumber){
                //console.log('These two values are similar');
                const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber);
                findRef.on('value',(snapshot) => {
                    const products = snapshot.val();
                    const serial1List = [];
                    for(let id in products) {
                        serial1List.push({ id, ... products[id]});
                    };
                    setSerial1List(serial1List);
                    console.log('serial1',serial1List);
                },[]);
                const saveRef = firebase.database().ref('Notifications');

                const savingData = {
                    Trigger: user.email,
                    date,
                    serialNumber:serialNumber,
                };
                saveRef.push(savingData);

            }else{
                //console.log('These  two values are different');
                if(text = serialNumber2) {
                    const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber2);
                    findRef.on('value',(snapshot) => {
                        const products = snapshot.val();
                        const serial2List = [];
                        for(let id in products) {
                            serial2List.push({ id, ... products[id]});
                        }
                        setSerial2List(serial2List);
                        console.log('serial2:',serial2List);
                    },[]);
                    const saveRef = firebase.database().ref('Notifications');

                    const savingData = {
                        Trigger: user.email,
                        date,
                        serialNumber:serialNumber2,
                    };
                    saveRef.push(savingData);
                }else{
                    if(text = serialNumber3) {
                        const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber3);
                        findRef.on('value',(snapshot) => {
                            const products = snapshot.val();
                            const serial3List = [];
                            for(let id in products) {
                                serial3List.push({ id, ... products[id]});
                            }
                            setSerial3List(serial3List);
                            console.log('serial3',serial3List);
                        },[]);
                        const saveRef = firebase.database().ref('Notifications');

                        const savingData = {
                            Trigger: user.email,
                            date,
                            serialNumber:serialNumber3,
                        };
                        saveRef.push(savingData);
                    }else{
                        if(text = serialNumber4) {
                            const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber4);
                            findRef.on('value',(snapshot) => {
                            const products = snapshot.val();
                            const serial4List = [];
                            for(let id in products) {
                                serial4List.push({ id, ... products[id]});
                            }
                            setSerial4List(serial4List);
                            console.log('serial4',serial4List);
                            },[]);
                            const saveRef = firebase.database().ref('Notifications');

                            const savingData = {
                                Trigger: user.email,
                                date,
                                serialNumber:serialNumber4,
                            };
                            saveRef.push(savingData);
                        }else{
                            if(text = serialNumber4) {
                                const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber5);
                                findRef.on('value',(snapshot) => {
                                    const products = snapshot.val();
                                    const serial5List = [];
                                    for(let id in products) {
                                        serial5List.push({ id, ... products[id]});
                                    }
                                    setSerial5List(serial5List);
                                    console.log('serial5',serial5List);
                                },[]);
                                const saveRef = firebase.database().ref('Notifications');

                                const savingData = {
                                    Trigger: user.email,
                                    date,
                                    serialNumber:serialNumber5,
                                };
                                saveRef.push(savingData);
                            }else{
                                if(text = serialNumber5) {
                                    const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber6);
                                    findRef.on('value',(snapshot) => {
                                        const products = snapshot.val();
                                        const serial6List = [];
                                        for(let id in products) {
                                            serial6List.push({ id, ... products[id]});
                                        }
                                        setSerial6List(serial6List);
                                        console.log('serial6',serial6List);
                                    },[]);
                                    const saveRef = firebase.database().ref('Notifications');

                                    const savingData = {
                                        Trigger: user.email,
                                        date,
                                        serialNumber:serialNumber5,
                                    };
                                    saveRef.push(savingData);
                                }else{
                                    if(text = serialNumber6) {
                                        const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber7);
                                        findRef.on('value',(snapshot) => {
                                            const products = snapshot.val();
                                            const serial7List = [];
                                            for(let id in products) {
                                                serial7List.push({ id, ... products[id]});
                                            }
                                            setSerial7List(serial7List);
                                            console.log('serial7',serial7List);
                                        },[]);
                                        const saveRef = firebase.database().ref('Notifications');

                                        const savingData = {
                                            Trigger: user.email,
                                            date,
                                            serialNumber:serialNumber6,
                                        };
                                        saveRef.push(savingData);
                                    }else{
                                        if(text = serialNumber7) {
                                            const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber8);
                                            findRef.on('value',(snapshot) => {
                                                const products = snapshot.val();
                                                const serial8List = [];
                                                for(let id in products) {
                                                    serial8List.push({ id, ... products[id]});
                                                }
                                                setSerial8List(serial8List);
                                                console.log('serial8',serial8List);
                                            },[]);
                                            const saveRef = firebase.database().ref('Notifications');

                                            const savingData = {
                                                Trigger: user.email,
                                                date,
                                                serialNumber:serialNumber7,
                                            };
                                            saveRef.push(savingData);
                                        }else{
                                            if(text = serialNumber9) {
                                                const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber9);
                                                findRef.on('value',(snapshot) => {
                                                    const products = snapshot.val();
                                                    const serial9List = [];
                                                    for(let id in products) {
                                                        serial9List.push({ id, ... products[id]});
                                                    }
                                                    setSerial9List(serial9List);
                                                    console.log('serial9',serial9List);
                                                },[]);
                                                const saveRef = firebase.database().ref('Notifications');

                                                const savingData = {
                                                    Trigger: user.email,
                                                    date,
                                                    serialNumber:serialNumber9,
                                                };
                                                saveRef.push(savingData);
                                            }else{
                                                if(text = serialNumber8) {
                                                    const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber8);
                                                    findRef.on('value',(snapshot) => {
                                                        const products = snapshot.val();
                                                        const serial8List = [];
                                                        for(let id in products) {
                                                            serial8List.push({ id, ... products[id]});
                                                        }
                                                        setSerial8List(serial8List);
                                                        console.log('serial8',serial8List);
                                                    },[]);
                                                    const saveRef = firebase.database().ref('Notifications');

                                                    const savingData = {
                                                        Trigger: user.email,
                                                        date,
                                                        serialNumber:serialNumber8,
                                                    };
                                                    saveRef.push(savingData);
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            
            /*if(text = serialNumber) {
                const findRef = firebase.database().ref('Products').orderByChild('serialNumber').equalTo(serialNumber);
                findRef.on('value',(snapshot) => {
                    const products = snapshot.val();
                    const serial1List = [];
                    for(let id in products) {
                        serial1List.push({ id, ... products[id]});
                    };
                    setSerial1List(serial1List);
                    console.log('serial1',serial1List);
                },[]);
            }else{
                console.log('They are different');
            };*/
        });
        
        
    };
    /*useEffect(() => {
        console.log('this is the extracted text:',text);
        var serialNumber = '147852369';
        if(serialNumber = text) {
            console.log('These two values are similar');
        }else{
            console.log('These two values are different');
        };
    });*/

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
            <div className="search-outcome">
                <h3>Results:</h3>
                {serial1List ? serial1List.map((names,index) => <Serial1Results names={names} key={index}/>):''}
                {serial2List ? serial2List.map((names,index) => <Serial2Results names={names} key={index}/>):''}
                {serial3List ? serial3List.map((names,index) => <Serial3Results names={names} key={index}/>):''}
                {serial4List ? serial4List.map((names,index) => <Serial4Results names={names} key={index}/>):''}
                {serial5List ? serial5List.map((names,index) => <Serial5Results names={names} key={index}/>):''}
                {serial6List ? serial6List.map((names,index) => <Serial6Results names={names} key={index}/>):''}
                {serial7List ? serial7List.map((names,index) => <Serial7Results names={names} key={index}/>):''}
                {serial8List ? serial8List.map((names,index) => <Serial8Results names={names} key={index}/>):''}
                {serial9List ? serial8List.map((names,index) => <Serial9Results names={names} key={index}/>):''}
            </div>
        </div>
    );
};
export default ImageToText;