import React, { Fragment, useState } from 'react';
import firebase from '../Components/Firebase';
import SearchResults from './SearchResults';

const SearchFunction = () => {

    //variables
    const [userInput, setUserInput] = useState();
    const [productsList, setProductsList] = useState();
    //const [itemName, setItemName] = useState();

    //change handler
    const handleChange = e => {
        setUserInput(e.target.value);
    };

    //search function 
    const Search = () => {
        const retrieveRef = firebase.database().ref('Products').orderByChild('itemName').equalTo(userInput);
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const productsList = [];
    
                for(let id in products){
                    productsList.push({ id, ... products[id]});
                   
                }
                console.log(productsList);
                setProductsList(productsList);
        },[]);
    };

    return(
        
            <div className="search-bar">
                <h5>Type to search</h5><br/>
                <input onChange={handleChange} value={userInput} /><br/>
                <button onClick={Search}>Search</button>
                {productsList ? productsList.map((names, index) => <SearchResults name={names} key={index} />) : ''}
            </div>
        
    );
};
export default SearchFunction;