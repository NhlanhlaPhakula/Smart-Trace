import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import Popup from './Popup';

const Serial1Results = ({names}) => {
    //popup variables
    const [isOpen,setIsOpen] = useState(false);

    //variables for saving bouught items in the database
    const [date,setDate] = useState(Date);
    const user = firebase.auth().currentUser;

    //popup function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    //a function for saving purchased items in the database
    const handlePurchase = () => {
        const saveRef = firebase.database().ref('Purchase');

        const savingData = {
            userId: user.email,
            url:names.url,
            date,
            itemName: names.itemName,
            serialNumber: names.serialNumber,
            itemDescription: names.itemDescription,
            category: names.category,
            price: names.price,
        };
        saveRef.push(savingData);
    };

    return(
        <div>
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Purchased Successfully :)</p>
            </>}
            handleClose={togglePopup}
            />
            }
            <img src={names.url} className="logo" alt="image"/>
            <h6>{names.userId}</h6>
            <h6>{names.itemName}</h6>
            <h6>{names.itemDescription}</h6>
            <h6>{names.report}</h6>
            <h6>{names.price}</h6>
            <button onClick={() => {
                togglePopup();
                handlePurchase();
            }}>Buy</button>
        </div>
    );
};
export default Serial1Results;

const Serial2Results = ({names}) => {
    //popup variables
    const [isOpen,setIsOpen] = useState(false);

    //variables for saving bouught items in the database
    const [date,setDate] = useState(Date);
    const user = firebase.auth().currentUser;

    //popup function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    ////a function for saving purchased items in the database
    const handlePurchase = () => {
        const saveRef = firebase.database().ref('Purchase');

        const savingData = {
            userId: user.email,
            url:names.url,
            date,
            itemName: names.itemName,
            serialNumber: names.serialNumber,
            itemDescription: names.itemDescription,
            category: names.category,
            price: names.price,
        };
        saveRef.push(savingData);
    };

    return(
        <div>
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Purchased Successfully :)</p>
            </>}
            handleClose={togglePopup}
            />
            }
            <img src={names.url} className="logo" alt="image"/>
            <h6>{names.userId}</h6>
            <h6>{names.itemName}</h6>
            <h6>{names.itemDescription}</h6>
            <h6>{names.report}</h6>
            <h6>{names.price}</h6>
            <button onClick={() => {
                handlePurchase();
                togglePopup();
            }}>Buy</button>
        </div>
    );
};

const Serial3Results = ({names}) => {
    //variables
     //popup variables
     const [isOpen,setIsOpen] = useState(false);

     //variables for saving bouught items in the database
     const [date,setDate] = useState(Date);
     const user = firebase.auth().currentUser;
 
     //popup function
     const togglePopup = () => {
         setIsOpen(!isOpen);
     };
 
     ////a function for saving purchased items in the database
     const handlePurchase = () => {
         const saveRef = firebase.database().ref('Purchase');
 
         const savingData = {
             userId: user.email,
             url:names.url,
             date,
             itemName: names.itemName,
             serialNumber: names.serialNumber,
             itemDescription: names.itemDescription,
             category: names.category,
             price: names.price,
         };
         saveRef.push(savingData);
     };

    return(
        <div>
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Purchased Successfully :)</p>
            </>}
            handleClose={togglePopup}
            />
            }
            <img src={names.url} className="logo" alt="image"/>
            <h6>{names.userId}</h6>
            <h6>{names.itemName}</h6>
            <h6>{names.itemDescription}</h6>
            <h6>{names.report}</h6>
            <h6>{names.price}</h6>
            <button onClick={() => {
                handlePurchase();
                togglePopup();
            }}>Buy</button>
        </div>
    );
};

const Serial4Results = ({names}) => {
    //variables
    //popup variables
    const [isOpen,setIsOpen] = useState(false);

    //variables for saving bouught items in the database
    const [date,setDate] = useState(Date);
    const user = firebase.auth().currentUser;

    //popup function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    ////a function for saving purchased items in the database
    const handlePurchase = () => {
        const saveRef = firebase.database().ref('Purchase');

        const savingData = {
            userId: user.email,
            url:names.url,
            date,
            itemName: names.itemName,
            serialNumber: names.serialNumber,
            itemDescription: names.itemDescription,
            category: names.category,
            price: names.price,
        };
        saveRef.push(savingData);
    };

    return(
        <div>
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Purchased Successfully :)</p>
            </>}
            handleClose={togglePopup}
            />
            }
            <img src={names.url} className="logo" alt="image"/>
            <h6>{names.userId}</h6>
            <h6>{names.itemName}</h6>
            <h6>{names.itemDescription}</h6>
            <h6>{names.report}</h6>
            <h6>{names.price}</h6>
            <button onClick={() => {
                handlePurchase();
                togglePopup();
            }}>Buy</button>
        </div>
    );
};

const Serial5Results = ({names}) => {
    //variables
    //popup variables
    const [isOpen,setIsOpen] = useState(false);

    //variables for saving bouught items in the database
    const [date,setDate] = useState(Date);
    const user = firebase.auth().currentUser;

    //popup function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    ////a function for saving purchased items in the database
    const handlePurchase = () => {
        const saveRef = firebase.database().ref('Purchase');

        const savingData = {
            userId: user.email,
            url:names.url,
            date,
            itemName: names.itemName,
            serialNumber: names.serialNumber,
            itemDescription: names.itemDescription,
            category: names.category,
            price: names.price,
        };
        saveRef.push(savingData);
    };

    return(
        <div>
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Purchased Successfully :)</p>
            </>}
            handleClose={togglePopup}
            />
            }
            <img src={names.url} className="logo" alt="image"/>
            <h6>{names.userId}</h6>
            <h6>{names.itemName}</h6>
            <h6>{names.itemDescription}</h6>
            <h6>{names.report}</h6>
            <h6>{names.price}</h6>
            <button onClick={() => {
                handlePurchase();
                togglePopup();
            }}>Buy</button>
        </div>
    );
};

