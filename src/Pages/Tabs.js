import React from 'react';
import {Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Tab = () => {
     
    return(
        
            <div className="tab">
                <div className="divs">
                    <h1 className="heading">Track 'N Trace</h1>
                    <h3>Smart Trace is an advanced innovative system that is built to help fight crime<br></br>
                    The system is centralized across various systems in our daily lives ones that deals with ecommerce,
                    What the system does is that it prevents stolen electronic goods(smartphones, tablets,  computers...) or any valuable<br></br>
                    Possessions from being sold online without the owner knowing about it/consentual agreement. <br></br>
                    
                    The complete system includes a web application and a mobile application which users can download and register <br></br>
                    their acoounts with all their possessions underneath.<br></br>
                    We are proud to say that the system is flexible enough to let users manage their own possessions online<br></br>
                    without any second party interfering with their accounts and possessions.<br></br>
                    
                    The system is linked to the SAPS who are investigating on stolen goods that are reported with a valid case number.<br></br>
                    There is more to our system than what we've already mentioned.</h3>
                    <Link className="link" to="/trackNtrace">Learn more</Link>
                </div>
                <br></br>
                <br></br>
                <div className="divs">
                    <h1 className="heading">Online Store</h1>
                    <h3>Our convenient online store is available to all registered users.<br></br>
                    Every already user with an account is eligible to setup and manage their own online store<br></br>
                    Which consists of possessions which are on sale!<br></br>
                    
                    A user should be able to exchange goods for revenue online, all purchase transactions are foreseen and <br></br>
                    confirmed by the owner online to ensure the right way of buying/selling of items!<br></br>
                    From the online store if ever it happens that a stolen possesion is stolen and sold online, the system should pick <br></br>
                    up that anormaly and alert the owner of anything happening to their posession.</h3>
                    <Link className="link" to="/store">Go to store</Link>
                </div>
                <br></br>
                <br></br>
                <div className="divs">
                    <h1 className="heading">Insurance</h1>
                    <h3>Based off of different insurance compnanies quotes, the use may be interested in <br></br>
                    insuring their possessions for extra maximum security. This function allows users to link their insurance <br></br>
                    companies with their profile just so that they may keep up to the logistics of the possessions.<br></br>
                    
                    After the user register' their possessions our system provides suggestions on different insurances that <br></br>
                    their may take to insure their product based off of several factors!</h3>
                    <Link className="link" to="">Check Insurance </Link>
                </div>
                <br></br>
                <br></br>
                <div className="divs">
                    <h1 className="heading">Register Possessions</h1>
                    <h3>All personal items that a user wishes to secure with our system<br></br>
                    should be registered individually with their unique attributes to ensure effectiveness!<br></br>
                    
                    Possessions to be registed are mainly electronic devices e.g.Laptops,Desktop computer and more</h3>
                    <Link className="link" to="">Secure items</Link>
                </div>
                <br></br>
                <br></br>
                <div className="divs">
                    <h1 className="heading">Hello There</h1>
                    <h3>Trace 'N Trace</h3>
                    <Link className="link" to="">Learn More</Link>
                </div>
                <br></br>
                <br></br>
                <div className="divs">
                    <h1 className="heading">Hello There</h1>
                    <h3>Trace 'N Trace</h3>
                    <Link className="link" to="">Learn More</Link>
                </div>
                <br></br>
                <br></br>
                <div className="divs">
                    <h1 className="heading">Hello There</h1>
                    <h3>Trace 'N Trace</h3>
                    <Link className="link" to="">Learn More</Link>
                </div>
                
            </div>
        
    );
};
export default Tab;