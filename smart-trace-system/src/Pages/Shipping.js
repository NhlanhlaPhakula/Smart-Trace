import React, { useState } from 'react';
import firebase  from '../Components/Firebase';
import Popup from './Popup';

const Shipping = () => {
    //variables and functions 
    const [addressLine1, setAddressLine1]= useState();
    const [addressLine2, setAddressLine2] = useState();
    const [city, setCity] = useState();
    const [country, setCountry]= useState();
    const [province, setProvince] = useState();
    const [postalCode, setPostalCode] = useState();
    const user = firebase.auth().currentUser;
    const [isOpen, setIsOpen] = useState(false);

    //toggle function
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    //a function to store data into the database
    const handleStore = () => {
        const saveRef = firebase.database().ref('Shipping');

        const savingData = {
            userId: user.email,
            addressLine1,
            addressLine2,
            city,
            country,
            province,
            postalCode,
        };
        saveRef.push(savingData);
    };

    return(
        <div className="">
            <h1>Shipping Address</h1>
            <label>Address Line 1</label><br/>
            <h6>(street address,P.O.Box,company name)</h6>
            <input type="text" value={addressLine1} onChange={e=> setAddressLine1(e.target.value)} /><br/>
            <label>Address line 2</label><br/>
            <h6>(Apartment,suite,unit,building,floor,etc)</h6>
            <input type="text" value={addressLine2} onChange={e=> setAddressLine2(e.target.value)} /><br/>
            <label>City</label><br/>
            <select value={city} onChange={e=> setCity(e.target.value)} >
                <option value="Cape Town">Cape Town</option>
                <option value="Johannesburg">Johannesburg</option>
                <option value="Polokwane">Polokwane</option>
                <option value="Durban">Durban</option>
                <option value="Pretoria">Pretoria</option>
                <option value="Bloemfontein">Bloemfontein</option>
                <option value="East London">East London</option>
                <option value="Soweto">Soweto</option>
                <option value="Stellenbosch">Stellenbosch</option>
                <option value="Kimberley">Kimberley</option>
                <option value="Gaborone">Gaborone</option>
                <option value="Francistown">Francistown</option>
                <option value="Maun">Maun</option>
                <option value="Windhoek,Khomas">Windhoek, Khomas</option>
                <option value="Rundu,Kavango East">Rundu, Kavango East</option>
                <option value="Walvis Bay Erongo">Walvis Bay, Erongo</option>
                <option value="Maseru">Maseru</option>
                <option value="Harare">Harare</option>
                <option value="Bulawayo">Bulawayo</option>
                <option value="Mutare">Mutare</option>
                <option value="Maputo">Maputo</option>
                <option value="Matola">Matola</option>
                <option value="Nampula">Nampula</option>
            </select><br/>
            <label>Country</label><br/>
            <select value={country} onChange={e=> setCountry(e.target.value)} >
                <option value="South Africa">South Africa</option>
                <option value="Botswana">Botswana</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Namibia">Namibia</option>
                <option value="Mozambique">Mozambique</option>
            </select><br/>
            <label>State or Province</label><br/>
            <select value={province} onChange={e=> setProvince(e.target.value)} >
                <option value="Eastern Cape">Eastern Cape</option>
                <option value="Free State">Free State</option>
                <option value="Gauteng">Gauteng</option>
                <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                <option value="Limpopo">Limpopo</option>
                <option value="Mpumalanga">Mpumalanga</option>
                <option value="Northern Cape">Northern Cape</option>
                <option value="North West">North West</option>
                <option value="Western Cape">Western Cape</option>
            </select><br/>
            <label>Zip/Postal Code</label><br/>
            <input type="text" value={postalCode} onChange={e=> setPostalCode(e.target.value)} /><br/>
            <button onClick={() => {
                handleStore();
                togglePopup();
            }}>Ship to this address</button><br/>
            {isOpen && <Popup 
            content={<>
                <b>Smart Trace</b>
                <p>Shipping address saved successfully!!</p>
                </>}
                handleClose={togglePopup}
            />}
        </div>
    );
};
export default Shipping;