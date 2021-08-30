import React, { useState } from 'react'
import  WebcamCapture from './BarcodeScanner';


const Home = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');


    const submitForm = () => {
        alert("Form submitted");
        setName('');
        setEmail('');
    }


    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Extract Text!</h1>
                    <div className="form">
                        <WebcamCapture/>
                        {/*<input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <button type="submit" id="login-button" onClick={(e) => submitForm(e)}>Submit</button>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home