import React from 'react';
import { Link } from 'react-router-dom';

const BackgroundChecker = () => {
    return(
        <div className="background-checker">
            <h1>Background Checker</h1>
            <h5>**Please select how you want to check the validity of an item**</h5><br/>
            <Link className="program" to="/serialSearch">Serial Number Search</Link><br/><br/>
            <Link  className="program" to="/scanner">Scanner</Link><br/><br/>
            <Link className="program" to="/imagetotext">Scan image</Link><br/><br/>
        </div>
    );
};
export default BackgroundChecker;