import React from 'react';
import firebase from '../Components/Firebase';

const Table = ({name}) =>{


    return(
        <div>
            <table className="table">
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Complete</th>
                </tr>
                <tr>
                    <th></th>
                    <th>{name.name}</th>
                    <th></th>
                </tr>
            </table>
        </div>
    );
};
export default Table;