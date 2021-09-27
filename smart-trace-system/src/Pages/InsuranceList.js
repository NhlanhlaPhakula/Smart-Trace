import React from 'react';
import firebase from '../Components/Firebase';

const InsuranceCategory = ({ name }) => {
    //save

    return(
        <div className="insurance-list">
            <h3>
               {name.insuranceCompany}
            </h3>
            
        </div>
    );
};
export default InsuranceCategory;

const InsuranceNiche = ({name}) => {
    return(
        <div>
            <h3>
                {name.insuranceCompany}
            </h3>
        </div>
    );
};

const InsuranceActivityPeriod = ({name}) => {
    return(
        <div>
            <h3>{name.insuranceCompany}</h3>
        </div>
    );
};

const InsurancePurchasePrice = ({name}) => {
    return(
        <div>
            <h3>{name.insuranceCompany}</h3>
        </div>
    );
};

const InsuranceMonthlyFee = ({name}) => {
    return(
        <div>
            <h3>{name.insuranceCompany}</h3>
        </div>
    );
};

const InsuranceCoverLoss = ({name}) => {
    return(
        <div>
            <h3>{name.insuranceCompany}</h3>
        </div>
    );
};

const InsuranceCoverMulfunction = ({name}) => {
    return(
        <div>
            <h3>{name.insuranceCompany}</h3>
        </div>
    );
};

const InsuranceCoverTheft = ({name}) => {
    return(
        <div>
            <h3>{name.insuranceCompany}</h3>
        </div>
    );
};

const InsuranceCoverDamage = ({name}) => {
    return(
        <div>
            <h3>{name.insuranceCompany}</h3>
        </div>
    );
};

const InsuranceCoverFire = ({name}) => {
    return(
        <div>
            <h3>{name.insuranceCompany}</h3>
        </div>
    );
};

const InsuranceCoverAll = ({name}) => {
    return(
        <div>
            <h3>{name.insuranceCompany}</h3>
        </div>
    );
};

export {InsuranceNiche,InsuranceActivityPeriod,InsurancePurchasePrice,InsuranceMonthlyFee,InsuranceCoverLoss,InsuranceCoverMulfunction,InsuranceCoverTheft,InsuranceCoverDamage,InsuranceCoverFire,InsuranceCoverAll};