import react from 'react';
import firebase from '../Components/Firebase';

const LostAndFoundItems = ({names}) =>{
    //variables
    const user = firebase.auth().currentUser;

    return(
        <div>
            <label>OwnerId :</label>{names.ownerId}<br/>
            <label>Product Name :</label>{names.itemName}<br/>
            <label>S/N :</label>{names.serialNumber}<br/>
            <label>Description :</label>{names.description}<br/>
            <label>Reporter :</label>{names.reporterId}<br/>
            <label>Date found : </label>{names.foundDate}
        </div>
    );
};
export default LostAndFoundItems;