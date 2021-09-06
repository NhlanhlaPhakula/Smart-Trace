import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';

const IntelligenceDerived = () => {
    //variables
    const[cameraList, setCameraList] = useState();
    const [desktopList, setDesktopList] = useState();
    const [dvdList, setDvdList] = useState();
    const [fanList, setFanList] = useState();
    const [gameList, setGameList] = useState();
    const [ipadList, setIpadList] = useState();
    const [ipodList, setIpodList] = useState();
    const [laptopList, setLaptopList] = useState();
    const [phoneList, setPhoneList] = useState();
    const [ovenList, setOvenList] = useState();
    const [printerList, setPrinterList] = useState();
    const [radioList, setRadioList] = useState();
    const [televisionList, setTelevisionList] = useState();
    const [washingList, setWashingList] = useState();

    //length calculation variables
    const [cameraLength,setCameraLength]= useState();
    const [desktopLength,setDesktopLength]= useState();
    const [dvdLength,setDvdLength]= useState();
    const [fanLength,setFanLength]= useState();
    const [gameLength,setGameLength] = useState();
    const [ipadLength,setIpadLength] = useState();
    const [ipodLength,setIpodLength] = useState();
    const [laptopLength,setLaptopLength] = useState();
    const [phoneLength, setPhoneLength] = useState();
    const [ovenLength,setOvenLength] = useState();
    const [printerLength,setPrinterLength] = useState();
    const [radioLength,setRadioLength] = useState();
    const [televisionLength,setTelevisionLength] = useState();
    const [washingLength,setWashingLength] = useState();

    //length variables
    /*const [cameras,setCameras] = useState();
    const [desktops,setDesktops] = useState();
    const [dvds,setDvds] = useState();
    const [fans,setFans] = useState();
    const [games,setGames] = useState();
    const [ipads,setIpads] = useState();
    const [ipods,setIpods] = useState();
    const [laptops,setLaptops] = useState();
    const [phones,setPhones] = useState();
    const [ovens,setOvens] = useState();
    const [printers,setPrinters] = useState();
    const [radios,setRadios] = useState();
    const [televisions,setTelevisions] = useState();
    const [washings,setWashings] = useState();
    */
    const [max, setMax] = useState();
    const [maxVal, setMaxVal] = useState();
    const [Key, setKey] = useState();

    //a function to calcuate camera instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Camera');
        findRef.on('value',(snapshot) => {
            const camera = snapshot.val();
            const cameraList = [];
            for(let id in camera) {
                cameraList.push({ id, ... camera[id]});
            }
            setCameraList(cameraList);
            console.log('Camera:',cameraList);

            const cameraLength = cameraList.length;
            console.log('Camera instances:',cameraLength);
            setCameraLength(cameraLength);

           // const cameras = cameraLength;
           // setCameras(cameras);
        });
    },[]);
    //a function to calculate  desktop computer instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Desktop Computer');
        findRef.on('value',(snapshot) => {
            const desktop = snapshot.val();
            const desktopList = [];
            for(let id in desktop) { 
                desktopList.push({ id, ... desktop[id]});
            }
            setDesktopList(desktopList);
            console.log('Desktop Computer:',desktopList);

            const desktopLength = desktopList.length;
            setDesktopLength(desktopLength);
            console.log('Desktop instances:',desktopLength);

           // const desktops = desktopLength;
            //setDesktops(desktopLength);
            
        });
    },[]);
    // a function to calculate dvd player instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('DvD Player');
        findRef.on('value',(snapshot) => {
            const dvd = snapshot.val();
            const dvdList = [];
            for(let id in dvd) {
                dvdList.push({ id, ... dvd[id]});
                
            }
            setDvdList(dvdList);
            console.log('DvD:',dvdList);

            const dvdLength = dvdList.length;
            setDvdLength(dvdLength);
            console.log('DvD instances:',dvdLength);

           //const dvds = dvdLength;
            //setDvds(dvdLength);
        });
    },[]);
    // a function to calculate fan instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Fan');
        findRef.on('value',(snapshot) => {
            const fan = snapshot.val();
            const fanList = [];
            for(let id in fan) {
                fanList.push({ id, ... fan[id]});
            }
            setFanList(fanList);
            console.log('Fan:',fanList);

            const fanLength = fanList.length;
            setFanLength(fanLength);
            console.log('Fan instances:',fanLength);

            //const fans = fanLength;
            //setFans(fanLength);
        });
    },[]);
    // a function to calculate game console instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Game Console');
        findRef.on('value',(snapshot) => {
            const game = snapshot.val();
            const gameList = [];
            for(let id in game) {
                gameList.push({ id, ... game[id]});
            }
            setGameList(gameList);
            console.log('Game:',gameList);

            const gameLength = gameList.length;
            setGameLength(gameLength);
            console.log('Game instances:',gameLength);

            //const games = gameLength;
            //setGameLength(gameLength);
        });
    },[]);
    // a function to calculate ipad instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('iPad');
        findRef.on('value',(snapshot) => {
            const ipad = snapshot.val();
            const ipadList = [];
            for(let id in ipad) {
                ipadList.push({ id, ... ipad[id]});
            }
            setIpadList(ipadList);
            console.log('iPad:',ipadList);

            const ipadLength = ipadList.length;
            setIpadLength(ipadLength);
            console.log('iPad instances:',ipadLength);

            //const ipads = ipadLength;
            //setIpads(ipadLength);
        });
    },[]);
    //a function to calculate ipod instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('categoory').equalTo('iPod');
        findRef.on('value',(snapshot) => {
            const ipod = snapshot.val();
            const ipodList = [];
            for(let id in ipod) {
                ipodList.push({ id, ... ipod[id]});
            }
            setIpodList(ipodList);
            console.log('iPod:',ipodList);

            const ipodLength = ipodList.length;
            setIpodLength(ipodLength);
            console.log('iPod instances:',ipodLength);

           // const ipods = ipodLength;
            //setIpods(ipodLength);
        });
    },[]);
    //a function to calculate laptop instances
    useEffect (() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Laptop');
        findRef.on('value',(snapshot) => {
            const laptop = snapshot.val();
            const laptopList = [];
            for(let id in laptop) {
                laptopList.push({ id, ... laptop[id]});
            }
            setLaptopList(laptopList);
            console.log('Laptop:',laptopList);

            const laptopLength = laptopList.length;
            setLaptopLength(laptopLength);
            console.log('Laptop instances:',laptopLength);

            //const laptops = laptopLength;
            //setLaptops(laptopLength);
        });
    },[]);
    //a function to calculate mobile phone instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Mobile Phone');
        findRef.on('value',(snapshot) => {
            const mobile = snapshot.val();
            const phoneList = [];
            for(let id in mobile) {
                phoneList.push({ id, ... mobile[id]});
            }
            setPhoneList(phoneList);
            console.log('Mobile Phone:',phoneList);

            const phoneLength = phoneList.length;
            setPhoneLength(phoneLength);
            console.log('Mobile Phone instances:',phoneLength);

            //const phones = phoneLength;
            //setPhones(phoneLength);
        });
    },[]);
    // a function to calculate oven instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Oven');
        findRef.on('value',(snapshot) => {
            const oven = snapshot.val();
            const ovenList = [];
            for(let id in oven) {
                ovenList.push({ id, ... oven[id]});
            }
            setOvenList(ovenList);
            console.log('Oven:',ovenList);

            const ovenLength = ovenList.length;
            setOvenLength(ovenLength);
            console.log('Oven instances:',ovenLength);

            //const ovens = ovenLength;
            //setOvens(ovenLength);
        });
    },[]);
    //a function to calculate printer instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Printer');
        findRef.on('value',(snapshot) => {
            const printer = snapshot.val();
            const printerList = [];
            for(let id in printer) {
                printerList.push({ id, ... printer[id]});
            }
            setPrinterList(printerList);
            console.log('Printer:',printerList);

            const printerLength = printerList.length;
            setPrinterLength(printerLength);
            console.log('Printer instances:',printerLength);

            //const printers = printerLength;
            //setPrinters(printerLength);
        });
    },[]);
    //a function to calculate radio instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Radio');
        findRef.on('value',(snapshot) => {
            const radio = snapshot.val();
            const radioList = [];
            for(let id in radio) {
                radioList.push({ id, ... radio[id]});
            }
            setRadioList(radioList);
            console.log('Radio:',radioList);

            const radioLength = radioList.length;
            setRadioLength(radioLength);
            console.log('Radio instances:',radioLength);

            //const radios = radioLength;
            //setRadios(radioLength);
        });
    },[]);
    // a function to calculate televison instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Television');
        findRef.on('value',(snapshot) => {
            const television = snapshot.val();
            const televisionList = [];
            for(let id in television) {
                televisionList.push({ id, ... television[id]});
            }
            setTelevisionList(televisionList);
            console.log('Television:',televisionList);

            const televisionLength = televisionList.length;
            setTelevisionLength(televisionLength);
            console.log('Televison instances:',televisionLength);

            //const televisions = televisionLength;
            //setTelevisionLength(televisionLength);
        });
    },[]);
    //a function to calculate washing machine instances
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Washing Machine');
        findRef.on('value',(snapshot) => {
            const washing = snapshot.val();
            const washingList = [];
            for(let id in washing) {
                washingList.push({ id, ... washing[id]});
            }
            setWashingList(washingList);
            console.log('Washing Machine:',washingList);

            const washingLength = washingList.length;
            setWashingLength(washingLength);
            console.log('Washing Machine instances:',washingLength);

            //const washings = washingLength;
            //setWashings(washingLength);
        });
    },[]);
    //a functiion to find which category has alot of items stored in the database
    /*useEffect(() => {
        const array = [cameraLength, desktopLength, dvdLength, fanLength, gameLength, ipadLength, ipodLength, laptopLength, phoneLength, ovenLength, printerLength, radioLength, televisionLength, washingLength];
        const max = array.reduce((a, b) => { return Math.max(a, b) });
        console.log('This is the biggest array: ', max);
        setMax(max);
    });

    //a function to display highest value and its variable name
    useEffect(() => {
        var num1 = 48;
        var num2 = 420;
        var num3 = 39;

        var numbers = {num1,num2,num3};

        const maxVal = Math.max(...Object.values(numbers));
        const Key = Object.keys(numbers).find(Key => numbers[Key] === maxVal);
        console.log(Key, maxVal);
    });*/

    //a function to display highest value and its variable name
    useEffect(() => {
        var camera = cameraLength;
        var desktop = desktopLength;
        var dvd = dvdLength;
        var fan = fanLength;
        var game = gameLength;
        var ipad = ipadLength;
        var ipod = ipodLength;
        var laptop = laptopLength;
        var phone = phoneLength;
        var oven = ovenLength;
        var printer = printerLength;
        var radio = radioLength;
        var television = televisionLength;
        var washing = washingLength;

        var array = {camera, desktop, dvd, fan, game, ipad, ipod, laptop, phone, oven, printer, radio, television, washing};
        const maxVal = Math.max(...Object.values(array));
        const Key = Object.keys(array).find(key => array[key] === maxVal);
        console.log(Key, maxVal);
        //yey! it works finally
        setKey(Key);
        setMaxVal(maxVal);
    });
     // a function to find the top three stolen goods from the database
     useEffect(() => {
        var maxPoints = new Array();
        var scoreByPattern = new Array(93, 17, 56, 91, 98, 33, 98);

        findLargest3();
        function findLargest3() {
            scoreByPattern.sort((a,b) => a < b ? 1 : a > b ? -1 : 0);

            //console.log(scoreByPattern[0] + scoreByPattern[1] + scoreByPattern[2]);
            console.log('Results:',scoreByPattern.slice(0,1));
            console.log('Results:',scoreByPattern.slice(1,2));
            console.log('Results:',scoreByPattern.slice(2,3));
        }
    });
    // a function to display top three results from the database
    useEffect(() => {
        var camera = cameraLength;
        var desktop = desktopLength;
        var dvd = dvdLength;
        var fan = fanLength;
        var game = gameLength;
        var ipad = ipadLength;
        var ipod = ipodLength;
        var laptop = laptopLength;
        var phone = phoneLength;
        var oven = ovenLength;
        var printer = printerLength;
        var radio = radioLength;
        var television = televisionLength;
        var washing = washingLength;
        
        //var maxPoints = new Array();
        //var scoreByPattern = new Array()
        var scoreByPattern = new Array (camera, desktop, dvd, fan, game, ipad, ipod, laptop, phone, oven, printer, radio, television, washing);
        

        findLargest3();
        function findLargest3() {
            scoreByPattern.sort((a,b) => a < b ? 1 : a > b ? -1 : 0);
            console.log('Results:',scoreByPattern.slice(0,3));
        }
     

    });

    return(
        <div className="intelligence"> 
            <h4>According to the system : <br/>
            <u><b>{Key}</b></u>'s are stolen more than any<br/> 
            other electronic devices.<br/>
            To be exact in number, there is a total of <br/>
            <u><b>{maxVal}</b></u> <b>{Key}</b>'s stolen so far.
             </h4>
        </div>
    );
};
export default IntelligenceDerived;