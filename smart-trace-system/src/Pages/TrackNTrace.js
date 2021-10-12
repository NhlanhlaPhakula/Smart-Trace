import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';


const TrackTrace = () => {
    return(
        <div className="trackNtrace">
            <div className="trace-intro">
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
                <img className="picture" src="Images/app.jpg"/><img className="picture" src="Images/app1.png" /><img className="picture" src="Images/download.jfif"/><img className="picture" src="Images/mobapp.png"/>
            </div>
            
            <div className="trace-info">
                <h1>How to Track 'N Trace</h1>
                <h3>i.Visit the registration page <Link className="link" >Register</Link><br></br>
                ii. Download mobile app<br></br>
                <BrowserRouter>
                <a className="link" href="https://drive.google.com/file/d/1JPw_f8fELz45olvfnDcDUKrpwbxoDquc/view?usp=sharing">Download App</a>
                </BrowserRouter><br/>
                iii. Register User Account<br></br>
                iv. Register Products <br></br>
                v. Happy possessions monitoring :)</h3>
            </div>
        </div>
    );
};
export default TrackTrace;