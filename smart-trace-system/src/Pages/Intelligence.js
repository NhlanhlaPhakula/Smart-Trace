import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import DesktopIntell, { CameraIntell, DvDIntell, FanIntell, GameConsoleIntell, IpadIntell, IPodIntell, LaptopIntell, MobilePhoneIntell, OvenIntell, PrinterIntell, RadioIntell, TelevisionIntell, WashingMachineIntell } from './DeviceData';
import LocationAnalytics from './LocationAnalytics';

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

    //second variables
    const [cameraSec,setCameraSec] = useState();
    const [desktopSec,setDesktopSec] = useState();
    const [dvdSec,setDvdSec] = useState();
    const [fanSec,setFanSec] = useState();
    const [gameSec,setGameSec] = useState();
    const [ipadSec,setIpadSec] = useState();
    const [ipodSec,setIpodSec] = useState();
    const [laptopSec,setLaptopSec] = useState();
    const [phoneSec,setPhonesSec] = useState();
    const [ovenSec,setOvenSec] = useState();
    const [printerSec,setPrinterSec] = useState();
    const [radioSec,setRadioSec] = useState();
    const [televisionSec,setTelevisionSec] = useState();
    const [washingSec,setWashingSec] = useState();

    //third variables
    const [cameraThird,setCameraThird] = useState();
    const [desktopThird,setDesktopThird] = useState();
    const [dvdThird,setDvdThird] = useState();
    const [fanThird,setFanThird] = useState();
    const [gameThird,setGameThird] = useState();
    const [ipadThird,setIpadThird] = useState();
    const [ipodThird,setIpodThird] = useState();
    const [laptopThird,setLaptopThird] = useState();
    const [phoneThird,setPhonesThird] = useState();
    const [ovenThird,setOvenThird] = useState();
    const [printerThird,setPrinterThird] = useState();
    const [radioThird,setRadioThird] = useState();
    const [televisionThird,setTelevisionThird] = useState();
    const [washingThird,setWashingThird] = useState();

    //max vaiables
    const [maxVal, setMaxVal] = useState();
    const [Key, setKey] = useState();
    const [second, setSecond] = useState();
    const [third, setThird] = useState();

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
    /* useEffect(() => {
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
    });*/
    // a function to display top three results from the database
    /*useEffect(() => {
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

    });*/
    //a function to find the second largest device 
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

        var array = [camera, desktop, dvd, fan, game, ipad, ipod, laptop, phone, oven, printer, radio, television, washing];

        function sLargest(arr) {
			var max = Math.max.apply(null, array), 
			maxi = array.indexOf(max);
			arr[maxi] = -Infinity; 
			var secondMax = Math.max.apply(null, array);  
			arr[maxi] = max;
			return secondMax;
        }
        const second = sLargest(array);
        setSecond(second);
        //console.log('Second Largest:',second);
    });
    //a function to compare and find the exact match
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

        //var array = [camera, desktop, dvd, fan, game, ipad, ipod, laptop, phone, oven, printer, radio, television, washing];
        if(second === camera) {
            console.log('Camera:',second);
            const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Camera').limitToFirst(1);
            findRef.on('value',(snapshot) => {
                const cameras = snapshot.val();
                const cameraSec = [];
                for(let id in cameras) {
                    cameraSec.push({ id, ... cameras[id]});
                }
                console.log('Cameras:',cameraSec);
                setCameraSec(cameraSec);
            },[]);
        }else{
            if(second === desktop) {
                console.log('Camera:',second);
                const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Desktop Computer').limitToFirst(1);
                findRef.on('value',(snapshot) => {
                    const desk = snapshot.val();
                    const desktopSec = [];
                    for(let id in desk) {
                        desktopSec.push({ id, ... desk[id]});
                    }
                    console.log('Desktop Computer:',desktopSec);
                    setDesktopSec(desktopSec);
                },[]);
            }else{
                if(second === dvd) {
                    console.log('Fan:',dvd);
                    const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Fan').limitToFirst(1);
                    findRef.on('value',(snapshot) => {
                        const fans = snapshot.val();
                        const fanSec = [];
                        for(let id in fans) {
                            fanSec.push({ id, ... fans[id]});
                        }
                        console.log('Fan:',fanSec);
                        setFanSec(fanSec);
                    },[]);
                }else{
                    if(second === game) {
                        console.log('Game:',game);
                        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Game Console').limitToFirst(1);
                        findRef.on('value',(snapshot) => {
                            const games = snapshot.val();
                            const gameSec = [];
                            for(let id in games) {
                                gameSec.push({ id, ... games[id]});
                            }
                            console.log('Game Console:',gameSec);
                            setGameSec(gameSec);
                        },[]);
                    }else{
                        if(second === ipad) {
                            console.log('iPads',ipad);
                            const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('iPad').limitToFirst(1);
                            findRef.on('value',(snapshot) => {
                                const ipads = snapshot.val();
                                const ipadSec = [];
                                for(let id in ipads) {
                                    ipadSec.push({ id, ... ipads[id]});
                                }
                                console.log('iPad:',ipadSec);
                                setIpadSec(ipadSec);
                            },[]);
                        }else{
                            if(second === ipod) {
                                console.log('iPods',ipod);
                                const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('iPod').limitToFirst(1);
                                findRef.on('value',(snapshot) => {
                                    const ipods = snapshot.val();
                                    const ipodSec = [];
                                    for(let id in ipods) {
                                        ipodSec.push({ id, ... ipods[id]});
                                    }
                                    console.log('iPod:',ipodSec);
                                    setIpodSec(ipodSec);
                                },[]);
                            }else{
                                if(second === laptop) {
                                    console.log('Laptops',laptop);
                                    const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Laptop').limitToFirst(1);
                                    findRef.on('value',(snapshot) => {
                                        const laptops = snapshot.val();
                                        const laptopSec = [];
                                        for(let id in laptops) {
                                            laptopSec.push({ id, ... laptops[id]});
                                        }
                                        console.log('Laptop:',laptopSec);
                                        setLaptopSec(laptopSec);
                                    },[]);
                                }else{
                                    if(second === phone) {
                                        console.log('Mobile',phone);
                                        const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Mobile Phone').limitToFirst(1);
                                        findRef.on('value',(snapshot) => {
                                            const phones = snapshot.val();
                                            const phoneSec = [];
                                            for(let id in phones) {
                                                phoneSec.push({ id, ... phones[id]});
                                            }
                                            console.log('Mobiles:',phoneSec);
                                            setPhonesSec(phoneSec);
                                        },[]);
                                    }else{
                                        if(second === oven) {
                                            console.log('Ovens',oven);
                                            const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Oven').limitToFirst(1);
                                            findRef.on('value',(snapshot) => {
                                                const ovens = snapshot.val();
                                                const ovenSec = [];
                                                for(let id in ovens) {
                                                    ovenSec.push({ id, ... ovens[id]});
                                                }
                                                console.log('iPad:',ovenSec);
                                                setOvenSec(ovenSec);
                                            },[]);
                                        }else{
                                            if(second === printer) {
                                                console.log('Printer:',printer);
                                                const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Printer').limitToFirst(1);
                                                findRef.on('value',(snapshot) => {
                                                    const printers = snapshot.val();
                                                    const printerSec = [];
                                                    for(let id in printers) {
                                                        printerSec.push({ id, ... printers[id]});
                                                    }
                                                    console.log('iPad:',printerSec);
                                                    setPrinterSec(printerSec);
                                                },[]);
                                            }else{
                                                if(second === radio) {
                                                    console.log('Radio:',radio);
                                                    const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Radio').limitToFirst(1);
                                                    findRef.on('value',(snapshot) => {
                                                        const radios = snapshot.val();
                                                        const radioSec = [];
                                                        for(let id in radios) {
                                                            radioSec.push({ id, ... radios[id]});
                                                        }
                                                        console.log('Radios:',radioSec);
                                                        setRadioSec(radioSec);
                                                    },[]);
                                                }else{
                                                    if(second === television) {
                                                        console.log('Televisions:',television);
                                                        const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Television').limitToFirst(1);
                                                        findRef.on('value',(snapshot) => {
                                                            const televisions = snapshot.val();
                                                            const televisionSec = [];
                                                            for(let id in televisions) {
                                                                televisionSec.push({ id, ... televisions[id]});
                                                            }
                                                            console.log('Television:',televisionSec);
                                                            setTelevisionSec(televisionSec);
                                                        },[]);
                                                    }else{
                                                        if(second === washing) {
                                                            console.log('Washing Machine',washing);
                                                            const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Washing Machine').limitToFirst(1);
                                                            findRef.on('value',(snapshot) => {
                                                                const washings = snapshot.val();
                                                                const washingSec = [];
                                                                for(let id in washings) {
                                                                    washingSec.push({ id, ... washings[id]});
                                                                }
                                                                console.log('Washing Machines:',washingSec);
                                                                setWashingSec(washingSec);
                                                            },[]);
                                                        }else{
                                                            if(second === fan) {
                                                                console.log('Fans:',fan);
                                                                const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Fan').limitToFirst(1);
                                                                findRef.on('value',(snapshot) => {
                                                                    const fans = snapshot.val();
                                                                    const fanSec = [];
                                                                    for(let id in fans) {
                                                                        fanSec.push({ id, ... fans[id]});
                                                                    }
                                                                    console.log('Fan:',fanSec);
                                                                    setFanSec(fanSec);
                                                                },[]);
                                                            }
                                                        }
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    });

    // a function to find the third largest number of devices reported
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

        var arr = [camera, desktop, dvd, fan, game, ipad, ipod, laptop, phone, oven, printer, radio, television, washing];
        const findThirdMax = (arr) => {
            let [first, second, third] = [-Infinity, -Infinity, -Infinity];
            for (let el of arr) {
                if (el === first || el === second || el === third) {
                    continue; };
                    if (el > first) {
                        [first, second, third] = [el, first, second]; continue; };
                    if (el > second) {
                        [second, third] = [el, second]; continue;
                    };
                    if (el > third) {
                        third = el; continue;
                };
            };
            return third !== -Infinity ? third : first;
            };
            console.log(findThirdMax(arr));
            const third = findThirdMax(arr);
            setThird(third);

    });
    // a function to find the third device stolen mostly
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

        if(third === camera) {
            console.log('Camera:',third);
            const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Camera').limitToFirst(1);
            findRef.on('value',(snapshot) => {
                const camerass = snapshot.val();
                const cameraThird = [];
                for(let id in camerass) {
                    cameraThird.push({ id, ... camerass[id]});
                }
                console.log('Cameras:',cameraThird);
                setCameraThird(cameraThird);
            },[]);
        }else{
            if(third === desktop) {
                console.log('Camera:',third);
                const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Desktop Computer').limitToFirst(1);
                findRef.on('value',(snapshot) => {
                    const desks = snapshot.val();
                    const desktopThird = [];
                    for(let id in desks) {
                        desktopThird.push({ id, ... desks[id]});
                    }
                    console.log('Desktop Computer:',desktopThird);
                    setDesktopThird(desktopThird);
                },[]);
            }else{
                if(third === dvd) {
                    console.log('Fan:',dvd);
                    const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Fan').limitToFirst(1);
                    findRef.on('value',(snapshot) => {
                        const fanss = snapshot.val();
                        const fanThird = [];
                        for(let id in fanss) {
                            fanThird.push({ id, ... fanss[id]});
                        }
                        console.log('Fan:',fanThird);
                        setFanThird(fanThird);
                    },[]);
                }else{
                    if(third === game) {
                        console.log('Game:',game);
                        const findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Game Console').limitToFirst(1);
                        findRef.on('value',(snapshot) => {
                            const gamess = snapshot.val();
                            const gameThird = [];
                            for(let id in gamess) {
                                gameThird.push({ id, ... gamess[id]});
                            }
                            console.log('Game Console:',gameThird);
                            setGameThird(gameThird);
                        },[]);
                    }else{
                        if(third === ipad) {
                            console.log('iPads',ipad);
                            const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('iPad').limitToFirst(1);
                            findRef.on('value',(snapshot) => {
                                const ipadss = snapshot.val();
                                const ipadThird = [];
                                for(let id in ipadss) {
                                    ipadThird.push({ id, ... ipadss[id]});
                                }
                                console.log('iPad:',ipadThird);
                                setIpadThird(ipadThird);
                            },[]);
                        }else{
                            if(third === ipod) {
                                console.log('iPods',ipod);
                                const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('iPod').limitToFirst(1);
                                findRef.on('value',(snapshot) => {
                                    const ipodss = snapshot.val();
                                    const ipodThird = [];
                                    for(let id in ipodss) {
                                        ipodThird.push({ id, ... ipodss[id]});
                                    }
                                    console.log('iPod:',ipodThird);
                                    setIpodThird(ipodThird);
                                },[]);
                            }else{
                                if(third === laptop) {
                                    console.log('Laptops',laptop);
                                    const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Laptop').limitToFirst(1);
                                    findRef.on('value',(snapshot) => {
                                        const laptopss = snapshot.val();
                                        const laptopThird = [];
                                        for(let id in laptopss) {
                                            laptopThird.push({ id, ... laptopss[id]});
                                        }
                                        console.log('Laptop:',laptopThird);
                                        setLaptopThird(laptopThird);
                                    },[]);
                                }else{
                                    if(third === phone) {
                                        console.log('Mobile',phone);
                                        const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Mobile Phone').limitToFirst(1);
                                        findRef.on('value',(snapshot) => {
                                            const phoness = snapshot.val();
                                            const phoneThird = [];
                                            for(let id in phoness) {
                                                phoneThird.push({ id, ... phoness[id]});
                                            }
                                            console.log('Mobiles:',phoneThird);
                                            setPhonesThird(phoneThird);
                                        },[]);
                                    }else{
                                        if(third === oven) {
                                            console.log('Ovens',oven);
                                            const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Oven').limitToFirst(1);
                                            findRef.on('value',(snapshot) => {
                                                const ovenss = snapshot.val();
                                                const ovenThird = [];
                                                for(let id in ovenss) {
                                                    ovenThird.push({ id, ... ovenss[id]});
                                                }
                                                console.log('iPad:',ovenThird);
                                                setOvenThird(ovenThird);
                                            },[]);
                                        }else{
                                            if(third === printer) {
                                                console.log('Printer:',printer);
                                                const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Printer').limitToFirst(1);
                                                findRef.on('value',(snapshot) => {
                                                    const printerss = snapshot.val();
                                                    const printerThird = [];
                                                    for(let id in printerss) {
                                                        printerThird.push({ id, ... printerss[id]});
                                                    }
                                                    console.log('iPad:',printerThird);
                                                    setPrinterThird(printerThird);
                                                },[]);
                                            }else{
                                                if(third === radio) {
                                                    console.log('Radio:',radio);
                                                    const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Radio').limitToFirst(1);
                                                    findRef.on('value',(snapshot) => {
                                                        const radioss = snapshot.val();
                                                        const radioThird = [];
                                                        for(let id in radioss) {
                                                            radioThird.push({ id, ... radioss[id]});
                                                        }
                                                        console.log('Radios:',radioThird);
                                                        setRadioThird(radioThird);
                                                    },[]);
                                                }else{
                                                    if(third === television) {
                                                        console.log('Televisions:',television);
                                                        const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Television').limitToFirst(1);
                                                        findRef.on('value',(snapshot) => {
                                                            const televisionss = snapshot.val();
                                                            const televisionThird = [];
                                                            for(let id in televisionss) {
                                                                televisionThird.push({ id, ... televisionss[id]});
                                                            }
                                                            console.log('Television:',televisionThird);
                                                            setTelevisionThird(televisionThird);
                                                        },[]);
                                                    }else{
                                                        if(third === washing) {
                                                            console.log('Washing Machine',washing);
                                                            const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Washing Machine').limitToFirst(1);
                                                            findRef.on('value',(snapshot) => {
                                                                const washingss = snapshot.val();
                                                                const washingThird = [];
                                                                for(let id in washingss) {
                                                                    washingThird.push({ id, ... washingss[id]});
                                                                }
                                                                console.log('Washing Machines:',washingThird);
                                                                setWashingThird(washingThird);
                                                            },[]);
                                                        }else{
                                                            if(third === fan) {
                                                                console.log('Fans:',fan);
                                                                const  findRef = firebase.database().ref('Reports').orderByChild('category').equalTo('Fan').limitToFirst(1);
                                                                findRef.on('value',(snapshot) => {
                                                                    const fanss = snapshot.val();
                                                                    const fanThird = [];
                                                                    for(let id in fanss) {
                                                                        fanThird.push({ id, ... fanss[id]});
                                                                    }
                                                                    console.log('Fan:',fanThird);
                                                                    setFanThird(fanThird);
                                                                },[]);
                                                            }
                                                        }
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    });


    return(
        <div className="intelligence"> 
            <h4>According to the system : <br/>
            <u><b>{Key}</b></u>'s are stolen more than any<br/> 
            other electronic devices.<br/>
            To be exact in number, there is a total of <br/>
            <u><b>{maxVal}</b></u> <b>{Key}</b>'s stolen so far.<br/><br/>
            The next device that is stolen the most is a(n) :
            {cameraSec ? cameraSec.map((names,index) => <CameraIntell names={names} key={index} />):''}
            {desktopSec ? desktopSec.map((names,index) => <DesktopIntell names={names} key={index}/>):''}
            {dvdSec ? dvdSec.map((names,index) => <DvDIntell names={names} key={index}/>):''}
            {fanSec ? fanSec.map((names,index) => <FanIntell names={names} key={index} />) :''}
            {gameSec ? gameSec.map((names,index) => <GameConsoleIntell names={names} key={index} />):''}
            {ipadSec ? ipadSec.map((names,index) => <IpadIntell names={names} key={index}/>):''}
            {ipodSec ? ipodSec.map((names,index) => <IPodIntell names={names} key={index}/>):''}
            {laptopSec ? laptopSec.map((names,index) => <LaptopIntell names={names} key={index} />):''}
            {phoneSec ? phoneSec.map((names,index) => <MobilePhoneIntell names={names} key={index} />) :''}
            {ovenSec ? ovenSec.map((names,index) => <OvenIntell names={names} key={index} />):''}
            {printerSec ? printerSec.map((names,index) => <PrinterIntell names={names} key={index} />) :''}
            {radioSec ? radioSec.map((names,index) => <RadioIntell names={names} key={index} />):''}
            {televisionSec ? televisionSec.map((names,index) => <TelevisionIntell names={names} key={index} />) :''}
            {washingSec ? washingSec.map((names,index) => <WashingMachineIntell names={names} key={index} />) : ''}
            With a total of {second} devices stolen. <br/><br/>

            Device in third place is a(n):
            {cameraThird ? cameraThird.map((names,index) => <CameraIntell names={names} key={index}/>):''}
            {desktopThird ? desktopThird.map((names,index) => <DesktopIntell names={names} key={index} />) : ''}
            {dvdThird ? dvdThird.map((names,index) => <DvDIntell names={names} key={index} />) : ''}
            {fanThird ? fanThird.map((names,index) => <FanIntell names={names} key={index} />) : ''}
            {gameThird ? gameThird.map((names,index) => <GameConsoleIntell names={names} key={index} />) : ''}
            {ipadThird ? ipadThird.map((names,index) => <IpadIntell names={names} key={index} />):''}
            {ipodThird ? ipodThird.map((names,index) => <IPodIntell names={names} key={index} />) : ''}
            {laptopThird ? laptopThird.map((names,index) => <LaptopIntell names={names} key={index} />) : ''}
            {phoneThird ? phoneThird.map((names,index) => <MobilePhoneIntell names={names} key={index} />) : ''}
            {ovenThird ? ovenThird.map((names,index) => <OvenIntell names={names} key={index} />) : ''}
            {printerThird ? printerThird.map((names,index) => <PrinterIntell names={names} key={index} />) : ''}
            {radioThird ? radioThird.map((names,index) => <RadioIntell names={names} key={index} />):''}
            {televisionThird ? televisionThird.map((names,index) => <TelevisionIntell names={names} key={index} />) : ''}
            {washingThird ? washingThird.map((names,index) => <WashingMachineIntell names={names} key={index} />):''}
            This device has a total of {third} reports made so far!
            </h4><br/>
             <LocationAnalytics />
             
        </div>
    );
};
export default IntelligenceDerived;