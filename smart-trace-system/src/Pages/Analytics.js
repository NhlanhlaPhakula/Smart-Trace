import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import RecommendationList from './AnalyticsList';

const Recommendations = () => {
    //variables and functions
    const [productsList, setProductsList] = useState();
    const user = firebase.auth().currentUser;

    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('userId').equalTo(user.email);
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const productsList = [];
            for(let id in products){
                productsList.push({ id, ... products[id]});
            }
            console.log('Recommended items: ', productsList);
            setProductsList(productsList);
        });
    },[]);

    return(
        <div className="recommendations">
            <h1>Recommendations</h1>
            {productsList ? productsList.map((name, index) => <RecommendationList names={name} key={index} productsList />) : ''}
            <hr/>
        </div>

    );
};
export default Recommendations;