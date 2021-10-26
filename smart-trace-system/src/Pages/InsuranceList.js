import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import { Link } from 'react-router-dom';
import Popup from './Popup';


const InsuranceCategory = ({ name }) => {
    //a function to search the database for current user details
    const user = firebase.auth().currentUser;
    const [detailsList,setDetailsList]= useState();
    const [date,setDate] = useState(Date);
    //popup function variable
    const [isOpen,setIsopen] = useState(false);
    
    useEffect(() => {
        const findUser = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        findUser.on('value',(snapshot) => {
            const details = snapshot.val();
            const detailsList = [];
            for(let id in details) {
                detailsList.push({ id, ...details[id]});
            }
            setDetailsList(detailsList);
            
        });
    },[]);

    // a function to handle sending a request for a quote from an insurance company
    const handleRequestQuote = () => {
        const addRef = firebase.database().ref('Quote_Request');

        const saveData = {
            insurance_company: name.insuranceCompany,
            userInfo: detailsList,
            date,
        };
        addRef.push(saveData);
    };

    //a function to  send data to insurance_messages table in the database
    const handleSend = () => {
        const handleRef = firebase.database().ref('Insurance_Messages');

        const saveData = {
            insurance_Company: name.insuranceCompany,
            userId: user.email,
            date,
        };
        handleRef.push(saveData);
    };

    //popup function
    const togglePopup = () => {
        setIsopen(!isOpen);
    };
    
    return(
        <div className="insurance-results">
            <h3>
                <Link className="result" onClick={() => {
                    handleRequestQuote();
                    togglePopup();
                    handleSend();
                }}>{name.insuranceCompany}</Link>
            </h3>
            {
                isOpen && <Popup
                content={<>
                    <b>Smart Trace</b>
                    <h3>Thank You For Choosing {name.insuranceCompany}</h3>
                    <p>We will have our service providers to contact you<br/>
                    as soon as possible to do a quote with you.<br/>
                    In the interim, please feel free to see if we can provide further<br/>
                    assistance with some of our other insurance products.</p>
                    </>}
                    handleClose={togglePopup}
                    />
            }
        </div>
    );
};
export default InsuranceCategory;

const InsuranceNiche = ({name}) => {
    //a function to search the database for current user details
    const user = firebase.auth().currentUser;
    const [detailsList,setDetailsList]= useState();
    const [date,setDate] = useState(Date);
    //popup function variable
    const [isOpen,setIsopen] = useState(false);
    
    useEffect(() => {
        const findUser = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        findUser.on('value',(snapshot) => {
            const details = snapshot.val();
            const detailsList = [];
            for(let id in details) {
                detailsList.push({ id, ...details[id]});
            }
            setDetailsList(detailsList);
            
        });
    },[]);

    // a function to handle sending a request for a quote from an insurance company
    const handleRequestQuote = () => {
        const addRef = firebase.database().ref('Quote_Request');

        const saveData = {
            insurance_company: name.insuranceCompany,
            userInfo: detailsList,
            date,
        };
        addRef.push(saveData);
    };

    //a function to  send data to insurance_messages table in the database
    const handleSend = () => {
        const handleRef = firebase.database().ref('Insurance_Messages');

        const saveData = {
            insurance_Company: name.insuranceCompany,
            userId: user.email,
            date,
        };
        handleRef.push(saveData);
    };

    //popup function
    const togglePopup = () => {
        setIsopen(!isOpen);
    };
    return(
        <div className="insurance-results">
            <h3>
                <Link className="result" onClick={() => {
                    handleRequestQuote();
                    togglePopup();
                    handleSend();
                }}>{name.insuranceCompany}</Link>
            </h3>
            {
                isOpen && <Popup
                content={<>
                    <b>Smart Trace</b>
                    <h3>Thank You For Choosing {name.insuranceCompany}</h3>
                    <p>We will have our service providers to contact you<br/>
                    as soon as possible to do a quote with you.<br/>
                    In the interim, please feel free to see if we can provide further<br/>
                    assistance with some of our other insurance products.</p>
                    </>}
                    handleClose={togglePopup}
                    />
            }
        </div>
    );
};

