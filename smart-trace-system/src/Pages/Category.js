import React, { useState } from 'react';
import firebase from '../Components/Firebase';
import Products from './Products';
import SearchResults from './SearchResults';

const CategorySearch = () => {
    //variables and functions
    const [category, setCategory] = useState();
    const [productsList, setProductsList] = useState();

    //search function 
    const handleSearch = () => {
        const retrieveRef = firebase.database().ref('Products').orderByChild('category').equalTo(category);
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const productsList = [];
            for(let id in products) {
                productsList.push({ id, ... products[id]});
            }
            console.log(productsList);
            setProductsList(productsList);
        },[]);
    };


    return(
        <div className="products-category">
            <br/>
            <h5>Search items by Category</h5><br/>
            <select value={category} onChange={e=> setCategory(e.target.value)}>
                <option></option>
                <option value="Camera">Camera</option>
                <option value="Music Instruments">Music Instruments</option>
                <option value="Desktop Camera">Desktop Computer</option>
                <option value="DvD Player">DvD Player</option>
                <option value="Fan">Fan</option>
                <option value="Lamp">Lamp</option>
                <option value="Game Console">Game Console</option>
                <option value="iPad">iPad</option>
                <option value="iPod">iPod</option>
                <option value="Earbuds">Earbuds</option>
                <option value="Laptop">Laptop</option>
                <option value="Oven">Oven</option>
                <option value="Printer">Printer</option>
                <option value="Radio">Radio</option>
                <option value="Television">Television</option>
                <option value="Washing Machine">Washing Machine</option>
            </select><br/>
            <button onClick={handleSearch}>Search</button><br/>
            {productsList ? productsList.map((names, index) => <SearchResults name={names} key={index}/>) : ''}
        </div>
    );
};
export default CategorySearch;