const Serial6Results = ({names}) => {
    //variables
    //popup variables
    const [isOpen,setIsOpen] = useState(false);

    //variables for saving bouught items in the database
    const [date,setDate] = useState(Date);
    const user = firebase.auth().currentUser;

    //popup function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    ////a function for saving purchased items in the database
    const handlePurchase = () => {
        const saveRef = firebase.database().ref('Purchase');

        const savingData = {
            userId: user.email,
            url:names.url,
            date,
            itemName: names.itemName,
            serialNumber: names.serialNumber,
            itemDescription: names.itemDescription,
            category: names.category,
            price: names.price,
        };
        saveRef.push(savingData);
    };


    return(
        <div>
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Purchased Successfully :)</p>
            </>}
            handleClose={togglePopup}
            />
            }
            <img src={names.url} className="logo" alt="image"/>
            <h6>{names.userId}</h6>
            <h6>{names.itemName}</h6>
            <h6>{names.itemDescription}</h6>
            <h6>{names.report}</h6>
            <h6>{names.price}</h6>
            <button onClick={() => {
                handlePurchase();
                togglePopup();
            }}>Buy</button>
        </div>
    );
};

const Serial7Results = ({names}) => {
    //variables
    //popup variables
    const [isOpen,setIsOpen] = useState(false);

    //variables for saving bouught items in the database
    const [date,setDate] = useState(Date);
    const user = firebase.auth().currentUser;

    //popup function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    ////a function for saving purchased items in the database
    const handlePurchase = () => {
        const saveRef = firebase.database().ref('Purchase');

        const savingData = {
            userId: user.email,
            url:names.url,
            date,
            itemName: names.itemName,
            serialNumber: names.serialNumber,
            itemDescription: names.itemDescription,
            category: names.category,
            price: names.price,
        };
        saveRef.push(savingData);
    };


    return(
        <div>
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Purchased Successfully :)</p>
            </>}
            handleClose={togglePopup}
            />
            }
            <img src={names.url} className="logo" alt="image"/>
            <h6>{names.userId}</h6>
            <h6>{names.itemName}</h6>
            <h6>{names.itemDescription}</h6>
            <h6>{names.report}</h6>
            <h6>{names.price}</h6>
            <button onClick={() => {
                handlePurchase();
                togglePopup();
            }}>Buy</button>
        </div>
    );
};

const Serial8Results = ({names}) => {
    //variables
    //popup variables
    const [isOpen,setIsOpen] = useState(false);

    //variables for saving bouught items in the database
    const [date,setDate] = useState(Date);
    const user = firebase.auth().currentUser;

    //popup function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    ////a function for saving purchased items in the database
    const handlePurchase = () => {
        const saveRef = firebase.database().ref('Purchase');

        const savingData = {
            userId: user.email,
            url:names.url,
            date,
            itemName: names.itemName,
            serialNumber: names.serialNumber,
            itemDescription: names.itemDescription,
            category: names.category,
            price: names.price,
        };
        saveRef.push(savingData);
    };

    return(
        <div>
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Purchased Successfully :)</p>
            </>}
            handleClose={togglePopup}
            />
            }
            <img src={names.url} className="logo" alt="image"/>
            <h6>{names.userId}</h6>
            <h6>{names.itemName}</h6>
            <h6>{names.itemDescription}</h6>
            <h6>{names.report}</h6>
            <h6>{names.price}</h6>
            <button onClick={() => {
                handlePurchase();
                togglePopup();
            }}>Buy</button>
        </div>
    );
};

const Serial9Results = ({names}) => {
    //variables
    //popup variables
    const [isOpen,setIsOpen] = useState(false);

    //variables for saving bouught items in the database
    const [date,setDate] = useState(Date);
    const user = firebase.auth().currentUser;

    //popup function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    ////a function for saving purchased items in the database
    const handlePurchase = () => {
        const saveRef = firebase.database().ref('Purchase');

        const savingData = {
            userId: user.email,
            url:names.url,
            date,
            itemName: names.itemName,
            serialNumber: names.serialNumber,
            itemDescription: names.itemDescription,
            category: names.category,
            price: names.price,
        };
        saveRef.push(savingData);
    };

    return(
        <div>
            {isOpen && <Popup
            content={<>
                <b>Smart Trace</b>
                <p>Purchased Successfully :)</p>
            </>}
            handleClose={togglePopup}
            />
            }
            <img src={names.url} className="logo" alt="image"/>
            <h6>{names.userId}</h6>
            <h6>{names.itemName}</h6>
            <h6>{names.itemDescription}</h6>
            <h6>{names.report}</h6>
            <h6>{names.price}</h6>
            <button onClick={() => {
                handlePurchase();
                togglePopup();
            }}>Buy</button>
        </div>
    );
};

export {Serial2Results,Serial3Results,Serial4Results,Serial5Results,Serial6Results,Serial7Results,Serial8Results,Serial9Results};