const InsuranceActivityPeriod = ({name}) => {
    //a function to search the database for current user details
    const user = firebase.auth().currentUser;
    const [detailsList,setDetailsList]= useState();
    const [date,setDate] = useState(Date);
    //popup function variable
    const [isOpen,setIsopen] = useState(false);
    
    useEffect(() => {
        const findUser = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        findUser.on('value',(snapshot) => {
            const details = snapshot.val();
            const detailsList = [];
            for(let id in details) {
                detailsList.push({ id, ...details[id]});
            }
            setDetailsList(detailsList);
            
        });
    },[]);

    // a function to handle sending a request for a quote from an insurance company
    const handleRequestQuote = () => {
        const addRef = firebase.database().ref('Quote_Request');

        const saveData = {
            insurance_company: name.insuranceCompany,
            userInfo: detailsList,
            date,
        };
        addRef.push(saveData);
    };

    //a function to  send data to insurance_messages table in the database
    const handleSend = () => {
        const handleRef = firebase.database().ref('Insurance_Messages');

        const saveData = {
            insurance_Company: name.insuranceCompany,
            userId: user.email,
            date,
        };
        handleRef.push(saveData);
    };

    //popup function
    const togglePopup = () => {
        setIsopen(!isOpen);
    };
    return(
        <div className="insurance-results">
            <h3>
                <Link className="result" onClick={() => {
                    handleRequestQuote();
                    togglePopup();
                    handleSend();
                }}>{name.insuranceCompany}</Link>
            </h3>
            {
                isOpen && <Popup
                content={<>
                    <b>Smart Trace</b>
                    <h3>Thank You For Choosing {name.insuranceCompany}</h3>
                    <p>We will have our service providers to contact you<br/>
                    as soon as possible to do a quote with you.<br/>
                    In the interim, please feel free to see if we can provide further<br/>
                    assistance with some of our other insurance products.</p>
                    </>}
                    handleClose={togglePopup}
                    />
            }
        </div>
    );
};

const InsurancePurchasePrice = ({name}) => {
    //a function to search the database for current user details
    const user = firebase.auth().currentUser;
    const [detailsList,setDetailsList]= useState();
    const [date,setDate] = useState(Date);
    //popup function variable
    const [isOpen,setIsopen] = useState(false);
    
    useEffect(() => {
        const findUser = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        findUser.on('value',(snapshot) => {
            const details = snapshot.val();
            const detailsList = [];
            for(let id in details) {
                detailsList.push({ id, ...details[id]});
            }
            setDetailsList(detailsList);
            
        });
    },[]);

    // a function to handle sending a request for a quote from an insurance company
    const handleRequestQuote = () => {
        const addRef = firebase.database().ref('Quote_Request');

        const saveData = {
            insurance_company: name.insuranceCompany,
            userInfo: detailsList,
            date,
        };
        addRef.push(saveData);
    };

    //a function to  send data to insurance_messages table in the database
    const handleSend = () => {
        const handleRef = firebase.database().ref('Insurance_Messages');

        const saveData = {
            insurance_Company: name.insuranceCompany,
            userId: user.email,
            date,
        };
        handleRef.push(saveData);
    };

    //popup function
    const togglePopup = () => {
        setIsopen(!isOpen);
    };
    return(
        <div className="insurance-results">
            <h3>
                <Link className="result" onClick={() => {
                    handleRequestQuote();
                    togglePopup();
                    handleSend();
                }}>{name.insuranceCompany}</Link>
            </h3>
            {
                isOpen && <Popup
                content={<>
                    <b>Smart Trace</b>
                    <h3>Thank You For Choosing {name.insuranceCompany}</h3>
                    <p>We will have our service providers to contact you<br/>
                    as soon as possible to do a quote with you.<br/>
                    In the interim, please feel free to see if we can provide further<br/>
                    assistance with some of our other insurance products.</p>
                    </>}
                    handleClose={togglePopup}
                    />
            }
        </div>
    );
};

