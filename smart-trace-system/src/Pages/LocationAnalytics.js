import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';

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

    //a function to find the maximum value of the bunch

    return(
        <div>Location</div>
    );
};
export default LocationAnalytics;