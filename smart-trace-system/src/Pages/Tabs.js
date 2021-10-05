import React from 'react';
import {Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Tab = () => {
     
    return(
        
            <div className="tab">
                <div className="divs">
                    <h1 className="heading">Track 'N Trace</h1>
                    <Link className="link" to="/trackNtrace">Learn more</Link>
                </div>
                <div className="divs">
                    <h1 className="heading">Online Store</h1>
                    <Link className="link" to="/store">Go to store</Link>
                </div><br/><br/>
                <div className="divs">
                    <h1 className="heading">Insurance</h1>
                    <Link className="link" to="">Check Insurance </Link>
                </div>
                <div className="divs">
                    <h1 className="heading">Register Possessions</h1>
                    <Link className="link" to="/admin">Secure items</Link>
                </div>
                
            </div>
        
    );
};
export default Tab;