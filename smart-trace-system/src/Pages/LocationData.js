import React from 'react';
import firebase from '../Components/Firebase';

const SowetoList = ({names}) => {
    return(
        <div>
            {names.location}
        </div>
    );
};
export default SowetoList;

const SandtonList = ({names}) => {
    return(
        <div>
            {names.location}
        </div>
    );
};

const JohannesburgList = ({names}) => {
    return(
        <div>
            {names.location}
        </div>
    );
};

const MidrandList = ({names}) => {
    return(
        <div>
            {names.location}
        </div>
    );
};

const AlexandraList = ({names}) => {
    return(
        <div>
            {names.location}
        </div>
    );
};

const RoodepoortList = ({names}) => {
    return(
        <div>{names.location}</div>
    );
};

export {SandtonList,JohannesburgList,MidrandList,AlexandraList,RoodepoortList};
