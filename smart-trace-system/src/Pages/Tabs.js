import React from 'react';
import {Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Tab = () => {
     
    return(
        
            <div className="tab">
                <div className="divs">
                    <h1 className="heading">Track 'N Trace</h1>
                    <h4>Smart Trace is an advanced innovative system that is built to help fight crime...</h4>
                    <Link className="link" to="/trackNtrace">Learn more</Link>
                </div><br/><br/>
                <div className="divs">
                    <h1 className="heading">Online Store</h1>
                    <h4>Visit our online store to sell and buy</h4>
                    <Link className="link" to="/store">Go to store</Link>
                </div><br/><br/>
                <div className="divs">
                    <h1 className="heading">Insurance</h1>
                    <h4>Partner up with an insurance that understands you</h4>
                    <Link className="link" to="">Check Insurance </Link>
                </div><br/><br/>
                <div className="divs">
                    <h1 className="heading">Register Possessions</h1>
                    <h4>Secure your electronics with us</h4>
                    <Link className="link" to="/admin">Secure electronics</Link>
                </div><br/><br/>
                <div className="divs">
                    <h1 className="heading">About Us</h1>
                    <h4>The team behind Smart Trace sytem</h4>
                    <Link className="link" to="/aboutUs">Visit</Link>
                </div>

                
            </div>
        
    );
};
export default Tab;