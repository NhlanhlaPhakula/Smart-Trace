import react, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import LostAndFoundItems from './FoundItemsList';

const  LostAndFound = () => {
    //variables
    const [itemsList,setItemsList] = useState();
    const user = firebase.auth().currentUser;

    //lost and found function
    useEffect(() => {
        const findRef = firebase.database().ref('LostAndFound').orderByChild('userId').equalTo(user.email);
        findRef.on('value', (snapshot) => {
            const items = snapshot.val();
            const itemsList = [];
            for(let id in items) {
                itemsList.push({ id, ... items[id]});
            }
            setItemsList(itemsList);
           // console.log('Hey');
        });
    },[]);

    return(
        <div className="lost-found">
            <h1>Lost And Found Items</h1>
            {itemsList ? itemsList.map((names,index) => <LostAndFoundItems names={names} key={index}/>):''}
        </div>
    );
};
export default LostAndFound;