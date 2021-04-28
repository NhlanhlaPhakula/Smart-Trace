import React, { useEffect, useState } from 'react';
import firebase from '../Components/Firebase';

const  TableList = () => {
    const [tableList, setTableList] = useState();

    useEffect(() => {
        const tableRef = firebase.database().ref('Products');
        tableRef.on('value', (snapshot) => {
            const tables = snapshot.val();
            const tableList = [];
            for (let id in tables) {
                tableList.push(tables[id]);
            }
            console.log(tableList);
            setTableList(tableList);
        });
    }, []);
    return(
        <div>
            <h1>Table</h1>
            {tableList ? tableList.map((table) => <h1>{table.name}</h1>) : ''}
        </div>
    );
};
export default TableList; 