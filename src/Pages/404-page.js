import React from 'react';
import { Link} from 'react-router-dom';

const PageNotFound = () =>{
    return(
        <div>
            <h1>This page is not found: Under Construction</h1>
            
                <h1>Return Home by pressing the button below : )</h1>
                <Link to="/">Home</Link>
            
        </div>
    );
};
export default PageNotFound;