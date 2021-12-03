import { useState, useEffect, useContext } from "react";

import Prediction from "../Predictions/Prediction/Prediction";

import AuthContext from "../../contexts/AuthContext";
import predictionServices from "../../services/predictionServices";
import matchServices from "../../services/matchServices";
import getStatus from "../../utils/getStatus";

import './MyPredictions.css'

const MyPredictions = () => {
    const [userPredictions, setUserPredictions] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        predictionServices.getPredictions().then((res) => {
            let data = Object.entries(res);
            data.forEach((prediction) => {
                matchServices
                    .getMatchById(prediction[1].matchDetails.fixture.id)
                    .then((matchUpdate) => {
                        prediction[1].matchDetails.fixture.status.short =
                            matchUpdate.response[0].fixture.status.short;
                        prediction[1].matchDetails.predictionStatus = getStatus(
                            matchUpdate,
                            prediction[1].prediction
                        );
                    });
            });
            setTimeout(() => {
            setUserPredictions(
                data.filter((prediction) => prediction[1].email === user.email)
            );
            }, 2000);
        });
    }, [user]);

    return (
        <div className = 'myPredictionsContainer'>
            {userPredictions.map((prediction) => (
                <Prediction
                    key={prediction[0]}
                    matchInfo={prediction[1]}
                    isRender
                />
            ))}
        </div>
    );
};

export default MyPredictions;
