import { useEffect, useState } from "react";

import Prediction from "./Prediction/Prediction";

import predictionServices from "../../services/predictionServices";
import matchServices from "../../services/matchServices";
import getStatus from "../../utils/getStatus";
import "./Predictions.css";

const Predictions = (props) => {
    const [predictions, setPredictions] = useState();
    const [oldPredictions, setOldPredictions] = useState();

    useEffect(() => {
        predictionServices.getPredictions().then((res) => {
            let data = Object.entries(res);
            // update matches
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
                let futureData = data.filter(
                    (x) => x[1].matchDetails.fixture.status.short === "NS"
                );
                let oldData = data.filter(
                    (x) => x[1].matchDetails.fixture.status.short !== "NS"
                );
                setPredictions(futureData);
                setOldPredictions(oldData);
                console.log(oldData);
            }, 500);
        });
    }, []);

    return (
        <>
            <h3>Current Predictions</h3>
            <div className="predictionsPageContainer">
                {predictions
                    ? predictions.map((prediction) => (
                          <Prediction
                              key={prediction[0]}
                              matchInfo={prediction[1]}
                              isRender
                          />
                      ))
                    : "There is no Predictions Currently"}
            </div>
            <h3>Past Predictions</h3>
            <div className="predictionsPageContainer">
                {oldPredictions
                    ? oldPredictions.map((prediction) => (
                          <Prediction
                              key={prediction[0]}
                              matchInfo={prediction[1]}
                              isRender //render only if render is true
                          />
                      ))
                    : "There is no Predictions Currently"}
            </div>
        </>
    );
};

export default Predictions;
