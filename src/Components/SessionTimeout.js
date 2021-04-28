import React, { Fragment, useState, useEffect, useCallback, useRef } from 'react';
import moment from 'moment';

const SessionTimeout = ({authListener, handleLogout}) =>{

    //states that are needed
    const [events, setEvents] = useState(['click','load', 'scroll']);
    const [second, setSecond] = useState(0);

    //a function that initializes the timer when the component mounts


    // resets interval timer
    let  resetTimer = useCallback(() =>{

        clearTimeout(startTimeInterval.current);
        clearInterval(warningInactiveInterval.current);

        if(authListener) {
            timeStamp = moment();
            sessionStorage.setItem('lastTimeStamp', timeStamp);
        }else{
            sessionStorage.removeItem('lastTimeStamp');
        }
    }, [authListener]);


    //Life cycle hook
    useEffect(() =>{
        events.forEach((event)=> {
            window.addEventListener(event, resetTimer);
        });
         //we start running the timeChecker function
             timeChecker();

             return() =>{
                 clearTimeout(startTimeInterval.current);
             };
    },[resetTimer, events, timeChecker]);

    //a setTimeout function that checks for stored timeStamp
    let timeStamp;
    let warningInactiveInterval = useRef();
    let startTimeInterval = useRef();

    //start an inactive check
    let timeChecker = () =>{
        startTimeInterval.current = setTimeout(() => {
            let storedTimeStamp = sessionStorage.getItem('lastTimeStamp');
            warningInactive(storedTimeStamp);
        }, 60000);
    };

    //A function to warn the user 
    let warningInactive = (timeString) => {
        clearTimeout(startTimeInterval.current);

        warningInactiveInterval.current = setInterval(() => {
            const maxTime = 2; //maximum ideal time given before auto-logout
            const popTime = 1; //remaining time (notification) left to logout

            const diff = moment.duration(moment().diff(moment(timeString)));
            const minPast = diff.minutes();
            const leftSecond = 60 - diff.seconds();

            if (minPast === popTime) {
                setSecond(leftSecond);
            }

            if(minPast === maxTime) {
                clearInterval(warningInactiveInterval.current);;
                sessionStorage.removeItem('lastTimeStamp');
                //logout function here
                handleLogout = {handleLogout}
            }
        }, 1000);
    };

    return(
        <Fragment />
    );
};
export default SessionTimeout;