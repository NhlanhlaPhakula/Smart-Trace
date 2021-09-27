import React from 'react';
import {Link } from 'react-router-dom';
//import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Tab = () => {
     
    return(
        
            <div className="tab">
                <br/>
                <br/>
                <div className="divs">
                    <Link className="links" to="/trackNtrace">Track 'N Trace</Link>
                </div>
                <br></br>
                <br></br>
                <div className="divs">
                    <Link className="links" to="/store">Online Store</Link>
                </div>
                <br></br>
                <br></br>
                <div className="divs">
                    <Link className="links" to="">Insurance</Link>
                </div>
                <br></br>
                <br></br>
                <div className="divs">
                    <Link className="links" to="/admin">Secure items</Link>
                </div>
                
            </div>
        
    );
};
export default Tab;