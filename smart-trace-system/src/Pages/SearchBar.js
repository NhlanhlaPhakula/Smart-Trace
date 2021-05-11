import React, { Fragment, useState } from 'react';
import firebase from '../Components/Firebase';
import SearchResults from './SearchResults';

const SearchFunction = () => {

    //variables
    const [userInput, setUserInput] = useState();
    const [productsList, setProductsList] = useState();
    const [itemName, setItemName] = useState();

    //change handler
    const handleChange = e => {
        setUserInput(e.target.value);
    };

    //search function 
    const Search = () => {
        const retrieveRef = firebase.database().ref('Products');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const productsList = [];
            if(userInput !== itemName){
                for(let id in products){
                    productsList.push({ id, ... products[id]});
                }
                console.log(productsList);
                setProductsList(productsList);
            }else{
                console.log("There is no matching item in the database");
            };
        },[]);
    };

    return(
        
            <div>
                <input placeholder="Somethiing that needs to be done..." onChange={handleChange} value={userInput} />
                <button onClick={Search}>Search</button>
                {productsList ? productsList.map((names, index) => <SearchResults name={names} key={index} />) : ''}
            </div>
        
    );
};
export default SearchFunction;