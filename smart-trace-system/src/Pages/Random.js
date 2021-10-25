import react, { useEffect, useState } from 'react';

const RandomResults = () => {
    //variables
    const [valueToUse,setValueToUse] = useState();
    //a function to display random values from an array of values
    useEffect(() => {
        var Johannesburg = "Johannesburg";
        var Sandton = "Sandton";
        var Midrand = "Midrand";
        var Alexandra = "Alexandra";
        var Roodepoort = "Roodepoort";
        var Soweto = "Soweto";

        var values = [Johannesburg,Sandton,Midrand,Alexandra,Roodepoort,Soweto];
        var valueToUse = values[Math.floor(Math.random() * values.length)];
        console.log('Random value',valueToUse);
        setValueToUse(valueToUse);
    });
        

    return(
        <div className="random-results">
            <h1>Displaying a random value from an array of values</h1>
            {valueToUse}
        </div>
    );
};
export default RandomResults;