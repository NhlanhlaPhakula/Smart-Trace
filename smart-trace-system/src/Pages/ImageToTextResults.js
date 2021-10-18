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

    //a function for change of sale status
    const handleStatusChange = () => {
        const statusChange = firebase.database().ref('Products').child(names.id);
        statusChange.update({
            onSale: true,
        });
    };

    // a function for change of ownership
    const handleChangeOfOwnership = () => {
        const changeRef = firebase.database().ref('Products').child(names.id);
        changeRef.update({
            userId: user.email,
        });
    };

    // a function to send a message to the owner of their bought item
    const handleMessage = () => {
        const sendRef = firebase.database().ref('Notifications');

        const saveData = {
            category: names.category,
            itemName: names.itemName,
            price: names.price,
            serialNumber: names.serialNumber,
            userId: names.userId,
            url: names.url,
            transactionDate: date,
            buyer: user.email,
        };
        sendRef.push(saveData);
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
                handleStatusChange();
                handleChangeOfOwnership();
                handleMessage();
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

    //a function for change of sale status
    const handleStatusChange = () => {
        const statusChange = firebase.database().ref('Products').child(names.id);
        statusChange.update({
            onSale: true,
        });
    };

    // a function for change of ownership
    const handleChangeOfOwnership = () => {
        const changeRef = firebase.database().ref('Products').child(names.id);
        changeRef.update({
            userId: user.email,
        });
    };

    // a function to send a message to the owner of their bought item
    const handleMessage = () => {
        const sendRef = firebase.database().ref('Notifications');

        const saveData = {
            category: names.category,
            itemName: names.itemName,
            price: names.price,
            serialNumber: names.serialNumber,
            userId: names.userId,
            url: names.url,
            transactionDate: date,
            buyer: user.email,
        };
        sendRef.push(saveData);
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
                handleStatusChange();
                handleChangeOfOwnership();
                handleMessage();
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
     //a function for change of sale status
    const handleStatusChange = () => {
        const statusChange = firebase.database().ref('Products').child(names.id);
        statusChange.update({
            onSale: true,
        });
    };

    // a function for change of ownership
    const handleChangeOfOwnership = () => {
        const changeRef = firebase.database().ref('Products').child(names.id);
        changeRef.update({
            userId: user.email,
        });
    };

    // a function to send a message to the owner of their bought item
    const handleMessage = () => {
        const sendRef = firebase.database().ref('Notifications');

        const saveData = {
            category: names.category,
            itemName: names.itemName,
            price: names.price,
            serialNumber: names.serialNumber,
            userId: names.userId,
            url: names.url,
            transactionDate: date,
            buyer: user.email,
        };
        sendRef.push(saveData);
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
                handleStatusChange();
                handleChangeOfOwnership();
                handleMessage();
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

    //a function for change of sale status
    const handleStatusChange = () => {
        const statusChange = firebase.database().ref('Products').child(names.id);
        statusChange.update({
            onSale: true,
        });
    };

    // a function for change of ownership
    const handleChangeOfOwnership = () => {
        const changeRef = firebase.database().ref('Products').child(names.id);
        changeRef.update({
            userId: user.email,
        });
    };

    // a function to send a message to the owner of their bought item
    const handleMessage = () => {
        const sendRef = firebase.database().ref('Notifications');

        const saveData = {
            category: names.category,
            itemName: names.itemName,
            price: names.price,
            serialNumber: names.serialNumber,
            userId: names.userId,
            url: names.url,
            transactionDate: date,
            buyer: user.email,
        };
        sendRef.push(saveData);
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
                handleStatusChange();
                handleChangeOfOwnership();
                handleMessage();
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

    //a function for change of sale status
    const handleStatusChange = () => {
        const statusChange = firebase.database().ref('Products').child(names.id);
        statusChange.update({
            onSale: true,
        });
    };

    // a function for change of ownership
    const handleChangeOfOwnership = () => {
        const changeRef = firebase.database().ref('Products').child(names.id);
        changeRef.update({
            userId: user.email,
        });
    };

    // a function to send a message to the owner of their bought item
    const handleMessage = () => {
        const sendRef = firebase.database().ref('Notifications');

        const saveData = {
            category: names.category,
            itemName: names.itemName,
            price: names.price,
            serialNumber: names.serialNumber,
            userId: names.userId,
            url: names.url,
            transactionDate: date,
            buyer: user.email,
        };
        sendRef.push(saveData);
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
                handleStatusChange();
                handleChangeOfOwnership();
                handleMessage();
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

    //a function for change of sale status
    const handleStatusChange = () => {
        const statusChange = firebase.database().ref('Products').child(names.id);
        statusChange.update({
            onSale: true,
        });
    };

    // a function for change of ownership
    const handleChangeOfOwnership = () => {
        const changeRef = firebase.database().ref('Products').child(names.id);
        changeRef.update({
            userId: user.email,
        });
    };

    // a function to send a message to the owner of their bought item
    const handleMessage = () => {
        const sendRef = firebase.database().ref('Notifications');

        const saveData = {
            category: names.category,
            itemName: names.itemName,
            price: names.price,
            serialNumber: names.serialNumber,
            userId: names.userId,
            url: names.url,
            transactionDate: date,
            buyer: user.email,
        };
        sendRef.push(saveData);
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
                handleStatusChange();
                handleChangeOfOwnership();
                handleMessage();
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

    //a function for change of sale status
    const handleStatusChange = () => {
        const statusChange = firebase.database().ref('Products').child(names.id);
        statusChange.update({
            onSale: true,
        });
    };

    // a function for change of ownership
    const handleChangeOfOwnership = () => {
        const changeRef = firebase.database().ref('Products').child(names.id);
        changeRef.update({
            userId: user.email,
        });
    };

    // a function to send a message to the owner of their bought item
    const handleMessage = () => {
        const sendRef = firebase.database().ref('Notifications');

        const saveData = {
            category: names.category,
            itemName: names.itemName,
            price: names.price,
            serialNumber: names.serialNumber,
            userId: names.userId,
            url: names.url,
            transactionDate: date,
            buyer: user.email,
        };
        sendRef.push(saveData);
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
                handleStatusChange();
                handleChangeOfOwnership();
                handleMessage();
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

    //a function for change of sale status
    const handleStatusChange = () => {
        const statusChange = firebase.database().ref('Products').child(names.id);
        statusChange.update({
            onSale: true,
        });
    };

    // a function for change of ownership
    const handleChangeOfOwnership = () => {
        const changeRef = firebase.database().ref('Products').child(names.id);
        changeRef.update({
            userId: user.email,
        });
    };

    // a function to send a message to the owner of their bought item
    const handleMessage = () => {
        const sendRef = firebase.database().ref('Notifications');

        const saveData = {
            category: names.category,
            itemName: names.itemName,
            price: names.price,
            serialNumber: names.serialNumber,
            userId: names.userId,
            url: names.url,
            transactionDate: date,
            buyer: user.email,
        };
        sendRef.push(saveData);
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
                handleStatusChange();
                handleChangeOfOwnership();
                handleMessage();
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

    //a function for change of sale status
    const handleStatusChange = () => {
        const statusChange = firebase.database().ref('Products').child(names.id);
        statusChange.update({
            onSale: true,
        });
    };

    // a function for change of ownership
    const handleChangeOfOwnership = () => {
        const changeRef = firebase.database().ref('Products').child(names.id);
        changeRef.update({
            userId: user.email,
        });
    };

    // a function to send a message to the owner of their bought item
    const handleMessage = () => {
        const sendRef = firebase.database().ref('Notifications');

        const saveData = {
            category: names.category,
            itemName: names.itemName,
            price: names.price,
            serialNumber: names.serialNumber,
            userId: names.userId,
            url: names.url,
            transactionDate: date,
            buyer: user.email,
        };
        sendRef.push(saveData);
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
                handleStatusChange();
                handleChangeOfOwnership();
                handleMessage();
            }}>Buy</button>
        </div>
    );
};

export {Serial2Results,Serial3Results,Serial4Results,Serial5Results,Serial6Results,Serial7Results,Serial8Results,Serial9Results};