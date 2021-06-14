import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';

const Recommendation = () => {
    //variables and functions
    const [cameraList, setCameraList] = useState();
    const [desktopList, setDesktopList] = useState();
    const [dvdList, setDvdList] = useState();
    const [fanList, setFanList] = useState();
    const [consoleList, setConsoleList] = useState();
    const [ipadList, setIpadList] = useState();
    const [ipodList, setIpodList] = useState();
    const [laptopList, setLaptopList] = useState();
    const [mobilePhoneList, setMobilePhoneList] = useState();
    const [ovenList, setOvenList] = useState();
    const [printerList, setPrinterList] = useState();
    const [radioList, setRadioList] = useState();
    const [televisionList, setTelevisionList] = useState();
    const [washingList, setWashingList] = useState();
    const user = firebase.auth().currentUser;

    //numbers
    const [camera, setCamera] = useState();
    const [desktop, setDesktop] = useState();
    const [dvdPlayer, setDvDplayer] = useState();
    const [fan, setFan] = useState();
    const [gameConsole, setGameConsole] = useState();
    const [ipad, setIpad] = useState();
    const [ipod, setIpod] = useState();
    const [laptop, setLaptop] = useState();
    const [mobilePhone, setMobilePhone] = useState();
    const [oven, setOven] = useState();
    const [printer, setPrinter] = useState();
    const [radio, setRadio] = useState();
    const [television, setTelevision] = useState();
    const [washingMachine, setWashingMachine] = useState();

    const [max, setMax] = useState();

    //a function to check how many iterations of a camera category can be made from the cart
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('Camera');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const productsList = [];
            for(let id in products){
                productsList.push({ id, ... products[id]});
            }
            const cameraLength = productsList.length;
            console.log('Camera:',productsList);
            console.log('Camera Count:', cameraLength);
           
            const camera = cameraLength;
            setCamera(camera);
        });
    },[]);

    //a function to display all the iterations under desktop category
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('Desktop Computer');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const desktopList = [];
            for(let id in products){
                desktopList.push({ id, ... products[id]});
            }
            const desktopLength = desktopList.length;
            console.log('Desktop Computer:',desktopList);
            console.log('Desktop Computer Count:', desktopLength);

            const desktop = desktopLength;
            setDesktop(desktop);
        });
    },[]);

    //a function to display all iterations under dvd player
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('DvD Player');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const dvdList = [];
            for(let id in products){
                dvdList.push({ id, ... products[id]});
            }
            const dvdPlayerLength = dvdList.length;
            console.log('DvD Player:',dvdList);
            console.log('DvD Player Count:', dvdPlayerLength);

            const dvdPlayer = dvdPlayerLength;
            setDvDplayer(dvdPlayer);
        });
    },[]);

    //a function to display all iterations of fan
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('Fan');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const fanList = [];
            for(let id in products){
                fanList.push({ id, ... products[id]});
            }
            const fanLength = fanList.length;
            console.log('Fan:',fanList);
            console.log('Fan Count:', fanLength);

            const fan = fanLength;
            setFan(fan);
        });
    },[]);

    //a function to display game console iterations
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('Game Console');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const consoleList = [];
            for(let id in products) {
                consoleList.push({ id, ... products[id]});
            }
            const consoleLength = consoleList.length;
            console.log('Game Console:',consoleList);
            console.log("Game Console Count:", consoleLength);

            const gameConsole = consoleLength;
            setGameConsole(gameConsole);
        });
    },[]);

    //a function to display all ipad iterations
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('iPad');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const ipadList = [];
            for(let id in products){
                ipadList.push({ id, ... products[id]});
            }
            const ipadLength = ipadList.length;
            console.log('iPad:',ipadList);
            console.log('iPad Count:', ipadLength);

            const ipad = ipadLength;
            setIpad(ipad);
        });
    },[]);

    //a function to display all ipod iterations
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('iPod');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const ipodList = [];
            for(let id in products){
                ipodList.push({ id, ... products[id]});
            }
            const ipodLength = ipodList.length;
            console.log('iPod:',ipodList);
            console.log('iPod Count:', ipodLength);

            const ipod = ipodLength;
            setIpod(ipod);
        });
    },[]);

    // afunction to display all laptop itertaions 
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('Laptop');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const laptopList = [];
            for(let id in products){
                laptopList.push({ id, ... products[id]});
            }
            const laptopLength = laptopList.length;
            console.log('Laptop:',laptopList);
            console.log('Laptop Count:', laptopLength);

            const laptop = laptopLength;
            setLaptop(laptop);
        });
    },[]);

    //a function to display all mobile phone iterations
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('Mobile Phone');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const mobilePhoneList = [];
            for(let id in products) {
                mobilePhoneList.push({ id, ... products[id]});
            }
            const mobileLength = mobilePhoneList.length;
            console.log('Mobile Phone:',mobilePhoneList);
            console.log('Mobile Phone Count:', mobileLength);

            const mobilePhone = mobileLength;
            setMobilePhone(mobilePhone);
        });
    },[]);

    //a function to search all iterations under oven 
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('Oven');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const ovenList = [];
            for(let id in products){
                ovenList.push({ id, ... products[id]});
            }
            const ovenLength = ovenList.length;
            console.log('Oven:', ovenList);
            console.log('Oven Count:', ovenLength);

            const oven = ovenLength;
            setOven(oven);
        });
    },[]);

    //a function to search all iterations under printer
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('Printer');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const printerList = [];
            for(let id in products){
                printerList.push({ id, ... products[id]});
            }
            const printerLength = printerList.length; 
            console.log('Printer:', printerList);
            console.log('Printer Count:', printerLength);

            const printer = printerLength;
            setPrinter(printer);
        });
    },[]);

    //a function to search all iterations under radio
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('Radio');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const radioList = [];
            for(let id in products) {
                radioList.push({ id, ... products[id]});
            }
            const radioLength = radioList.length;
            console.log('Radio:', radioList);
            console.log('Radio Count:', radioLength);

            const radio = radioLength;
            setRadio(radio);
        });
    },[]);

    //a function to search all iterations under television
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('Television');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const televisionList = [];
            for(let id in products){
                televisionList.push({ id, ... products[id]});
            }
            const televisionLength = televisionList.length;
            console.log('Television:', televisionList);
            console.log('Television Count:', televisionLength);

            const television = televisionLength;
            setTelevision(television);
        });
    },[]);

    //a function to search all iterations under washing machine
    useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').equalTo('Washing Machine');
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const washingList = [];
            for(let id in products){
                washingList.push({ id, ... products[id]});
            }
            const washingLength = washingList.length;
            console.log('Washing Machine:', washingList);
            console.log('Washing Machine Count:', washingLength);

            const washingMachine = washingLength;
            setWashingMachine(washingMachine);
        });
    },[]);

    // a function to return the highest value in an array
    useEffect(() => {
        const array = [1, 5, 3, 5, 78];
        const max = array.reduce((a, b) => { return Math.max(a, b) });
        console.log('Maximum value:', max);
    });

    // fom the results that we've recieved from the different functions above we want to find whic array consists of a lot of items
    useEffect(() => {
        const array = [camera, desktop, dvdPlayer,fan, gameConsole, ipad, ipod, laptop, mobilePhone, washingMachine, oven, printer, radio, television, washingMachine];
        const max = array.reduce((a, b) => { return Math.max(a, b) });
        console.log('This is the biggest array: ', max);
        setMax(max);
    });

    const handleRecommendation = () => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').startAt(max);
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const productsList = [];
            for(let id in products){
                productsList.push({ id, ... products[id]});
            }
            console.log('Recommended item:', productsList);
        },[]);
    };


    
    //am attempting to display the category with [max] number of instances from the firebase
    /*useEffect(() => {
        const retrieveRef = firebase.database().ref('Cart').orderByChild('category').limitToFirst(max);
        retrieveRef.on('value', (snapshot) => {
            const products = snapshot.val();
            const productsList = [];
            for(let id in products){
                productsList.push({ id, ... products[id]});
            }
            console.log('Recommended item:', productsList);
        });
    },[]);*/

    // a function to store user data into the analytics chamber for recommendations
    /*useEffect(() => {
        const saveRef = firebase.database().ref('AnalyticsData');
         
        const savingData = {
            userId: user.email,
            quantity: max,

        }
    });*/

    return(
        <div className="recommendations">
            <br/>
            <button onClick={handleRecommendation}>myRecommendations</button>

        </div>
    );
};
export default Recommendation;