const InsuranceMonthlyFee = ({name}) => {
    //a function to search the database for current user details
    const user = firebase.auth().currentUser;
    const [detailsList,setDetailsList]= useState();
    const [date,setDate] = useState(Date);
    //popup function variable
    const [isOpen,setIsopen] = useState(false);
    
    useEffect(() => {
        const findUser = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        findUser.on('value',(snapshot) => {
            const details = snapshot.val();
            const detailsList = [];
            for(let id in details) {
                detailsList.push({ id, ...details[id]});
            }
            setDetailsList(detailsList);
            
        });
    },[]);

    // a function to handle sending a request for a quote from an insurance company
    const handleRequestQuote = () => {
        const addRef = firebase.database().ref('Quote_Request');

        const saveData = {
            insurance_company: name.insuranceCompany,
            userInfo: detailsList,
            date,
        };
        addRef.push(saveData);
    };

    //a function to  send data to insurance_messages table in the database
    const handleSend = () => {
        const handleRef = firebase.database().ref('Insurance_Messages');

        const saveData = {
            insurance_Company: name.insuranceCompany,
            userId: user.email,
            date,
        };
        handleRef.push(saveData);
    };

    //popup function
    const togglePopup = () => {
        setIsopen(!isOpen);
    };
    return(
        <div className="insurance-results">
            <h3>
                <Link className="result" onClick={() => {
                    handleRequestQuote();
                    togglePopup();
                    handleSend();
                }}>{name.insuranceCompany}</Link>
            </h3>
            {
                isOpen && <Popup
                content={<>
                    <b>Smart Trace</b>
                    <h3>Thank You For Choosing {name.insuranceCompany}</h3>
                    <p>We will have our service providers to contact you<br/>
                    as soon as possible to do a quote with you.<br/>
                    In the interim, please feel free to see if we can provide further<br/>
                    assistance with some of our other insurance products.</p>
                    </>}
                    handleClose={togglePopup}
                    />
            }
        </div>
    );
};

const InsuranceCoverLoss = ({name}) => {
    //a function to search the database for current user details
    const user = firebase.auth().currentUser;
    const [detailsList,setDetailsList]= useState();
    const [date,setDate] = useState(Date);
    //popup function variable
    const [isOpen,setIsopen] = useState(false);
    
    useEffect(() => {
        const findUser = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        findUser.on('value',(snapshot) => {
            const details = snapshot.val();
            const detailsList = [];
            for(let id in details) {
                detailsList.push({ id, ...details[id]});
            }
            setDetailsList(detailsList);
            
        });
    },[]);

    // a function to handle sending a request for a quote from an insurance company
    const handleRequestQuote = () => {
        const addRef = firebase.database().ref('Quote_Request');

        const saveData = {
            insurance_company: name.insuranceCompany,
            userInfo: detailsList,
            date,
        };
        addRef.push(saveData);
    };

    //a function to  send data to insurance_messages table in the database
    const handleSend = () => {
        const handleRef = firebase.database().ref('Insurance_Messages');

        const saveData = {
            insurance_Company: name.insuranceCompany,
            userId: user.email,
            date,
        };
        handleRef.push(saveData);
    };

    //popup function
    const togglePopup = () => {
        setIsopen(!isOpen);
    };
    return(
        <div className="insurance-results">
            <h3>
                <Link className="result" onClick={() => {
                    handleRequestQuote();
                    togglePopup();
                    handleSend();
                }}>{name.insuranceCompany}</Link>
            </h3>
            {
                isOpen && <Popup
                content={<>
                    <b>Smart Trace</b>
                    <h3>Thank You For Choosing {name.insuranceCompany}</h3>
                    <p>We will have our service providers to contact you<br/>
                    as soon as possible to do a quote with you.<br/>
                    In the interim, please feel free to see if we can provide further<br/>
                    assistance with some of our other insurance products.</p>
                    </>}
                    handleClose={togglePopup}
                    />
            }
        </div>
    );
};

const InsuranceCoverMulfunction = ({name}) => {
    //a function to search the database for current user details
    const user = firebase.auth().currentUser;
    const [detailsList,setDetailsList]= useState();
    const [date,setDate] = useState(Date);
    //popup function variable
    const [isOpen,setIsopen] = useState(false);
    
    useEffect(() => {
        const findUser = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        findUser.on('value',(snapshot) => {
            const details = snapshot.val();
            const detailsList = [];
            for(let id in details) {
                detailsList.push({ id, ...details[id]});
            }
            setDetailsList(detailsList);
            
        });
    },[]);

    // a function to handle sending a request for a quote from an insurance company
    const handleRequestQuote = () => {
        const addRef = firebase.database().ref('Quote_Request');

        const saveData = {
            insurance_company: name.insuranceCompany,
            userInfo: detailsList,
            date,
        };
        addRef.push(saveData);
    };

    //a function to  send data to insurance_messages table in the database
    const handleSend = () => {
        const handleRef = firebase.database().ref('Insurance_Messages');

        const saveData = {
            insurance_Company: name.insuranceCompany,
            userId: user.email,
            date,
        };
        handleRef.push(saveData);
    };

    //popup function
    const togglePopup = () => {
        setIsopen(!isOpen);
    };
    return(
        <div className="insurance-results">
            <h3>
                <Link className="result" onClick={() => {
                    handleRequestQuote();
                    togglePopup();
                    handleSend();
                }}>{name.insuranceCompany}</Link>
            </h3>
            {
                isOpen && <Popup
                content={<>
                    <b>Smart Trace</b>
                    <h3>Thank You For Choosing {name.insuranceCompany}</h3>
                    <p>We will have our service providers to contact you<br/>
                    as soon as possible to do a quote with you.<br/>
                    In the interim, please feel free to see if we can provide further<br/>
                    assistance with some of our other insurance products.</p>
                    </>}
                    handleClose={togglePopup}
                    />
            }
        </div>
    );
};

