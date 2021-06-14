import React from 'react';
import firebase from '../Components/Firebase';

const AnalyticsRecommendations = ({items}) => {
    return(
        <div>
            <h3>Recommended Item</h3>
                    <img src={items.url} /><br/>
                    {items.itemName}
        </div>
    );
};
export default AnalyticsRecommendations;