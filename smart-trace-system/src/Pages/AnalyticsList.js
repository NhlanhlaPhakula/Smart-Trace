import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import AnalyticsRecommendations from './AnalyticsRecommendation';

const RecommendationList = ({ names }) => {
    // variables and functions
    const [productsList, setProductsList] = useState();

    //a function to call related items from the products table
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Products').orderByChild('category').equalTo(names.category);
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const productsList = [];
            for(let id in products){
                productsList.push({ id, ... products[id]});
            }
            console.log('Related items: ', productsList);
            setProductsList(productsList);
        });
    },[]);

    return(
        <div className="recommendation-list">     

            {productsList ? productsList.map((item, index) => <AnalyticsRecommendations items={item} key={index} />) : ''}

        </div>
    );
};
export default RecommendationList;