import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
import SowetoLists, { AlexandraLists, JohannesburgLists, MidrandLists, RoodepoortLists, SandtonLists } from './LocationAnalyticsInfo';
//import LocationTable from './LocationAnalyticsInfo';
import SowetoList, { AlexandraList, JohannesburgList, MidrandList, RoodepoortList, SandtonList } from './LocationData';

const LocationAnalytics = () => {
    //variabes and functions
    const [johannesburgList,setJohannesburgList] = useState();
    const [sandtonList,setSandtonList] = useState();
    const [midrandList,setMidrandList] = useState();
    const [alexandraList,setAlexandraList] = useState();
    const [roodepoortList,setRoodepoortList] = useState();
    const [sowetoList,setSowetoList] = useState();

    //variable length
    const [johannesburgLength,setJohannesburgLength] = useState();
    const [sandtonLength,setSandtonLength] = useState();
    const [midrandLength,setMidrandLength] = useState();
    const [alexandraLength,setAlexandraLength] = useState();
    const [roodepoortLength,setRoodepoortLength] = useState();
    const [sowetoLength,setSowetoLength] = useState();

    //variable fetch
    const [sowetos,setSowetos] = useState();
    const [johannesburgs,setJohannesburgs] = useState();
    const [sandtons,setSandtons] = useState();
    const [midrands,setMidrands] = useState();
    const [alexandras,setAlexandras] = useState();
    const [roodepoorts,setRoodepoorts] = useState();

    //variables for third largest
    const [jhbThird,setJhbThird] = useState();
    const [sandThird,setSandThird] = useState();
    const [midrandThird,setMidrandThird] = useState();
    const [alexThird,setAlexThird] = useState();
    const [roodeThird,setRoodeThird] = useState();
    const [sowetoThird,setSowetoThird] = useState();

    //max value variables
    const [maxVal,setMaxVal] = useState();
    const [key,setKey] = useState();
    const [second,setSecond] = useState();
    const [third,setThird] = useState();

   
    const [jhbList,setJhbList] = useState();
    const [sdtList,setSdtList] = useState();
    const [midList,setMidList] = useState();
    const [alexList,setAlexList] = useState();
    const [roodeList,setRoodeList] = useState();
    const [swtList,setSwtList] = useState();

    //varibales
    const [jhbLists,setJhbLists] = useState();
    const [sdtLists,setSdtLists] = useState();
    const [midLists,setMidLists] = useState();
    const [alexLists,setAlexLists] = useState();
    const [roodeLists,setRoodeLists] = useState();
    const [swtLists,setSwtLists] = useState();

     //variables
     const [johannesList,setJohannesList] = useState();
     const [sandyList,setSandyList] = useState();
     const [midyList,setMidyList] = useState();
     const [alexyList,setAlexyList] = useState();
     const [roodeyList,setRoodeyList] = useState();
     const [sowetoeList,setSowetoeList] = useState();
 

    //a function to find Johannesburg
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Johannesburg');
        findRef.on('value',(snapshot) => {
            const johannesburg = snapshot.val();
            const johannesburgList = [];
            for(let id in johannesburg) {
                johannesburgList.push({ id, ... johannesburg[id]});
            }
            setJohannesburgList(johannesburgList);
            console.log('Johannesburg:',johannesburgList);

            const johannesburgLength = johannesburgList.length;
            setJohannesburgLength(johannesburgLength);
            console.log('Johannesburg instances:',johannesburgLength);
        });
    },[]);
    //Sandton length
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Sandton');
        findRef.on('value',(snapshot) => {
            const sandton = snapshot.val();
            const sandtonList = [];
            for(let id in sandton) {
                sandtonList.push({ id, ... sandton[id]});
            }
            setSandtonList(sandtonList);
            console.log('Sandton:',sandtonList);

            const sandtonLength = sandtonList.length;
            setSandtonLength(sandtonLength);
            console.log('Sandton instances:',sandtonLength);
        });
    },[]);
    //Midrand length
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Midrand');
        findRef.on('value',(snapshot) => {
            const midrand = snapshot.val();
            const midrandList = [];
            for(let id in midrand) {
                midrandList.push({ id, ... midrand[id]});
            }
            setMidrandList(midrandList);
            console.log('Midrand :',midrandList);

            const midrandLength = midrandList.length;
            setMidrandLength(midrandLength);
            console.log('Midrand instances:',midrandLength);
        });
    },[]);
    //Alexandra length
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Alexandra');
        findRef.on('value',(snapshot) => {
            const alexandra = snapshot.val();
            const alexandraList = [];
            for(let id in alexandra) {
                alexandraList.push({ id, ... alexandra[id]});
            }
            setAlexandraList(alexandraList);
            console.log('Alexandra:',alexandraList);

            const alexandraLength = alexandraList.length;
            setAlexandraLength(alexandraLength);
            console.log('Alexandra instances:',alexandraLength);
        });
    },[]);
    //Roodepoort length
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Roodepoort');
        findRef.on('value',(snapshot) => {
            const roodepoort = snapshot.val();
            const roodepoortList = [];
            for(let id in roodepoort) {
                roodepoortList.push({ id, ...roodepoort[id]});
            }
            setRoodepoortList(roodepoortList);
            console.log('Roodepoort:',roodepoortList);

            const roodepoortLength = roodepoortList.length;
            setRoodepoortLength(roodepoortLength);
            console.log('Roodepoort instances:',roodepoortLength);
        });
    },[]);
    //Soweto length
    useEffect(() => {
        const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Soweto');
        findRef.on('value',(snapshot) => {
            const soweto = snapshot.val();
            const sowetoList = [];
            for(let id in soweto) {
                sowetoList.push({ id, ... soweto[id]});
            }
            setSowetoList(sowetoList);
            console.log('Soweto:',sowetoList);

            const sowetoLength = sowetoList.length;
            setSowetoLength(sowetoLength);
            console.log('Soweto instances:',sowetoLength);
        });
    },[]);

    //a function to find the location with high report rate
    useEffect(() => {
        var Johannesburg = johannesburgLength;
        var Sandton = sandtonLength;
        var Midrand = midrandLength;
        var Alexandra = alexandraLength;
        var Roodepoort = roodepoortLength;
        var Soweto = sowetoLength;

        var array = {Johannesburg, Sandton, Midrand, Alexandra, Roodepoort, Soweto};
        const maxVal = Math.max(...Object.values(array));
        const key = Object.keys(array).find(key => array[key] === maxVal);
        console.log('Hihgest :',key, maxVal);

        setKey(key);
        setMaxVal(maxVal);

    });


    

    // a function to find the second lagest number
    useEffect(() => {
        var Johannesburg = johannesburgLength;
        var Sandton = sandtonLength;
        var Midrand = midrandLength;
        var Alexandra = alexandraLength;
        var Roodepoort = roodepoortLength;
        var Soweto = sowetoLength;

        var array = [Johannesburg, Sandton, Midrand, Alexandra, Roodepoort, Soweto];
       
        function sLargest(arr) {
			var max = Math.max.apply(null, array), 
			maxi = array.indexOf(max);
			arr[maxi] = -Infinity; 
			var secondMax = Math.max.apply(null, array);  
			arr[maxi] = max;
			return secondMax;
            //const key = Object.keys(array).find(key => array[key] === array);
           
		}
        
		//console.log('Second Largest:',sLargest(array));  
       // console.log(key,array);
        const second = sLargest(array);
        setSecond(second);

    });

    useEffect(() => {
        
        var Johannesburg = johannesburgLength;
        var Sandton = sandtonLength;
        var Midrand = midrandLength;
        var Alexandra = alexandraLength;
        var Roodepoort = roodepoortLength;
        var Soweto = sowetoLength;
        

        if(second === Johannesburg) {
            console.log('Johannesburg:',second);
            const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Johannesburg').limitToFirst(1);
            findRef.on('value',(snapshot) => {
                const johannes = snapshot.val();
                const johannesburgs = [];
                for(let id in johannes) {
                    johannesburgs.push({ id, ... johannes[id]});
                }
                //setJohannesburgs(johannesburgs);
                console.log('Johannesburg count:',johannesburgs);
            },[]);
        }else{
            if(second === Sandton) {
                console.log('Sandton:',second);
                const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Sandton').limitToFirst(1);
                findRef.on('value',(snapshot) => {
                    const sandton = snapshot.val();
                    const sandtons = [];
                    for(let id in sandton) {
                        sandtons.push({ id, ... sandton[id]});
                    }
                    setSandtons(sandtons);
                    console.log('Sandton count:',sandtons);
                },[]);
            }else{
                if(second === Midrand) {
                    console.log('Midrand:',second);
                    const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Midrand').limitToFirst(1);
                    findRef.on('value',(snapshot) => {
                        const midrand = snapshot.val();
                        const midrands = [];
                        for(let id in midrand) {
                            midrands.push({ id, ... midrand[id]});
                        }
                        setMidrands(midrands);
                        console.log('Midrand count:',midrands);
                    },[]);
                }else{
                    if(second === Alexandra) {
                        console.log('Alexandra:',second);
                        const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Alexandra').limitToFirst(1);
                        findRef.on('value',(snapshot) => {
                            const alex = snapshot.val();
                            const alexandras = [];
                            for(let id in alex) {
                                alexandras.push({ id, ... alex[id]});
                            }
                            setAlexandras(alexandras);
                            console.log('Alexandra count:',alexandras);
                        },[]);
                    }else{
                        if(second === Roodepoort) {
                            console.log('Roodepoort:',second);
                        }else{
                            if(second === Soweto) {
                                console.log('Soweto:',second);
                                const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Soweto').limitToFirst(1);
                                findRef.on('value',(snapshot) => {
                                    const soweto = snapshot.val();
                                    const sowetos = [];
                                    for(let id in soweto) {
                                        sowetos.push({ id, ... soweto[id]});
                                    }
                                    setSowetos(sowetos);
                                    console.log('Soweto count:',sowetos);
                                },[]);
                            };
                        };
                    };
                };
            };
        };

    });

    // a function to find the third largest town
    useEffect(() => {
        var Johannesburg = johannesburgLength;
        var Sandton = sandtonLength;
        var Midrand = midrandLength;
        var Alexandra = alexandraLength;
        var Roodepoort = roodepoortLength;
        var Soweto = sowetoLength;

        //var array = [Johannesburg,Sandton,Midrand,Alexandra,Roodepoort,Soweto];
        const arr = [Johannesburg,Sandton,Midrand,Alexandra,Roodepoort,Soweto];
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

    //a function to find the largest town from reports table
    useEffect(() => {
        var johannesburg = johannesburgLength;
        var sandton = sandtonLength;
        var midrand = midrandLength;
        var alexandra = alexandraLength;
        var roodepoort = roodepoortLength;
        var soweto = sowetoLength;

        if(third === johannesburg){
            console.log('Johannesburg:',third);
            const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Johannesburg').limitToFirst(1);
            findRef.on('value',(snapshot) => {
                const joburg = snapshot.val();
                const jhbThird = [];
                for(let id in joburg) {
                    jhbThird.push({ id, ... joburg[id]});
                }
                //setJhbThird(jhbThird);
               // console.log('Joburg count:',jhbThird);
            },[]);
        }else{
            if(third === sandton){
                console.log('Sandton:',third);
                const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Sandton').limitToFirst(1);
                findRef.on('value',(snapshot) => {
                    const sand = snapshot.val();
                    const sandThird = [];
                    for(let id in sand) {
                        sandThird.push({ id, ... sand[id]});
                    }
                    console.log('Sandton count:',sandThird);
                    setSandThird(sandThird);
                },[]);
            }else{
                if(third === midrand){
                    console.log('Midrand:',third);
                    const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Midrand').limitToFirst(1);
                    findRef.on('value',(snapshot) => {
                        const midrnd = snapshot.val();
                        const midrandThird = [];
                        for(let id in midrnd) {
                            midrandThird.push({ id, ... midrnd[id]});
                        }
                        console.log('Midrand count:',midrandThird);
                        setMidrandThird(midrandThird);
                    },[]);
                }else{
                    if(third === alexandra){
                        console.log('Alexandra:',third);
                        const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Alexandra').limitToFirst(1);
                        findRef.on('value',(snapshot) => {
                            const alex = snapshot.val();
                            const alexThird = [];
                            for(let id in alex) {
                                alexThird.push({ id, ... alex[id]});
                            }
                            console.log('Alexandra count:',alexThird);
                            setAlexThird(alexThird);
                        },[]);
                    }else{
                        if(third === roodepoort){
                            console.log('Roodepoort:',third);
                            const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Roodepoort').limitToFirst(1);
                            findRef.on('value',(snapshot) => {
                                const roode = snapshot.val();
                                const roodeThird = [];
                                for(let id in roode) {
                                    roodeThird.push({ id, ... roode[id]});
                                }
                                console.log('Roodepoort count:',roodeThird);
                                setRoodeThird(roodeThird);
                            },[]);
                        }else{
                            if(third === soweto) {
                                console.log('Soweto:',third);
                                const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Soweto').limitToFirst(1);
                                findRef.on('value',(snapshot) => {
                                    const soweto = snapshot.val();
                                    const sowetoThird = [];
                                    for(let id in soweto) {
                                        sowetoThird.push({ id, ... soweto[id]});
                                    }
                                    console.log('Soweto counts:',sowetoThird);
                                    setSowetoThird(sowetoThird);
                                });
                            };
                        };
                    };
                };
            };
        };

    });

    // a function to display all reports made in line  with the highest reported location
   /* useEffect(() => {
        const retrieveRef = firebase.database().ref('Reports').orderByChild('location').equalTo(key);
        retrieveRef.on('value',(snapshot) => {
            const reports = snapshot.val();
            const highReportList = [];
            for(let id in reports) {
                highReportList.push({ id, ... reports[id]});
            }
            setHighReportList(highReportList);
        });
    },[]);*/

   

    //a function to call all reports related to second highest location
    useEffect(() => {
        
        var Johannesburg = johannesburgLength;
        var Sandton = sandtonLength;
        var Midrand = midrandLength;
        var Alexandra = alexandraLength;
        var Roodepoort = roodepoortLength;
        var Soweto = sowetoLength;

        if((second === Johannesburg)) {
            console.log('Johannesburg:',second);
            const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Johannesburg');
            findRef.on('value',(snapshot) => {
                const johan = snapshot.val();
                const jhbList = [];
                for(let id in johan) {
                    jhbList.push({ id, ... johan[id]});
                }
                setJhbList(johannesburgs);
                console.log('Johannesburg match:',jhbList);
            },[]);
        }else{
            if((second === Sandton)) {
                console.log('Sandton:',second);
                const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Sandton');
                findRef.on('value',(snapshot) => {
                    const sands = snapshot.val();
                    const sdtList = [];
                    for(let id in sands) {
                        sdtList.push({ id, ... sands[id]});
                    }
                    setSdtList(sdtList);
                    console.log('Sandton match:',sdtList);
                },[]);
            }else{
                if((second === Midrand)) {
                    console.log('Midrand:',second);
                    const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Midrand');
                    findRef.on('value',(snapshot) => {
                        const midr = snapshot.val();
                        const midList = [];
                        for(let id in midr) {
                            midList.push({ id, ... midr[id]});
                        }
                        setMidList(midList);
                        console.log('Midrand match:',midList);
                    },[]);
                }else{
                    if((second === Alexandra) ) {
                        console.log('Alexandra:',second);
                        const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Alexandra');
                        findRef.on('value',(snapshot) => {
                            const alexi = snapshot.val();
                            const alexList = [];
                            for(let id in alexi) {
                                alexList.push({ id, ... alexi[id]});
                            }
                            setAlexList(alexList);
                            console.log('Alexandra match:',alexList);
                        },[]);
                    }else{
                        if((second === Roodepoort) ) {
                            console.log('Roodepoort:',second);
                            const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Roodepoort');
                            findRef.on('value',(snapshot) => {
                                const roodes = snapshot.val();
                                const roodeList = [];
                                for(let id in roodes) {
                                    roodeList.push({ id, ... roodes[id]});
                                }
                                setRoodeList(roodeList);
                                console.log('Roodepoort match:',roodeList);
                            },[]);
                        }else{
                            if((second === Soweto)) {
                                console.log('Soweto:',second);
                                const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Soweto');
                                findRef.on('value',(snapshot) => {
                                    const sowetoe = snapshot.val();
                                    const swtList = [];
                                    for(let id in sowetoe) {
                                        swtList.push({ id, ... sowetoe[id]});
                                    }
                                    setSwtList(swtList);
                                    console.log('Soweto match:',swtList);
                                },[]);
                            };
                        };
                    };
                };
            };
        };

    });

    //a function to  call all items related to the third highest report places
    useEffect(() => {
        
        var Johannesburg = johannesburgLength;
        var Sandton = sandtonLength;
        var Midrand = midrandLength;
        var Alexandra = alexandraLength;
        var Roodepoort = roodepoortLength;
        var Soweto = sowetoLength;

        if((third === Johannesburg) ) {
            console.log('Johannesburg:',third);
            const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Johannesburg');
            findRef.on('value',(snapshot) => {
                const johan = snapshot.val();
                const jhbLists = [];
                for(let id in johan) {
                    jhbLists.push({ id, ... johan[id]});
                }
                //setJhbLists(johannesburgs);
                console.log('Johannesburg match:',jhbLists);
            },[]);
        }else{
            if((third === Sandton) ) {
                console.log('Sandton:',third);
                const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Sandton');
                findRef.on('value',(snapshot) => {
                    const sands = snapshot.val();
                    const sdtLists = [];
                    for(let id in sands) {
                        sdtLists.push({ id, ... sands[id]});
                    }
                    setSdtLists(sdtLists);
                    console.log('Sandton match:',sdtLists);
                },[]);
            }else{
                if((third === Midrand)) {
                    console.log('Midrand:',third);
                    const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Midrand');
                    findRef.on('value',(snapshot) => {
                        const midr = snapshot.val();
                        const midLists = [];
                        for(let id in midr) {
                            midLists.push({ id, ... midr[id]});
                        }
                        setMidLists(midLists);
                        console.log('Midrand match:',midLists);
                    },[]);
                }else{
                    if((third === Alexandra)) {
                        console.log('Alexandra:',third);
                        const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Alexandra');
                        findRef.on('value',(snapshot) => {
                            const alexi = snapshot.val();
                            const alexLists = [];
                            for(let id in alexi) {
                                alexLists.push({ id, ... alexi[id]});
                            }
                            setAlexLists(alexLists);
                            console.log('Alexandra match:',alexLists);
                        },[]);
                    }else{
                        if((third === Roodepoort)) {
                            console.log('Roodepoort:',third);
                            const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Roodepoort');
                            findRef.on('value',(snapshot) => {
                                const roodes = snapshot.val();
                                const roodeLists = [];
                                for(let id in roodes) {
                                    roodeLists.push({ id, ... roodes[id]});
                                }
                                setRoodeLists(roodeLists);
                                console.log('Roodepoort match:',roodeLists);
                            },[]);
                        }else{
                            if((third === Soweto)) {
                                console.log('Soweto:',third);
                                const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Soweto');
                                findRef.on('value',(snapshot) => {
                                    const sowetoe = snapshot.val();
                                    const swtLists = [];
                                    for(let id in sowetoe) {
                                        swtLists.push({ id, ... sowetoe[id]});
                                    }
                                    setSwtLists(swtLists);
                                    console.log('Soweto match:',swtLists);
                                },[]);
                            };
                        };
                    };
                };
            };
        };

    });

    //find all items reported under the location with high report rate
    useEffect(() => {
        
        var Johannesburg = johannesburgLength;
        var Sandton = sandtonLength;
        var Midrand = midrandLength;
        var Alexandra = alexandraLength;
        var Roodepoort = roodepoortLength;
        var Soweto = sowetoLength;

        if((maxVal === Johannesburg) ) {
            console.log('Johannesburg:',maxVal);
            const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Johannesburg');
            findRef.on('value',(snapshot) => {
                const johan = snapshot.val();
                const johannesList = [];
                for(let id in johan) {
                    johannesList.push({ id, ... johan[id]});
                }
                setJohannesList(johannesList);
                console.log('Johannesburg list:',johannesList);
            },[]);
        }else{
            if((maxVal === Sandton) ) {
                console.log('Sandton:',maxVal);
                const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Sandton');
                findRef.on('value',(snapshot) => {
                    const santy = snapshot.val();
                    const sandyList = [];
                    for(let id in santy) {
                        sandyList.push({ id, ... santy[id]});
                    }
                    setSandyList(sandyList);
                    console.log('Sandton list:',sandyList);
                },[]);
            }else{
                if((maxVal === Midrand)) {
                    console.log('Midrand:',maxVal);
                    const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Midrand');
                    findRef.on('value',(snapshot) => {
                        const midrandy = snapshot.val();
                        const midyList = [];
                        for(let id in midrandy) {
                            midyList.push({ id, ... midrandy[id]});
                        }
                        setAlexyList(midyList);
                        console.log('Midrand list:',midyList);
                    },[]);
                }else{
                    if((maxVal === Alexandra)) {
                        console.log('Alexandra:',maxVal);
                        const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Alexandra');
                        findRef.on('value',(snapshot) => {
                            const alexie = snapshot.val();
                            const alexyList = [];
                            for(let id in alexie) {
                                alexyList.push({ id, ... alexie[id]});
                            }
                            setAlexyList(alexyList);
                            console.log('Alexandra list:',alexyList);
                        },[]);
                    }else{
                        if((maxVal === Roodepoort)) {
                            console.log('Roodepoort:',maxVal);
                            const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Roodepoort');
                            findRef.on('value',(snapshot) => {
                                const roodei = snapshot.val();
                                const roodeyList = [];
                                for(let id in roodei) {
                                    roodeyList.push({ id, ... roodei[id]});
                                }
                                setRoodeyList(roodeyList);
                                console.log('Roodepoort list:',roodeyList);
                            },[]);
                        }else{
                            if((maxVal === Soweto)) {
                                console.log('Soweto:',maxVal);
                                const findRef = firebase.database().ref('Reports').orderByChild('location').equalTo('Soweto');
                                findRef.on('value',(snapshot) => {
                                    const sowetoo = snapshot.val();
                                    const sowetoeList = [];
                                    for(let id in sowetoo) {
                                        sowetoeList.push({ id, ... sowetoo[id]});
                                    }
                                    setSowetoeList(sowetoeList);
                                    console.log('Soweto list:',sowetoeList);
                                },[]);
                            };
                        };
                    };
                };
            };
        };

    });
    
    return(
        <div className="intelligence">
            <h5>From all the items reported,<br/>{key} is the leading location with<br/>
            high rate of items reported.<br/>
            {key} is leading with {maxVal} reported cases.<br/><br/>
            A location in second place is: {sowetos ? sowetos.map((names, index) => <SowetoList names={names} key={index} />) : ''}
            {sandtons ? sandtons.map((names, index) => <SandtonList names={names} key={index}/>) : ''}
            {johannesburgs ? johannesburgs.map((names,index) => <JohannesburgList names={names} key={index} />) : ''}
            {midrands ? midrands.map((names,index) => <MidrandList names={names} key={index} />) :''}
            {alexandras ? alexandras.map((names,index) => <AlexandraList names={names} key={index} />) : ''}
            {roodepoorts ? roodepoorts.map((names,index) => <RoodepoortList names={names} key={index} /> ) : ''}
            .<br/>
            Lost items have been reported {second} of times from this location.<br/><br/>
            In third place : {jhbThird ? jhbThird.map((names,index) => <SowetoList names={names} key={index}/>) : ''}
            {sandThird ? sandThird.map((names,index) =><SandtonList names={names} key={index} />) : ''}
            {midrandThird ? midrandThird.map((names,index) => <MidrandList names={names} key={index}/>) : ''}
            {alexThird ? alexThird.map((names,index) => <AlexandraList names={names} key={index} />) : ''}
            {roodeThird ? roodeThird.map((names,index) => <RoodepoortList names={names} key={index} />) : ''}
            {sowetoThird ? sowetoThird.map((names,index) => <SowetoList names={names} key={index} />) : ''}
            In this location {third} report(s) have been made so far!
            </h5>
            <br/>
            <hr/>
            <br/>
            <h3>Top 3 crime hotspots:</h3>
            <div className="wishlist-results">
                <table className="table"></table>
                    <tr>
                        <th>Location</th>
                        <th>Total items reported</th>
                    </tr>
                    <tr>
                        <td>1.{key}</td>
                        <td>{maxVal}</td>
                    </tr>
                    <tr>
                        <td>2.{sowetos ? sowetos.map((names, index) => <SowetoList names={names} key={index} />) : ''}
                        {sandtons ? sandtons.map((names, index) => <SandtonList names={names} key={index}/>) : ''}
                        {johannesburgs ? johannesburgs.map((names,index) => <JohannesburgList names={names} key={index} />) : ''}
                        {midrands ? midrands.map((names,index) => <MidrandList names={names} key={index} />) :''}
                        {alexandras ? alexandras.map((names,index) => <AlexandraList names={names} key={index} />) : ''}
                        {roodepoorts ? roodepoorts.map((names,index) => <RoodepoortList names={names} key={index} /> ) : ''}</td>
                        <td>{second}</td>
                    </tr>
                    <tr>
                        <td>3.{jhbThird ? jhbThird.map((names,index) => <SowetoList names={names} key={index}/>) : ''}
                        {sandThird ? sandThird.map((names,index) =><SandtonList names={names} key={index} />) : ''}
                        {midrandThird ? midrandThird.map((names,index) => <MidrandList names={names} key={index}/>) : ''}
                        {alexThird ? alexThird.map((names,index) => <AlexandraList names={names} key={index} />) : ''}
                        {roodeThird ? roodeThird.map((names,index) => <RoodepoortList names={names} key={index} />) : ''}
                        {sowetoThird ? sowetoThird.map((names,index) => <SowetoList names={names} key={index} />) : ''}</td>
                        <td>{third}</td>
                    </tr>
            </div>
            <br/>
            <hr/>
            <br/>
            <h3>Top 3 crime hotspots and Items stolen:</h3>
            <div className="wishlist-results">
                <table className="table">
                    <tr>
                        <th>Location</th>
                        <th>Items reported</th>
                    </tr>
                    <tr>
                        <td>1.{key}</td>
                        <td>
                            {sowetoeList ? sowetoeList.map((names,index) => <SowetoLists names={names} key={index}/>):''}
                            {sandyList ? sandyList.map((names,index) => <SandtonLists names={names} key={index} />):''}
                            {johannesList ? johannesList.map((names,index) => <JohannesburgLists names={names} key={index}/>):''}
                            {midyList ? midyList.map((names,index) => <MidrandLists names={names} key={index} />):''}
                            {alexyList ? alexyList.map((names,index) => <AlexandraLists names={names} key={index} />):''}
                            {roodeyList ? roodeyList.map((names,index) => <RoodepoortLists names={names} key={index} />):''}
                        </td>
                    </tr>
                    <tr>
                        <td>2.{sowetos ? sowetos.map((names, index) => <SowetoList names={names} key={index} />) : ''}
                        {sandtons ? sandtons.map((names, index) => <SandtonList names={names} key={index}/>) : ''}
                        {johannesburgs ? johannesburgs.map((names,index) => <JohannesburgList names={names} key={index} />) : ''}
                        {midrands ? midrands.map((names,index) => <MidrandList names={names} key={index} />) :''}
                        {alexandras ? alexandras.map((names,index) => <AlexandraList names={names} key={index} />) : ''}
                        {roodepoorts ? roodepoorts.map((names,index) => <RoodepoortList names={names} key={index} /> ) : ''}</td>
                        <td>
                            {swtList ? swtList.map((names,index) => <SowetoLists names={names} key={index}/>):''}
                            {sdtList ? sdtList.map((names,index) => <SandtonLists names={names} key={index} /> ):''}
                            {jhbList ? jhbList.map((names,index) => <JohannesburgLists names={names} key={index}/>):''}
                            {midList ? midList.map((names,index) => <MidrandLists names={names} key={index}/>):''}
                            {alexList ? alexList.map((names,index) => <AlexandraLists names={names} key={index}/>):''}
                            {roodeList ? roodeList.map((names,index) => <RoodepoortLists names={names} key={index}/>):''}
                        </td>
                    </tr>
                    <tr>
                        <td>3.{jhbThird ? jhbThird.map((names,index) => <SowetoList names={names} key={index}/>) : ''}
                        {sandThird ? sandThird.map((names,index) =><SandtonList names={names} key={index} />) : ''}
                        {midrandThird ? midrandThird.map((names,index) => <MidrandList names={names} key={index}/>) : ''}
                        {alexThird ? alexThird.map((names,index) => <AlexandraList names={names} key={index} />) : ''}
                        {roodeThird ? roodeThird.map((names,index) => <RoodepoortList names={names} key={index} />) : ''}
                        {sowetoThird ? sowetoThird.map((names,index) => <SowetoList names={names} key={index} />) : ''}</td>
                        <td>
                            {swtLists ? swtLists.map((names,index) => <SowetoLists names={names} key={index}/>):''}
                            {sdtLists ? sdtLists.map((names,index) => <SandtonLists names={names} key={index} />):''}
                            {jhbLists ? jhbLists.map((names,index) => <JohannesburgLists names={names} key={index}/>):''}
                            {midLists ? midLists.map((names,index) => <MidrandLists names={names} key={index} />):''}
                            {alexLists ? alexLists.map((names,index) => <AlexandraLists names={names} key={index} />):''}
                            {roodeLists ? roodeLists.map((names,index) => <RoodepoortLists names={names} key={index} />):''}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};
export default LocationAnalytics;