const InsuranceCoverTheft = ({name}) => {
    //a function to search the database for current user details
    const user = firebase.auth().currentUser;
    const [detailsList,setDetailsList]= useState();
    const [date,setDate] = useState(Date);
    //popup function variable
    const [isOpen,setIsopen] = useState(false);
    
    useEffect(() => {
        const findUser = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        findUser.on('value',(snapshot) => {
            const details = snapshot.val();
            const detailsList = [];
            for(let id in details) {
                detailsList.push({ id, ...details[id]});
            }
            setDetailsList(detailsList);
            
        });
    },[]);

    // a function to handle sending a request for a quote from an insurance company
    const handleRequestQuote = () => {
        const addRef = firebase.database().ref('Quote_Request');

        const saveData = {
            insurance_company: name.insuranceCompany,
            userInfo: detailsList,
            date,
        };
        addRef.push(saveData);
    };

    //a function to  send data to insurance_messages table in the database
    const handleSend = () => {
        const handleRef = firebase.database().ref('Insurance_Messages');

        const saveData = {
            insurance_Company: name.insuranceCompany,
            userId: user.email,
            date,
        };
        handleRef.push(saveData);
    };

    //popup function
    const togglePopup = () => {
        setIsopen(!isOpen);
    };
    return(
        <div className="insurance-results">
            <h3>
                <Link className="result" onClick={() => {
                    handleRequestQuote();
                    togglePopup();
                    handleSend();
                }}>{name.insuranceCompany}</Link>
            </h3>
            {
                isOpen && <Popup
                content={<>
                    <b>Smart Trace</b>
                    <h3>Thank You For Choosing {name.insuranceCompany}</h3>
                    <p>We will have our service providers to contact you<br/>
                    as soon as possible to do a quote with you.<br/>
                    In the interim, please feel free to see if we can provide further<br/>
                    assistance with some of our other insurance products.</p>
                    </>}
                    handleClose={togglePopup}
                    />
            }
        </div>
    );
};

const InsuranceCoverDamage = ({name}) => {
    //a function to search the database for current user details
    const user = firebase.auth().currentUser;
    const [detailsList,setDetailsList]= useState();
    const [date,setDate] = useState(Date);
    //popup function variable
    const [isOpen,setIsopen] = useState(false);
    
    useEffect(() => {
        const findUser = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        findUser.on('value',(snapshot) => {
            const details = snapshot.val();
            const detailsList = [];
            for(let id in details) {
                detailsList.push({ id, ...details[id]});
            }
            setDetailsList(detailsList);
            
        });
    },[]);

    // a function to handle sending a request for a quote from an insurance company
    const handleRequestQuote = () => {
        const addRef = firebase.database().ref('Quote_Request');

        const saveData = {
            insurance_company: name.insuranceCompany,
            userInfo: detailsList,
            date,
        };
        addRef.push(saveData);
    };

    //a function to  send data to insurance_messages table in the database
    const handleSend = () => {
        const handleRef = firebase.database().ref('Insurance_Messages');

        const saveData = {
            insurance_Company: name.insuranceCompany,
            userId: user.email,
            date,
        };
        handleRef.push(saveData);
    };

    //popup function
    const togglePopup = () => {
        setIsopen(!isOpen);
    };
    return(
        <div className="insurance-results">
            <h3>
                <Link className="result" onClick={() => {
                    handleRequestQuote();
                    togglePopup();
                    handleSend();
                }}>{name.insuranceCompany}</Link>
            </h3>
            {
                isOpen && <Popup
                content={<>
                    <b>Smart Trace</b>
                    <h3>Thank You For Choosing {name.insuranceCompany}</h3>
                    <p>We will have our service providers to contact you<br/>
                    as soon as possible to do a quote with you.<br/>
                    In the interim, please feel free to see if we can provide further<br/>
                    assistance with some of our other insurance products.</p>
                    </>}
                    handleClose={togglePopup}
                    />
            }
        </div>
    );
};

