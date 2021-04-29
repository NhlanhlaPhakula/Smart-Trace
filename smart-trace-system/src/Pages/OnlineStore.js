import React from 'react';

const Store = () => {
    return(
        <div className="onlineStore">
            <h1>This is our online store</h1>
            <div>
                <a href="/details"><img src="Images/download (1).jfif" /></a><br/>
                <label>(Item Name)</label> <label>(Price in Rands)</label>
                <button>Buy</button>
            </div>
        </div>
    );
};
export default Store;