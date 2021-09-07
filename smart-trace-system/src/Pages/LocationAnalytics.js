import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';
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
            </h5><br/>
        </div>
    );
};
export default LocationAnalytics;