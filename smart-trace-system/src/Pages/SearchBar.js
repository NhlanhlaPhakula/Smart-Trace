import React, { Fragment, useState } from 'react';
import firebase from '../Components/Firebase';
import SearchResults from './SearchResults';

const SearchFunction = () => {

    //variables
    const [userInput, setUserInput] = useState();
    const [list, setList] = useState();

    //change handler
    const handleChange = e => {
        setUserInput(e.target.value);
    };

    //a function to access the database to call all of the data that we want to view
    const Search = () => {
    const retrieveRef = firebase.database().ref('Products');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const list = [];
            for( let itemName in products){
                if(userInput == itemName){
                    list.push({ itemName, ... products[itemName]});
                }
            }
            console.log(list);
            setList(list);
        
        },[]);
    };
    return(
        <Fragment>
            <div>
                <input placeholder="Somethiing that needs to be done..." onChange={handleChange} value={userInput} />
                <button onClick={Search}>Search</button>
                {list ? list.map((names, index) => <SearchResults  name={names} key={index}/>): ''}
            </div>
        </Fragment>
    );
};
export default SearchFunction;