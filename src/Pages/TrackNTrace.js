import React from 'react';
import { Link } from 'react-router-dom';


const TrackTrace = () => {
    return(
        <div className="trackNtrace">
            <div>
                    <h1>Track 'N Trace</h1>
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
    
            </div>
            <div>
                <img className="picture" src="Images/app.jpg"/>
            </div>
            <div>
                <img className="picture" src="Images/app1.png" />
            </div>
            <div>
                <img className="picture" src="Images/download.jfif"/>
            </div>
            <div>
                <img className="picture" src="Images/mobapp.png"/>
            </div>
            <button>Download App</button>
            <div>
                <h1>How to Track 'N Trace</h1>
                <h3>i.Visit the registration page <Link to="">Register</Link><br></br>
                ii. Download mobile app <Link>Download Now</Link><br></br>
                iii. Register User Account<br></br>
                iv. Register Products <br></br>
                v. Happy possessions monitoring :)</h3>
            </div>
        </div>
    );
};
export default TrackTrace;