const InsuranceCoverFire = ({name}) => {
    //a function to search the database for current user details
    const user = firebase.auth().currentUser;
    const [detailsList,setDetailsList]= useState();
    const [date,setDate] = useState(Date);
    //popup function variable
    const [isOpen,setIsopen] = useState(false);
    
    useEffect(() => {
        const findUser = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        findUser.on('value',(snapshot) => {
            const details = snapshot.val();
            const detailsList = [];
            for(let id in details) {
                detailsList.push({ id, ...details[id]});
            }
            setDetailsList(detailsList);
            
        });
    },[]);

    // a function to handle sending a request for a quote from an insurance company
    const handleRequestQuote = () => {
        const addRef = firebase.database().ref('Quote_Request');

        const saveData = {
            insurance_company: name.insuranceCompany,
            userInfo: detailsList,
            date,
        };
        addRef.push(saveData);
    };
    //a function to  send data to insurance_messages table in the database
    const handleSend = () => {
        const handleRef = firebase.database().ref('Insurance_Messages');

        const saveData = {
            insurance_Company: name.insuranceCompany,
            userId: user.email,
            date,
        };
        handleRef.push(saveData);
    };

    //popup function
    const togglePopup = () => {
        setIsopen(!isOpen);
    };
    return(
        <div className="insurance-results">
            <h3>
                <Link className="result" onClick={() => {
                    handleRequestQuote();
                    togglePopup();
                    handleSend();
                }}>{name.insuranceCompany}</Link>
            </h3>
            {
                isOpen && <Popup
                content={<>
                    <b>Smart Trace</b>
                    <h3>Thank You For Choosing {name.insuranceCompany}</h3>
                    <p>We will have our service providers to contact you<br/>
                    as soon as possible to do a quote with you.<br/>
                    In the interim, please feel free to see if we can provide further<br/>
                    assistance with some of our other insurance products.</p>
                    </>}
                    handleClose={togglePopup}
                    />
            }
        </div>
    );
};

const InsuranceCoverAll = ({name}) => {
    //a function to search the database for current user details
    const user = firebase.auth().currentUser;
    const [detailsList,setDetailsList]= useState();
    const [date,setDate] = useState(Date);
    //popup function variable
    const [isOpen,setIsopen] = useState(false);
    
    useEffect(() => {
        const findUser = firebase.database().ref('Users').orderByChild('userId').equalTo(user.email);
        findUser.on('value',(snapshot) => {
            const details = snapshot.val();
            const detailsList = [];
            for(let id in details) {
                detailsList.push({ id, ...details[id]});
            }
            setDetailsList(detailsList);
            
        });
    },[]);

    // a function to handle sending a request for a quote from an insurance company
    const handleRequestQuote = () => {
        const addRef = firebase.database().ref('Quote_Request');

        const saveData = {
            insurance_company: name.insuranceCompany,
            userInfo: detailsList,
            date,
        };
        addRef.push(saveData);
    };

    //a function to  send data to insurance_messages table in the database
    const handleSend = () => {
        const handleRef = firebase.database().ref('Insurance_Messages');

        const saveData = {
            insurance_Company: name.insuranceCompany,
            userId: user.email,
            date,
        };
        handleRef.push(saveData);
    };

    //popup function
    const togglePopup = () => {
        setIsopen(!isOpen);
    };
    return(
        <div className="insurance-results">
            <h3>
                <Link className="result" onClick={() => {
                    handleRequestQuote();
                    togglePopup();
                    handleSend();
                }}>{name.insuranceCompany}</Link>
            </h3>
            {
                isOpen && <Popup
                content={<>
                    <b>Smart Trace</b>
                    <h3>Thank You For Choosing {name.insuranceCompany}</h3>
                    <p>We will have our service providers to contact you<br/>
                    as soon as possible to do a quote with you.<br/>
                    In the interim, please feel free to see if we can provide further<br/>
                    assistance with some of our other insurance products.</p>
                    </>}
                    handleClose={togglePopup}
                    />
            }
        </div>
    );
};

export {InsuranceNiche,
    InsuranceActivityPeriod,
    InsurancePurchasePrice,
    InsuranceMonthlyFee,
    InsuranceCoverLoss,
    InsuranceCoverMulfunction,
    InsuranceCoverTheft,
    InsuranceCoverDamage,
    InsuranceCoverFire,
    InsuranceCoverAll
};