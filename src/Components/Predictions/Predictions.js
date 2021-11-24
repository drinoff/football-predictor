import {useEffect, useState} from 'react';

import predictionServices from '../../services/predictionServices';

import Prediction from "./Prediction/Prediction";

const Predictions = (props) => {
    const [predictions, setPredictions] = useState();
    
    useEffect(() => {
        predictionServices.getPredictions()
        .then(data=>{setPredictions(data)
            console.log(data)
        })
    },[]);
    return (
    <>
        {props.predictions
            ? props.predictions.map((prediction) => <Prediction />)
            : "There is no Predictions Currently"}
    </>
    )
};

export default Predictions;
